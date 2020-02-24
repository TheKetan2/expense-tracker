import React from "react";

export default function Transaction({ transaction }) {
  return (
    <li class={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{transaction.amount}</span>
      <button className="delete-btn">x</button>
    </li>
  );
}
