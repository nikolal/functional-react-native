// Actions
const INCREASE_VALUE = 'home/INCREASE_VALUE';

// Action Creators
export const increaseValueAction = (num) => {
  return ({ type: INCREASE_VALUE, num });
};

// Initial State
const initialState = {
  value: 0,
};

//Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    // console.log()
    case INCREASE_VALUE:
      return {
        ...state,
        value: state.value + action.num
      };
    // case INCREASE_VALUE:
    //   return {
    //     ...state,
    //     value: state.value + 1
    //   };
  }
  return state;
};


export default homeReducer;
