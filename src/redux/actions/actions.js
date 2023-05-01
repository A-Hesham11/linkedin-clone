import * as actions from "./actionTypes"

export const setUser = (payload) => {
  return {
      type: actions.SET_USER,
      user: payload,
  }
}

export const registerSuccess = (user) => {
  return {
    type: actions.REGISTER_SUCCESS,
    payload: user
  };
};

export const loginSuccess = (user) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: user
  };
};

export const logoutSuccess = () => {
  return {
    type: actions.LOGOUT_SUCCESS,
  };
};

export const changeUser = (user) => {
  return {
    type: actions.CHANGE_USER,
    payload: user
  };
};

export const setLoading = (status) => {
  return {
    type: actions.SET_LOADING_STATUS,
    status: status,
  }
};

export const getArticles = (payload) => {
  return {
    type: actions.GET_ARTICLES,
    payload: payload,
  }
};












