import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import axios from 'axios';

const PostList = () => {
  const [feedList, setFeedList] = useState([]);
  const callFeed = async () => {
    try {
      const response = await axios.get('./data/feed.json');
      const data = response.data;
      setFeedList(data);
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
        {feedList.map((feed, i) => (
          <div key={`${i}-${feed.image}`}>
            <PostCard img={'http://imgur.com/eQPPis3.gif'} data={feed} />
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
