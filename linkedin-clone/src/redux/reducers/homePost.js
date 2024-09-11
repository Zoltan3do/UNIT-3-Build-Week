import { ADD_HOME_POST, FETCH_HOME_POSTS, SET_PROFILE } from "../actions/homePostAction";

const initialState = {
  homeposts: [],
  user:null,
};

const homePost = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOME_POST:
      return { ...state, homeposts: [action.payload, ...state.homeposts] };
    case FETCH_HOME_POSTS:
      return { ...state, homeposts: action.payload };
      case SET_PROFILE:
        return{...state, user:action.payload}
    default:
      return state;
  }
};

export default homePost;
