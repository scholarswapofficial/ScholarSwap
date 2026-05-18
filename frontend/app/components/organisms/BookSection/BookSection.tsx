"use client";

import "./BookSection.scss";

import { BOOKS } from "@/constant/library/book";

import LibBookCard from "@/components/molecules/LibBookCard/LibBookCard";

const BookSection = () => {
  return (
    <section className="lib-books">
      {/* HEADER */}
      <div className="lib-books__header">
        <div>
          <h2>Library Collection</h2>
          <p>
            Browse notes, books, and study materials
          </p>
        </div>

        <span className="lib-books__count">
          {BOOKS.length} Resources
        </span>
      </div>

      {/* GRID */}
      <div className="lib-book-grid">
        {BOOKS.map((item) => (
          <LibBookCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </section>
  );
};

export default BookSection;