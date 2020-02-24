import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <p>YOUR BALANCE</p>
      <h2>
        {balance < 0 ? "-$" + Math.abs(balance) : "+$" + Math.abs(balance)}
      </h2>
    </div>
  );
}
