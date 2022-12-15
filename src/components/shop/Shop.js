import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deposit, withdraw } from "../../state/actions/actions";

import "./shop.css";

const Shop = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const depositMoney = () => {
    dispatch(deposit(parseInt(amount)));
  };

  const withdrawMoney = () => {
    dispatch(withdraw(parseInt(amount)));
  };

  return (
    <div className="shop-container">
      <h2>Deposit/Withdraw</h2>

      <button className="btn btn-add" onClick={depositMoney}>
        Add
      </button>
      <input
        className="input"
        placeholder="enter amount"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button className="btn btn-withdraw" onClick={withdrawMoney}>
        Withdraw
      </button>
    </div>
  );
};

export default Shop;
