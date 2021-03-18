import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_MEDITATION,
  ADD_MEDITATION,
  REMOVE_MEDITATION,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_MEDITATION:
    return {
      ...state,
      currentMeditation: action.post,
      loading: false
    };

    case ADD_MEDITATION:
    return {
      ...state,
      posts: [action.post, ...state.posts],
      loading: false
    };

  case REMOVE_MEDITATION:
    return {
      ...state,
      meditation: state.meditations.filter((meditation) => {
        return meditation._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.post, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((meditation) => {
        return meditation._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    meditations: [],
    currentMeditation: {
      _id: 0,
      img: {},
      title: "",
      description: "",
      video: ""
    //   author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };