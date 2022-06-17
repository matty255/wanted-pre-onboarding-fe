import React from 'react';
import { IonIcon } from '@ionic/react';
import {
  bookmarkOutline,
  chatbubbleOutline,
  ellipsisHorizontal,
  heartOutline,
  paperPlaneOutline,
} from 'ionicons/icons';
import styled from 'styled-components';

const PostCard = (img) => {
  const imgUrl = img;

  return (
    <>
      <PostBox>
        <PostBoxTop>
          <UserProfile>
            <img
              src={
                'http://jjal.today/data/file/gallery/1028612757_QvAZRE4a_104175cbd774f08c4a045505fa4cac3fa0c2bec4.gif'
              }
              alt=""
            />
            <p className="name">피카피카</p>
          </UserProfile>
          <IonIcon icon={ellipsisHorizontal} className="show-more"></IonIcon>
        </PostBoxTop>

        <img src={imgUrl.img} alt="" />

        <PostBoxBottom>
          <div className="left">
            <ActionsBox>
              <IonIcon icon={heartOutline}></IonIcon>
              <IonIcon icon={chatbubbleOutline}></IonIcon>
              <IonIcon icon={paperPlaneOutline}></IonIcon>
            </ActionsBox>
            <UserInfoBox>
              <img
                src={'https://t1.daumcdn.net/cfile/tistory/2336D840576BC72031'}
                alt=""
              />
              <p>반응형 웹 모바일 타블렛 모양 오케</p>
            </UserInfoBox>
          </div>

          <div className="right">
            <IonIcon icon={bookmarkOutline}></IonIcon>
          </div>
        </PostBoxBottom>
      </PostBox>
    </>
  );
};

export default PostCard;

const PostBox = styled.article`
  margin-top: 53px;
  border: 1px solid #dbdbdb;
  width: 100%;
  border-radius: 3px;

  & > img {
    width: 100%;
    height: auto;
  }
`;

const PostBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 61px;

  & > ion-icon {
    margin-top: 20px;
    margin-right: 20px;
    font-size: 16px;
  }
`;

const UserProfile = styled.div`
  display: flex;

  & > img {
    margin-top: 15px;
    margin-left: 17px;

    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .name {
    margin: 21px 15px 19px;
    display: flex;
    align-items: center;

    width: 109px;
    height: 21px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #262626;
  }
`;

const PostBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 76px;

  .left {
    margin: auto 18px;
  }
  .right {
    margin-top: 14px;
    margin-right: 18px;
    & > ion-icon {
      font-size: 1.4rem;
    }
  }
`;

const ActionsBox = styled.div`
  & > ion-icon {
    margin-right: 10px;
    font-size: 1.4rem;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
  & > p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: black;
  }
`;
