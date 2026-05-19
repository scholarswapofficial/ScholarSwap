// components/organisms/LibModal/LibModal.tsx

"use client";

import "./LibModal.scss";

import { X, Upload, ChevronDown, Star } from "lucide-react";

interface LibModalProps {
  open: boolean;
  onClose: () => void;
}

const LibModal = ({ open, onClose }: LibModalProps) => {
  if (!open) return null;

  return (
    <div className="lib-modal-overlay">
      <div className="lib-modal">
        
        {/* HEADER */}
        <div className="lib-modal__header">
          <div>
            <h2>Add New Book</h2>
            <p>Fill in the details below to add a new book.</p>
          </div>

          <button
            className="lib-modal__close"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        {/* BODY */}
        <div className="lib-modal__body">
          
          {/* LEFT */}
          <div className="lib-modal__cover">
            <label>Book Cover (Optional)</label>

            <div className="lib-modal__upload">
              <Upload size={34} />

              <h4>Upload Cover</h4>

              <span>PNG, JPG or WEBP</span>
              <small>Max size: 2MB</small>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lib-modal__form">
            
            {/* TITLE */}
            <div className="lib-modal__field full">
              <label>Title *</label>
              <input type="text" placeholder="Enter book title" />
            </div>

            {/* SUBTITLE */}
            <div className="lib-modal__field full">
              <label>Subtitle (Optional)</label>
              <input type="text" placeholder="Enter subtitle" />
            </div>

            {/* SUBJECT */}
            <div className="lib-modal__field">
              <label>Subject *</label>

              <div className="lib-modal__select">
                <span>Select subject</span>
                <ChevronDown size={18} />
              </div>
            </div>

            {/* TYPE */}
            <div className="lib-modal__field">
              <label>Book Type *</label>

              <div className="lib-modal__select">
                <span>Select type</span>
                <ChevronDown size={18} />
              </div>
            </div>

            {/* SEMESTER */}
            <div className="lib-modal__field">
              <label>Semester (Optional)</label>

              <div className="lib-modal__select">
                <span>Select semester</span>
                <ChevronDown size={18} />
              </div>
            </div>

            {/* RATING */}
            <div className="lib-modal__field">
              <label>Rating (Optional)</label>

              <div className="lib-modal__select">
                <div className="lib-modal__rating">
                  <Star size={16} />
                  <span>Select rating</span>
                </div>

                <ChevronDown size={18} />
              </div>
            </div>

            {/* PRICE */}
            <div className="lib-modal__field">
              <label>Price (₹) *</label>
              <input type="text" placeholder="Enter price" />
            </div>

            {/* LANGUAGE */}
            <div className="lib-modal__field">
              <label>Language</label>

              <div className="lib-modal__select">
                <span>Select language</span>
                <ChevronDown size={18} />
              </div>
            </div>

            {/* AUTHOR */}
            <div className="lib-modal__field">
              <label>Author (Optional)</label>
              <input type="text" placeholder="Enter author name" />
            </div>

            {/* PUBLISHER */}
            <div className="lib-modal__field">
              <label>Publisher (Optional)</label>
              <input type="text" placeholder="Enter publisher name" />
            </div>

            {/* EDITION */}
            <div className="lib-modal__field">
              <label>Edition (Optional)</label>
              <input type="text" placeholder="Enter edition" />
            </div>

            {/* ISBN */}
            <div className="lib-modal__field">
              <label>ISBN (Optional)</label>
              <input type="text" placeholder="Enter ISBN" />
            </div>

            {/* DESCRIPTION */}
            <div className="lib-modal__field full">
              <label>Description (Optional)</label>

              <textarea
                placeholder="Enter book description..."
                rows={4}
              />

              <small className="lib-modal__count">
                0/500
              </small>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="lib-modal__footer">
          <button
            className="lib-modal__cancel"
            onClick={onClose}
          >
            Cancel
          </button>

          <button className="lib-modal__submit">
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibModal;