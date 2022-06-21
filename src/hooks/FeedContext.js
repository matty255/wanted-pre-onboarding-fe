import React, { createContext } from 'react';
import { useFeedReducer } from './useFeedReducer';
import { ADD_COMMENT, GET_FEEDLIST } from './actions';

const FeedContext = createContext();

const FeedProvider = (props) => {
  const [state, dispatch] = useFeedReducer();
  const { feedList, comment } = state;

  const getFeedList = (feedList) => dispatch({ type: GET_FEEDLIST, feedList });
  const addComment = (feedList) => dispatch({ type: ADD_COMMENT, feedList });

  const providerValue = {
    feedList,
    comment,
    addComment,
    getFeedList,
  };

  return (
    <FeedContext.Provider value={providerValue}>
      {props.children}
    </FeedContext.Provider>
  );
};

export { FeedContext, FeedProvider };
