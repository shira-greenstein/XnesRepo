import { createSelector } from "reselect";

const customersSelector = (state) => state.customers.customers;

export const userTests = createSelector(
  [customersSelector],
  (customers) => customers
);
