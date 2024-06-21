const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API_DATA_REQUEST':
      return {
        ...state,
        loading: false,
        error: null,
      };
    case 'FETCH_API_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_API_DATA_FAILURE':
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
