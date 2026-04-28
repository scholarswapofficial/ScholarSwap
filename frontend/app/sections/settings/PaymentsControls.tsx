"use client";

import { useState } from "react";
import {
  PAYMENT_METHODS,
  TRANSACTIONS,
} from "@/constant/settings";

const PaymentsControls = () => {
  const [upi, setUpi] = useState("");
  const [bank, setBank] = useState("");

  const handleSave = () => {
    console.log("Saved:", { upi, bank });
    // 🔥 connect API later
  };

  return (
    <div className="settings__panel">
      <div className="panel__header">
        <h2>Payments & Earnings</h2>
        <p>Manage your earnings and withdrawal methods</p>
      </div>

      <div className="panel__content">

        {/* Earnings Overview */}
        <div className="earnings-card">
          <h3>Total Earnings</h3>
          <p className="amount">₹1,240</p>
          <button className="withdraw-btn">Withdraw</button>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          {PAYMENT_METHODS.map((item) => (
            <div key={item.id} className="form-group">
              <label>{item.title}</label>
              <input
                type="text"
                placeholder={item.placeholder}
                value={item.id === "upi" ? upi : bank}
                onChange={(e) =>
                  item.id === "upi"
                    ? setUpi(e.target.value)
                    : setBank(e.target.value)
                }
              />
              <p className="desc">{item.desc}</p>
            </div>
          ))}

          <button className="primary-btn" onClick={handleSave}>
            Save Payment Details
          </button>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Transactions */}
        <div className="transactions">
          <h3>Transaction History</h3>

          {TRANSACTIONS.map((tx) => (
            <div key={tx.id} className="transaction-item">
              <div>
                <h4>{tx.title}</h4>
                <p>{tx.date}</p>
              </div>

              <span className="amount">{tx.amount}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PaymentsControls;