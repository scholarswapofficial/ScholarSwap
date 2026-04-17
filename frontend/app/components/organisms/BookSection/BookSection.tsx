"use client";

import "./BookSection.scss";
import { BOOKS } from "@/constant/library/book";
import LibBookCard from "@/components/molecules/LibBookCard/LibBookCard";

const BookSection = () => {
  return (
    <div className="lib-book-grid">
      {BOOKS.map((item) => (
        <LibBookCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default BookSection;