import { SET_IMAGE_URL } from './actions';

const initialState = {
  imageUrl: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_URL:
      return { ...state, imageUrl: action.payload };
    default:
      return state;
  }
};

export default reducer;
