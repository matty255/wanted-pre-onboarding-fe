import React, { useContext, useState, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { happyOutline } from 'ionicons/icons';
import styled from 'styled-components';
import { FeedContext } from '../store/FeedContext';
import { useAuth } from '../store/AuthContext';
export const CommentSubmit = ({ data }) => {
  const { feed_index, image, nickname, profile_pic, like_count, comment } =
    data;
  const [state, setState] = useState({
    comment: '',
  });
  const Auth = useAuth();
  const nComment = useRef(null);
  const { addComment } = useContext(FeedContext);

  const com = {
    image: image,
    nickname: nickname,
    profile_pic: profile_pic,
    like_count: like_count,
    comment: [
      {
        username: Auth.user.split('@')[0],
        profile_pic:
          'https://opgg-com-image.akamaized.net/attach/images/20190803023339.668722.gif',
        comment_content: state.comment,
      },
      ...comment,
    ],

    feed_index: feed_index,
  };
  const handleInputChange = (event, ref) => {
    ref.current.value = event.target.value;
    const { name, value } = ref.current;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.comment.trim() === '') {
      return alert('내용을 입력해주세요!');
    } else {
      addComment({ com });
      setState({
        comment: '',
      });
    }
  };
  return (
    <CommentSummitBox>
      <IonIcon icon={happyOutline}></IonIcon>
      <form>
        <input
          name="comment"
          placeholder="댓글달기..."
          value={state.comment}
          ref={nComment}
          onChange={(event) => handleInputChange(event, nComment)}
        />
        <button type="submit" onClick={handleSubmit}>
          게시
        </button>
      </form>
    </CommentSummitBox>
  );
};

const CommentSummitBox = styled.div`
  border-top: 1px solid #dbdbdb;
  width: 100%;
  height: 3.7rem;
  & > ion-icon {
    position: absolute;
    margin: 1.1rem 1rem;
    font-size: 1.5rem;
  }

  & > form {
    display: flex;
    justify-content: space-between;
  }

  & > form > input {
    margin-left: 3.2rem;
    flex-grow: 1;
    padding-top: 1.32rem;
    font-size: 0.9rem;
  }
  & > form > button {
    width: 4rem;
    flex-shrink: 0;
    height: 2rem;
    padding-top: 1.2rem;
    font-size: 0.9rem;
    color: #139ef2;
    cursor: pointer;
  }
`;
