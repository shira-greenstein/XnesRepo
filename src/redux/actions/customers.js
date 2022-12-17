import { getCustomers, postCustomer } from "../../service/service";
import { customersTypes } from "./const";

export const setCustomers = (customers) => ({
  type: customersTypes.SET_CUSTOMERS,
  data: customers,
});

export const postCustomerToList = (customer) => ({
  type: customersTypes.POST_CUSTOMER,
  data: customer,
});

export const getCustomerList = () => {
  //   return (dispatch) => {
  //     getCustomers()
  //       .then((data) => {
  //         dispatch(setCustomers(data));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
};

export const postCustomerToCustomers = (customer) => {
  //   return (dispatch) => {
  //     postCustomer()
  //       .then((data) => {
  //         dispatch(postCustomerToList(data));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
};
