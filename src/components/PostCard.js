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

const PostCard = ({ data }) => {
  const randomNumber = Math.floor(Math.random() * (1 - 10 + 1)) + 1;
  const { feed_index, image, nickname, profile_pic, like_count, comment } =
    data;
  return (
    <>
      <PostBox>
        <PostBoxTop>
          <UserProfile>
            <img src={profile_pic} alt="" />
            <p className="name">{nickname}</p>
          </UserProfile>
          <IonIcon icon={ellipsisHorizontal} className="show-more"></IonIcon>
        </PostBoxTop>

        <img src={image} alt="" className="main-pic" />

        <PostBoxBottom>
          <PostBoxBottomTop>
            <div className="left">
              <ActionsBox>
                <IonIcon icon={heartOutline}></IonIcon>
                <IonIcon icon={chatbubbleOutline}></IonIcon>
                <IonIcon icon={paperPlaneOutline}></IonIcon>
              </ActionsBox>

              <p>좋아요 {like_count}개</p>
            </div>

            <div className="right">
              <IonIcon icon={bookmarkOutline}></IonIcon>
            </div>
          </PostBoxBottomTop>
          <CommentBox>
            {comment.length > 0 &&
              comment.map((comment, i) => (
                <InnerBox key={`${i}-${randomNumber}`}>
                  <img src={comment.profile_pic} alt="" />
                  <p>{comment.username}</p>
                  <p>{comment.comment_content}</p>
                </InnerBox>
              ))}
          </CommentBox>
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

  .main-pic {
    width: 100vh;
    height: auto;
    object-fit: cover;
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
  flex-direction: column;
`;

const PostBoxBottomTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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

const UserInfoBox = styled.div``;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  align-items: start;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: row;

  & > img {
    margin: 0.2rem;
    margin-top: 0;
    width: 20px;
    height: 20px;
  }
  & > p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: black;
    margin-right: 0.5rem;
  }
`;
