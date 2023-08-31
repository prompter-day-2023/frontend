// action.js
export const SET_IMAGE_URL = 'SET_IMAGE_URL';
export const SET_TITLE = 'SET_TITLE';
export const SET_CONTENT = 'SET_CONTENT';
export const RESET_TITLE = 'RESET_TITLE';
export const RESET_CONTENT = 'RESET_CONTENT';

export const setImageUrl = (url) => ({
  type: SET_IMAGE_URL,
  payload: url
});

export const setTitle = (title) => ({
  type: SET_TITLE,
  payload: title
});

export const setContent = (content) => ({
  type: SET_CONTENT,
  payload: content
});

export const resetTitle = () => {
  return {
      type: RESET_TITLE
  }
}

export const resetContent = () => {
  return {
      type: RESET_CONTENT
  }
}