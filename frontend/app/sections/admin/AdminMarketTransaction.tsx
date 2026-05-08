"use client";

import React from "react";

import {
  RiSearchLine,
  RiFilter3Line,
  RiEyeLine,
  RiDownloadLine,
} from "react-icons/ri";

import { ADMIN_MARKET_TRANSACTIONS } from "@/constant/admin/adminMarketTransaction";

import "@/styles/sections/admin/adminMarketTransaction.scss";

const AdminMarketTransaction = () => {
  return (
    <section className="admin-market-transaction">
      {/* ------------------------------------------------------------------ */}
      {/*                               HEADER                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-market-transaction__header">
        <div>
          <h2>Recent Transactions</h2>

          <p>
            Monitor marketplace purchases and
            seller activities.
          </p>
        </div>

        <button className="admin-market-transaction__export-btn">
          <RiDownloadLine />

          Export Report
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                               FILTERS                              */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-market-transaction__filters">
        {/* ---------------------------- SEARCH --------------------------- */}

        <div className="admin-market-transaction__search">
          <RiSearchLine />

          <input
            type="text"
            placeholder="Search buyer, seller or product..."
          />
        </div>

        {/* --------------------------- ACTIONS --------------------------- */}

        <div className="admin-market-transaction__actions">
          <button>
            <RiFilter3Line />

            Filters
          </button>

          <select>
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <select>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                                TABLE                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-market-transaction__table-wrapper">
        <table className="admin-market-transaction__table">
          <thead>
            <tr>
              <th>#</th>
              <th>Buyer</th>
              <th>Seller</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {ADMIN_MARKET_TRANSACTIONS.map(
              (item) => (
                <tr key={item.id}>
                  {/* ---------------- ID ---------------- */}

                  <td>{item.id}</td>

                  {/* -------------- BUYER --------------- */}

                  <td>
                    <div className="admin-market-transaction__user">
                      <div className="admin-market-transaction__avatar">
                        {item.buyerName.charAt(0)}
                      </div>

                      <div>
                        <h4>{item.buyer}</h4>

                        <p>{item.buyerName}</p>
                      </div>
                    </div>
                  </td>

                  {/* -------------- SELLER -------------- */}

                  <td>
                    <div className="admin-market-transaction__user">
                      <div className="admin-market-transaction__avatar seller">
                        {item.sellerName.charAt(0)}
                      </div>

                      <div>
                        <h4>{item.seller}</h4>

                        <p>{item.sellerName}</p>
                      </div>
                    </div>
                  </td>

                  {/* ------------- PRODUCT -------------- */}

                  <td>
                    <span className="product">
                      {item.product}
                    </span>
                  </td>

                  {/* -------------- AMOUNT -------------- */}

                  <td>
                    <strong>{item.amount}</strong>
                  </td>

                  {/* --------------- DATE --------------- */}

                  <td>
                    <div className="admin-market-transaction__date">
                      <h4>{item.date}</h4>

                      <p>{item.time}</p>
                    </div>
                  </td>

                  {/* -------------- STATUS -------------- */}

                  <td>
                    <span className="status completed">
                      {item.status}
                    </span>
                  </td>

                  {/* -------------- ACTIONS ------------- */}

                  <td>
                    <button className="admin-market-transaction__view-btn">
                      <RiEyeLine />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                              PAGINATION                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="admin-market-transaction__pagination">
        <p>
          Showing 1 to 5 of 1,248 transactions
        </p>

        <div className="admin-market-transaction__pages">
          <button className="active">1</button>

          <button>2</button>

          <button>3</button>

          <button>4</button>
        </div>
      </div>
    </section>
  );
};

export default AdminMarketTransaction;