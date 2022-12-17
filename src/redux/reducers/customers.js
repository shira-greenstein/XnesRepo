import { customersTypes } from "../actions/const";

const initialState = {
  customers: [],
};

const customers = (state = initialState.customers, action) => {
  switch (action.type) {
    case customersTypes.SET_CUSTOMERS:
      return {
        ...state,
        customers: action.data,
      };
    case customersTypes.POST_CUSTOMER:
      return {
        ...state,
        customers: [...state, action.data],
      };
    default:
      return state;
  }
};

export default customers;
