import axios from 'axios';

// Action Types
export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

// Action Creators
export const getTodos = (filter) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/todos?filter=${filter}`);
  dispatch({ type: GET_TODOS, payload: response.data });
};

export const addTodo = (text) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/todos', { text });
  dispatch({ type: ADD_TODO, payload: response.data });
};

export const updateTodo = (id, completed) => async (dispatch) => {
  const response = await axios.put(`http://localhost:3001/todos/${id}`, { completed });
  dispatch({ type: UPDATE_TODO, payload: response.data });
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/todos/${id}`);
  dispatch({ type: DELETE_TODO, payload: id });
};

export const clearCompletedTodos = () => async (dispatch) => {
  await axios.delete('http://localhost:3001/todos');
  dispatch({ type: CLEAR_COMPLETED_TODOS });
};
