import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/AuthContext';

const MainSideContentsCard = () => {
  let auth = useAuth();
  return (
    <>
      <SuggestionsBox>
        <div className="main-suggestion">
          <img
            src={
              'http://jjal.today/data/file/gallery/1028612757_QvAZRE4a_104175cbd774f08c4a045505fa4cac3fa0c2bec4.gif'
            }
            alt=""
            className="user-pic"
          />
          <div className="user-name">
            <p>{auth.user}</p>
            <span>유저프로필</span>
          </div>
        </div>

        <OtherSuggestionsBox>
          <div className="top-note">
            <p>팔로우해보세요</p>
            <strong>보러가기</strong>
          </div>

          <div className="suggestion">
            <div className="user">
              <img
                src={
                  'https://studyforus.com/files/attach/images/294793/355/295/ad7dcdba08ecaea54edd5adc67a536ca.gif'
                }
                alt=""
              />
              <div className="description">
                <p className="name">아는 사람일수도</p>
                <p className="status">cat_luv</p>
              </div>
            </div>
            <strong>팔로우</strong>
          </div>

          <div className="suggestion">
            <div className="user">
              <img
                src={
                  'https://studyforus.com/files/attach/images/294793/355/295/ad7dcdba08ecaea54edd5adc67a536ca.gif'
                }
                alt=""
              />
              <div className="description">
                <p className="name">포공방 레이드 구합니다</p>
                <p className="status">dog_luv</p>
              </div>
            </div>
            <strong>팔로우</strong>
          </div>
          <div className="suggestion">
            <div className="user">
              <img
                src={
                  'https://studyforus.com/files/attach/images/294793/355/295/ad7dcdba08ecaea54edd5adc67a536ca.gif'
                }
                alt=""
              />
              <div className="description">
                <p className="name">.</p>
                <p className="status">pokemon</p>
              </div>
            </div>
            <strong>팔로우</strong>
          </div>
        </OtherSuggestionsBox>
      </SuggestionsBox>
    </>
  );
};

export default MainSideContentsCard;

const SuggestionsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .main-suggestion {
    margin: 50px 0 24px 6px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
  }
  .main-suggestion .user-pic {
    margin-right: 17px;
    width: 56px;
    height: 56px;
    max-width: 50px;
  }
  & .main-suggestion .user-name {
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: start;
    flex-direction: column;
    background-color: transparent;

    & > p {
      font-weight: 500;
      color: #262626;
    }
    & > span {
      font-weight: 300;
      color: #8e8e8e;
      background-color: transparent;
    }
  }
`;

const OtherSuggestionsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top-note {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    margin-bottom: 17px;
  }
  & .top-note > p {
    color: #8e8e8e;
  }
  & .top-note > strong {
    color: #262626;
  }

  .suggestion {
    margin-bottom: 17px;
    display: flex;
    justify-content: space-between;
    width: 20rem;
  }
  .suggestion .user {
    display: flex;
    padding: 0.2rem;
  }

  .suggestion .user img {
    margin-right: 11px;
    width: 32px;
    height: 32px;
  }

  .suggestion .user .description .name,
  .suggestion .user .description .status {
    font-style: normal;
    display: flex;
    align-items: center;
  }

  .suggestion .user .description .name {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #262626;
  }

  .suggestion .user .description .status {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #8e8e8e;
  }

  .suggestion strong {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #139ef2;
  }
`;
