// import { RootState } from "interfaces";
import { CREDIT_AMOUNT, DEBIT_AMOUNT } from "types";

const initial_balance = {
  amount: 10000
};

export const ledgerReducer = (balance = initial_balance, action) => {
  switch(action.type) {
    case CREDIT_AMOUNT: return {
      ...balance, 
      amount: balance.amount + action.payload
    }
    case DEBIT_AMOUNT: return {
      ...balance, 
      amount: balance.amount - action.payload
    }
    default: return balance
  }
}