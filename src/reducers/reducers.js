const initialState = {
  isLoading: false,
  isCompleted: false,
  name: "awais",
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "SUCCESS": {
      console.log("Success response:", action.payload);

      return {
        ...state,
        name: action.payload,
        isCompleted: true,
      };
    }

    case "FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
