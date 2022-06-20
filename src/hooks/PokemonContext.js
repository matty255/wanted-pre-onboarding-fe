import React, { createContext } from 'react';
import { usePokemonReducer } from './usePokemonReducer';
import { ADD_COMMENT, GET_FEEDLIST } from './actions';

const PokemonContext = createContext();

const PokeProvider = (props) => {
  const [state, dispatch] = usePokemonReducer();
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
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokeProvider };
