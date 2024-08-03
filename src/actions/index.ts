import { CREDIT_AMOUNT, DEBIT_AMOUNT } from "../types"

export const creditAmount = (amount: Number) => {
  return {
    type: CREDIT_AMOUNT,
    payload: amount
  };
};

export const debitAmount = (amount: Number) => {
  return {
    type: DEBIT_AMOUNT,
    payload: amount
  };
};