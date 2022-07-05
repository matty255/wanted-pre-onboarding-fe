import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import axios from 'axios';
import { FeedContext } from '../store/FeedContext';

const PostList = () => {
  const { feedList, getFeedList } = useContext(FeedContext);

  const callFeed = async () => {
    try {
      const response = await axios.get('./data/feed.json');
      const data = response.data;
      getFeedList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callFeed();
  }, []);
  return (
    <>
      <ContentBox>
        {feedList.length > 0 &&
          feedList.map((feed, i) => (
            <div key={`${i}-${feed.image}`}>
              <PostCard data={feed} />
            </div>
          ))}
      </ContentBox>
    </>
  );
};

export default PostList;

const ContentBox = styled.div`
  max-width: 614px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
