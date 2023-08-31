import { SET_IMAGE_URL, SET_TITLE, SET_CONTENT, RESET_TITLE, RESET_CONTENT } from './actions';

const initialState = {
  imageUrl: '',
  title: '',
  content: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_URL:
      return { ...state, imageUrl: action.payload };
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_CONTENT:
      return { ...state, content: action.payload };
    case RESET_TITLE:
      return { ...state, title: '' }; // Resetting title
    case RESET_CONTENT:
      return { ...state, content: '' }; // Resetting content
    default:
      return state;
  }
};

export default reducer;