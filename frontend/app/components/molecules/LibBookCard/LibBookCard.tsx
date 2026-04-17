"use client";

import "./LibBookCard.scss";

const LibBookCard = ({ data }: any) => {
  return (
    <div className="lib-book">
      {/* Top tags */}
      <div className="lib-book__tags">
        <span className="subject">{data.subject}</span>
        <span className="tag">{data.tag}</span>
      </div>

      {/* Book Content */}
      <div className="lib-book__content">
        {/* Image */}
        <img src={data.image} className="book-img" />

        {/* Info */}
        <div className="info">
          <h3>{data.title}</h3>

          <p className="author">{data.author}</p>
          <p className="meta">{data.meta}</p>

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>{data.rating} ({data.reviews})</span>
          </div>

          <p className="extra">
            {data.pages} pages • {data.language}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="lib-book__bottom">
        <span className="price">
          {data.price === 0 ? "FREE" : `₹${data.price}`}
        </span>

        <button>
          {data.price === 0 ? "Get Free" : "Buy Book"}
        </button>
      </div>
    </div>
  );
};

export default LibBookCard;