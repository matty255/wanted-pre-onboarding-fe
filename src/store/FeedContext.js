import React, { createContext } from 'react';
import { useFeedReducer } from './modules/useFeedReducer';
import { ADD_COMMENT, GET_FEEDLIST } from './modules/actions';

const FeedContext = createContext();

const FeedProvider = (props) => {
  const [state, dispatch] = useFeedReducer();
  const { feedList } = state;

  const getFeedList = (feedList) => dispatch({ type: GET_FEEDLIST, feedList });
  const addComment = (feedList) => dispatch({ type: ADD_COMMENT, feedList });

  const providerValue = {
    feedList,
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
