import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import InstaLogo from '../static/insta.png';
import InstaApple from '../static/instaapple.png';
import InstaGoogle from '../static/instagoogle.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { useDebounce } from '../hooks/useDebounce';

import {
  validateBlank,
  validateEmail,
  validatePassword,
  userSearch,
} from '../hooks/useValidate';

const AssignOne = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/main';
  const [validationStatus, setValidationStatus] = useState({
    username: '',
    password: '',
  });
  const [isUser, setIsUser] = useState(false);
  const debouncedKeyword = useDebounce(validationStatus, 150);
  let auth = useAuth();
  const id = useRef(null);
  const pwd = useRef(null);

  const handleInputChange = (event, ref) => {
    ref.current.value = event.target.value;
    const { name, value } = ref.current;
    setValidationStatus((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsgEmail, setErrorMsgEmail] = useState('');
  const [errorMsgPassword, setErrorMsgPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  validateEmail(setErrorMsgEmail, id);
  validatePassword(setErrorMsgPassword, pwd);
  userSearch(debouncedKeyword).then((result) => setIsUser(result));

  const handleSubmit = (event) => {
    event.preventDefault();
    const isBlank = validateBlank(debouncedKeyword, setErrorMsg, id, pwd);
    // console.log(
    //   !isBlank,
    //   errorMsgEmail === '',
    //   errorMsgPassword === '',
    //   isUser,
    //   debouncedKeyword
    // );
    if (!isBlank && errorMsgEmail === '' && errorMsgPassword === '' && isUser) {
      const userData = {
        id: id.current.value,
        pwd: pwd.current.value,
        auth: true,
      };

      auth.signin(userData, () => {
        navigate(from, { replace: true });
      });
    } else {
      setSuccessMsg('회원정보가 틀렸습니다');
      setTimeout(() => setSuccessMsg(''), 500);
    }
  };

  return (
    <>
      {successMsg && <p className="successMsg">{successMsg}</p>}

      <WrapBox>
        <Container>
          <FormBox>
            <form onSubmit={handleSubmit}>
              <img src={InstaLogo} alt="Instagram" />
              {errorMsg && <p className="errorMsg">{errorMsg}</p>}
              {errorMsgEmail && <p className="errorMsg">{errorMsgEmail}</p>}
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                name="username"
                ref={id}
                onChange={(event) => handleInputChange(event, id)}
                style={errorMsgEmail === '' ? {} : { border: '1px solid red' }}
              />
              {errorMsgPassword && (
                <p className="errorMsg">{errorMsgPassword}</p>
              )}
              <input
                type="password"
                placeholder="비밀번호"
                password="password"
                name="password"
                ref={pwd}
                onChange={(event) => handleInputChange(event, pwd)}
                autoComplete="off"
                style={
                  errorMsgPassword === '' ? {} : { border: '1px solid red' }
                }
              />

              <button
                type="submit"
                disabled={
                  errorMsgEmail === '' && errorMsgPassword === '' ? false : true
                }
              >
                로그인
              </button>
              <Separator>또는</Separator>
              <FaceBookLogin href="#">
                <i className="fab fa-facebook" /> Facebook으로 로그인
              </FaceBookLogin>
              <PasswordReset href="#">비밀번호를 잊으셨나요?</PasswordReset>
            </form>
            <SignUpBox>
              계정이 없으신가요? <a href="#">가입하기</a>
            </SignUpBox>
            <GetAppBox>
              <span>앱을 다운로드하세요.</span>
              <GotoAppstore>
                <img src={InstaApple} alt="android App" />
                <img src={InstaGoogle} alt="ios app" />
              </GotoAppstore>
            </GetAppBox>
          </FormBox>
        </Container>
      </WrapBox>
    </>
  );
};

export default AssignOne;

const WrapBox = styled.div`
  width: 100%;
  max-width: 24.75rem;
  height: 100vh;
  padding-top: 1.5rem;
  margin: 0 auto;
  @media only screen and (max-width: 450px) {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 93.5rem;
  min-width: 22rem;
  margin: 1rem auto 0;

  @media only screen and (max-width: 450px) {
    margin: 0;
    padding: 0;
  }
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 35rem;
  margin-top: 3rem;
  & > form {
    background-color: #fff;
    border: 2px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    text-align: center;
  }

  & > form > input {
    padding: 0.875rem 0 0.125rem 0.5rem;
    padding-right: 0.5rem;
    margin-bottom: 0.5rem;
    border: 2px solid #eee;
    border-radius: 0.3rem;
    height: 2.25rem;
  }

  & > form > button {
    margin: 0.4rem 0 1.5rem;
    height: 2.1rem;
    background-color: #3897f0;
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    :disabled {
      background-color: gray;
      cursor: default;
    }
  }
  & > form > img {
    margin: 1rem auto 2.7rem;
    width: 10.938rem;
    height: 3.188rem;
    background-color: #fff;
  }
  & > form > p {
    font-size: 0.5rem;
    color: red;
    margin-bottom: -0.8rem;
    z-index: 50;
    text-align: right;
  }
`;

const Separator = styled.span`
  font-size: 0.9rem;
  color: #999999;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 2.5rem;
  background-color: white;

  ::before {
    left: 0;
    content: '';
    position: absolute;
    background-color: #eee;
    width: 40%;
    height: 1.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  ::after {
    right: 0;
    content: '';
    position: absolute;
    background-color: #eee;
    width: 40%;
    height: 1.5px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const FaceBookLogin = styled.a`
  font-size: 0.9rem;
  font-weight: bold;
  color: #385185;
  margin-bottom: 1.5rem;
  background-color: white;
`;

const PasswordReset = styled.a`
  font-size: 0.8rem;
  color: #003569;
  background-color: white;
`;

const SignUpBox = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #262626;
  padding: 2rem 0;
  background-color: #fff;
  border: 2px solid #eee;
  margin: 1rem 0;
  & > a {
    color: #3897f0;
    font-weight: bold;
  }
`;

const GetAppBox = styled.div`
  font-size: 1rem;
  text-align: center;
  & span {
    display: block;
    margin: 1.5rem 0;
    color: #262626;
  }
`;

const GotoAppstore = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  & img {
    cursor: pointer;
    width: 8.5rem;
  }
`;
