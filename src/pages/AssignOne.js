import React from 'react';
import styled from 'styled-components';
import InstaLogo from '../static/insta.png';
import InstaApple from '../static/instaapple.png';
import InstaGoogle from '../static/instagoogle.png';

const AssignOne = () => {
  return (
    <>
      <WrapBox>
        <Container>
          <FormBox>
            <form>
              <img src={InstaLogo} alt="Instagram" />

              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input type="password" placeholder="비밀번호" />
              <button type="submit">로그인</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  margin: 0 auto;
  @media only screen and (max-width: 450px) {
    margin: 0;
    padding: 0;
    align-items: start;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 93.5rem;
  margin: 1rem auto 0;
  display: flex;
  @media only screen and (max-width: 450px) {
    margin: 0;
    padding: 0;
    align-items: start;
    justify-content: center;
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
  }
  & > form > img {
    margin: 1rem auto 2.7rem;
    width: 10.938rem;
    height: 3.188rem;
    background-color: #fff;
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
