import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">
          +$
          {transactions
            .filter(transaction => transaction.amount > 0)
            .reduce((acc, curr) => acc + curr.amount, 0)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" class="money minus">
          -$
          {transactions
            .filter(transaction => transaction.amount < 0)
            .reduce((acc, curr) => acc + curr.amount, 0)}
        </p>
      </div>
    </div>
  );
}
