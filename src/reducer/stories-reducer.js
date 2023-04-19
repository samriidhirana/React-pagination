const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "REMOVE_POST":
      const updatedPost = state.hits.filter((curElem) => {
        return curElem.objectID !== action.payload; //returns every post except for the on with which id matched
      });

      return {
        ...state,
        hits: updatedPost,
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };
    case "GET_PREV_PAGE":
      if (state.page <= 0) {
        return {
          ...state,
          page: state.page,
        };
      }
      return {
        ...state,
        page: state.page - 1,
      };
    case "GET_NEXT_PAGE":
      if (state.page >= state.nbPages - 1) {
        return {
          ...state,
          page: 0,
        };
      }
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};

export default reducer;
