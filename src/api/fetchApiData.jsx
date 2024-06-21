import {
  fetchApiDataError,
  fetchApiDataRequest,
  fetchApiDataSuccess,
} from '../redux/action';

export const fetchApiData = () => {
  return async (dispatch) => {
    dispatch(fetchApiDataRequest());
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      console.log(data); // Verify the data is logged
      dispatch(fetchApiDataSuccess(data));
    } catch (error) {
      dispatch(fetchApiDataError(error));
    }
  };
};
