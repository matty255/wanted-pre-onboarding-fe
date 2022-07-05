import React from 'react';
import axios from 'axios';

const pattern = {
  name: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};

export const isValidRegExp = (id, value) => {
  const regex = new RegExp(pattern[id]);
  return regex.test(value);
};

export const validateBlank = (state, setErrorMsg, id, pwd) => {
  const fields = [
    {
      name: 'username',
      value: state.username,
      message: '이메일을 입력해주세요',
    },
    {
      name: 'password',
      value: state.password,
      message: '비밀번호를 입력해주세요',
    },
  ];

  const isNotFilled = fields.some((field) => {
    if (field.value.trim() === '') {
      setErrorMsg(field.message);
      field.name === 'username' ? id.current.focus() : pwd.current.focus();
      return true;
    }
    setErrorMsg('');
    return false;
  });

  return isNotFilled;
};

export const validateEmail = (setErrorMsgEmail, id) => {
  const fields = {
    message: '이메일형식이 아닙니다.',
  };

  setTimeout(() => {
    if (isValidRegExp('name', id.current.value) || id.current.value === '') {
      setErrorMsgEmail('');

      return false;
    } else {
      setErrorMsgEmail(fields.message);
      return true;
    }
  }, 50);
};

export const validatePassword = (setErrorMsgPassWord, pwd) => {
  const fields = {
    message: '비번은 8글자이상 대문자소문자특수문자 포함.',
  };

  setTimeout(() => {
    if (
      isValidRegExp('password', pwd.current.value) ||
      pwd.current.value === ''
    ) {
      setErrorMsgPassWord('');
      return false;
    } else {
      setErrorMsgPassWord(fields.message);
      return true;
    }
  }, 50);
};

export const userSearch = async (state) => {
  try {
    const response = await axios.get('./data/user.json');
    const data = response.data;
    const _isUser = data.filter((user) => user.id === state.username);

    if (_isUser && _isUser[0]?.pwd === state.password) {
      return true;
    } else return false;
  } catch (error) {
    console.log(error);
  }
};
