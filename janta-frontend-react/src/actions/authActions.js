import axios from 'axios';

// Action Types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Register User
export const register = (username, password) => async (dispatch) => {
  try {
    await axios.post('http://localhost:3001/register', { username, password });
    dispatch({ type: REGISTER_SUCCESS });
  } catch (err) {
    console.error(err);
  }
};

// Login User
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/login', { username, password });
    localStorage.setItem('token', response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
  } catch (err) {
    console.error(err);
  }
};

// Logout User
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};