import * as types from "../constans/typeAction";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CARTS:
      let item = [];
      item.push(action.id);

      return [...state, ...item];
    default:
      return state;
  }
};
export default myReducer;
