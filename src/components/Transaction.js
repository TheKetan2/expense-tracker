import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li class={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {transaction.amount < 0
          ? "-$" + Math.abs(transaction.amount)
          : "+$" + Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}
