import { useReducer } from 'react';
import _ from 'lodash';
import { ADD_COMMENT, GET_FEEDLIST } from './actions';

const getFeedList = (poke, state) => ({
  feedList: _.uniq([...poke]),
});

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      // console.log('updating', action.feedList);
      return {
        ...state,
        feedList: state.feedList.map((feedList) =>
          feedList.feed_index == action.feedList.com.feed_index
            ? { ...action.feedList.com }
            : feedList
        ),
      };
    case GET_FEEDLIST:
      return getFeedList(action.feedList, state);
    default:
      return state;
  }
};

export const usePokemonReducer = () =>
  useReducer(pokemonReducer, {
    feedList: [],
  });
