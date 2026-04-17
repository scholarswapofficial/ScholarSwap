"use client";

import "./LibNoteCard.scss";

type Props = {
  data: any;
};

const LibNoteCard = ({ data }: Props) => {
  return (
    <div className="lib-card">
      {/* 🔷 Top Tags */}
      <div className="lib-card__top">
        <span className="lib-card__subject">{data.subject}</span>
        <span className="lib-card__badge">Topper Notes</span>
      </div>

      {/* 🔷 Title */}
      <h3 className="lib-card__title">{data.title}</h3>

      {/* 🔷 Author */}
      <div className="lib-card__author">
        <img src="/images/library/default-avatar.png" alt="user" />
        <div>
          <p className="name">{data.author}</p>
          <span className="meta">
            CGPA {data.cgpa} | {data.college}
          </span>
        </div>
      </div>

      {/* 🔷 Rating */}
      <div className="lib-card__rating">
        ⭐⭐⭐⭐⭐ <span>{data.reviews}</span>
      </div>

      {/* 🔷 Count */}
      <p className="lib-card__count">{data.count}</p>

      {/* 🔷 Price */}
      <div className="lib-card__price">
        <span>{data.price}</span>
        <p>PDF Notes</p>
      </div>

      {/* 🔷 CTA */}
      <button className="lib-card__btn">Buy Notes</button>
    </div>
  );
};

export default LibNoteCard;