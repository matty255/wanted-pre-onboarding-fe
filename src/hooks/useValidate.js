import React from 'react';

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

export const validateEmail = (
  state,

  setErrorMsgEmail,
  id
) => {
  const fields = {
    name: 'username',
    value: state.username,
    message: '이메일형식이 아닙니다.',
  };

  const emailCheck = (email) => {
    let _reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

    return _reg.test(email);
  };

  if (emailCheck(state.username)) {
    setErrorMsgEmail('');

    return false;
  } else {
    setErrorMsgEmail(fields.message);
    id.current.focus();
    return true;
  }
};

export const validatePassword = (state, setErrorMsgPassWord, pwd) => {
  const fields = {
    name: 'username',
    value: state.password,
    message: '비번은 8글자이상 대문자소문자특수문자 포함.',
  };

  const pwdCheck = (pwd) => {
    let _reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

    return _reg.test(pwd);
  };

  if (pwdCheck(state.password)) {
    setErrorMsgPassWord('');
    return false;
  } else {
    setErrorMsgPassWord(fields.message);
    pwd.current?.focus();
    return true;
  }
};
