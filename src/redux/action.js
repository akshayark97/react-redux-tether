import {
  FETCH_API_DATA_FAILURE,
  FETCH_API_DATA_REQUEST,
  FETCH_API_DATA_SUCCESS,
} from './actionType';

export const fetchApiDataRequest = () => ({
  type: FETCH_API_DATA_REQUEST,
});

export const fetchApiDataSuccess = (payload) => ({
  type: FETCH_API_DATA_SUCCESS,
  payload,
});

export const fetchApiDataError = (error) => ({
  type: FETCH_API_DATA_FAILURE,
  payload: error,
});
