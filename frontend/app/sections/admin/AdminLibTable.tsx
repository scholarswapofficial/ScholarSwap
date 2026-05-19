"use client";

import React, { useState } from "react";

import {
  RiSearchLine,
  RiFilter3Line,
  RiAddLine,
  RiEyeLine,
  RiEditLine,
  RiDeleteBin6Line,
  RiStarFill,
} from "react-icons/ri";

import { ADMIN_LIBRARY_BOOKS } from "@/constant/admin/adminLibTable";

import LibModal from "@/components/organisms/LibModal/LibModal";

import "@/styles/sections/admin/adminLibTable.scss";

const AdminLibTable = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* ============================ MODAL ============================ */}

      <LibModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      {/* ============================ TABLE ============================ */}

      <section className="admin-lib-table">
        {/* ------------------------------------------------------------------ */}
        {/*                               HEADER                               */}
        {/* ------------------------------------------------------------------ */}

        <div className="admin-lib-table__header">
          <div>
            <h1>Library</h1>

            <p>
              Manage books, subjects and study materials.
            </p>
          </div>

          <button
            className="admin-lib-table__add-btn"
            onClick={() => setOpenModal(true)}
          >
            <RiAddLine />

            <span>Add New Book</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                               FILTERS                              */}
        {/* ------------------------------------------------------------------ */}

        <div className="admin-lib-table__filters">
          {/* ---------------------------- SEARCH --------------------------- */}

          <div className="admin-lib-table__search">
            <RiSearchLine />

            <input
              type="text"
              placeholder="Search books by title, author or subject..."
            />
          </div>

          {/* ---------------------------- ACTIONS -------------------------- */}

          <div className="admin-lib-table__filter-actions">
            <button>
              <RiFilter3Line />

              Filters
            </button>

            <select>
              <option>All Subjects</option>
              <option>DBMS</option>
              <option>OS</option>
              <option>DSA</option>
            </select>

            <select>
              <option>Sort: Newest</option>
              <option>Highest Rated</option>
              <option>Lowest Price</option>
            </select>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                                TABLE                               */}
        {/* ------------------------------------------------------------------ */}

        <div className="admin-lib-table__table-wrapper">
          <table className="admin-lib-table__table">
            <thead>
              <tr>
                <th>Book</th>
                <th>Subject</th>
                <th>Semester</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {ADMIN_LIBRARY_BOOKS.map((book) => (
                <tr key={book.id}>
                  {/* -------------------------- BOOK ---------------------- */}

                  <td>
                    <div className="admin-lib-table__book">
                      <div className="admin-lib-table__book-content">
                        <div className="admin-lib-table__tags">
                          <span className="subject">
                            {book.subject}
                          </span>

                          <span className="type">
                            {book.type}
                          </span>
                        </div>

                        <h3>{book.title}</h3>

                        <h4>{book.author}</h4>

                        <p>
                          {book.pages} pages •{" "}
                          {book.language}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* ------------------------ SUBJECT --------------------- */}

                  <td>
                    <span className="subject-pill">
                      {book.subject}
                    </span>
                  </td>

                  {/* ----------------------- SEMESTER --------------------- */}

                  <td>
                    <span className="semester-pill">
                      {book.semester}
                    </span>
                  </td>

                  {/* ------------------------ RATING ---------------------- */}

                  <td>
                    <div className="admin-lib-table__rating">
                      <RiStarFill />

                      <span>
                        {book.rating} ({book.reviews})
                      </span>
                    </div>
                  </td>

                  {/* ------------------------- PRICE ---------------------- */}

                  <td>
                    <strong>₹{book.price}</strong>
                  </td>

                  {/* ------------------------ ACTIONS --------------------- */}

                  <td>
                    <div className="admin-lib-table__actions">
                      <button>
                        <RiEditLine />
                      </button>

                      <button>
                        <RiEyeLine />
                      </button>

                      <button className="delete">
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                              PAGINATION                             */}
        {/* ------------------------------------------------------------------ */}

        <div className="admin-lib-table__pagination">
          <p>Showing 1 to 4 of 248 books</p>

          <div className="admin-lib-table__pages">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLibTable;