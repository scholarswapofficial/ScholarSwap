"use client";

import React, { useEffect } from "react";

import {
  X,
  Upload,
} from "lucide-react";

import "@/styles/sections/admin/event-modal.scss";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({
  isOpen,
  onClose,
}: EventModalProps) => {
  useEffect(() => {
    const handleEscape = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="event-modal"
      onClick={onClose}
    >
      <div
        className="event-modal__container"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* -------------------------------------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------------------------------------- */}

        <div className="event-modal__header">
          <div>
            <h2>Create Event</h2>

            <p>
              Add a new event to the
              platform
            </p>
          </div>

          <button
            onClick={onClose}
            className="event-modal__close"
          >
            <X size={20} />
          </button>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* BODY */}
        {/* -------------------------------------------------------------- */}

        <form className="event-modal__form">
          {/* ========================================================== */}
          {/* BASIC INFO */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>
              Basic Information
            </h3>

            <div className="event-modal__grid">
              <div className="event-modal__field">
                <label>
                  Event Title
                </label>

                <input
                  type="text"
                  placeholder="Enter event title"
                />
              </div>

              <div className="event-modal__field">
                <label>
                  Slug
                </label>

                <input
                  type="text"
                  placeholder="event-slug"
                />
              </div>
            </div>

            <div className="event-modal__field">
              <label>
                Description
              </label>

              <textarea
                rows={4}
                placeholder="Describe the event..."
              />
            </div>

            <div className="event-modal__grid">
              <div className="event-modal__field">
                <label>
                  Category
                </label>

                <select>
                  <option>
                    HACKATHON
                  </option>

                  <option>
                    CODING
                  </option>

                  <option>
                    WORKSHOP
                  </option>

                  <option>
                    WEBINAR
                  </option>

                  <option>
                    OTHER
                  </option>
                </select>
              </div>

              <div className="event-modal__field">
                <label>
                  Mode
                </label>

                <select>
                  <option>
                    ONLINE
                  </option>

                  <option>
                    OFFLINE
                  </option>

                  <option>
                    HYBRID
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* ORGANIZER */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>
              Organizer
            </h3>

            <div className="event-modal__grid">
              <div className="event-modal__field">
                <label>
                  Organizer Name
                </label>

                <input
                  type="text"
                  placeholder="Google Developer Group"
                />
              </div>

              <div className="event-modal__field">
                <label>
                  Organizer Email
                </label>

                <input
                  type="email"
                  placeholder="contact@example.com"
                />
              </div>
            </div>

            <div className="event-modal__field">
              <label>
                Website
              </label>

              <input
                type="text"
                placeholder="https://example.com"
              />
            </div>
          </div>

          {/* ========================================================== */}
          {/* LINKS */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>Links</h3>

            <div className="event-modal__field">
              <label>
                Registration URL
              </label>

              <input
                type="url"
                placeholder="https://register.com"
              />
            </div>

            <div className="event-modal__field">
              <label>
                Redirect URL
              </label>

              <input
                type="url"
                placeholder="https://event.com"
              />
            </div>
          </div>

          {/* ========================================================== */}
          {/* DATES */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>Dates</h3>

            <div className="event-modal__grid">
              <div className="event-modal__field">
                <label>
                  Start Date
                </label>

                <input type="date" />
              </div>

              <div className="event-modal__field">
                <label>
                  End Date
                </label>

                <input type="date" />
              </div>
            </div>

            <div className="event-modal__field">
              <label>
                Registration Deadline
              </label>

              <input type="date" />
            </div>
          </div>

          {/* ========================================================== */}
          {/* LOCATION */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>Location</h3>

            <div className="event-modal__field">
              <label>
                Address
              </label>

              <input
                type="text"
                placeholder="Street address"
              />
            </div>

            <div className="event-modal__grid">
              <div className="event-modal__field">
                <label>
                  City
                </label>

                <input
                  type="text"
                  placeholder="City"
                />
              </div>

              <div className="event-modal__field">
                <label>
                  State
                </label>

                <input
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>

            <div className="event-modal__grid">
              <div className="event-modal__field">
                <label>
                  Country
                </label>

                <input
                  type="text"
                  placeholder="Country"
                />
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* MEDIA */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>Media</h3>

            <div className="event-modal__grid">
              <div className="event-modal__upload">
                <Upload size={22} />

                <span>
                  Upload Poster
                </span>

                <input
                  type="file"
                  accept="image/*"
                />
              </div>

              <div className="event-modal__upload">
                <Upload size={22} />

                <span>
                  Upload Banner
                </span>

                <input
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* META */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>Meta Data</h3>

            <div className="event-modal__field">
              <label>
                Tags
              </label>

              <input
                type="text"
                placeholder="AI, Hackathon, Coding"
              />
            </div>

            <div className="event-modal__checkbox">
              <input
                type="checkbox"
                id="featured"
              />

              <label htmlFor="featured">
                Featured Event
              </label>
            </div>
          </div>

          {/* ========================================================== */}
          {/* SEO */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>SEO</h3>

            <div className="event-modal__field">
              <label>
                SEO Title
              </label>

              <input
                type="text"
                placeholder="SEO title"
              />
            </div>

            <div className="event-modal__field">
              <label>
                SEO Description
              </label>

              <textarea
                rows={3}
                placeholder="SEO description"
              />
            </div>
          </div>

          {/* ========================================================== */}
          {/* STATUS */}
          {/* ========================================================== */}

          <div className="event-modal__section">
            <h3>Status</h3>

            <div className="event-modal__field">
              <select>
                <option>
                  DRAFT
                </option>

                <option>
                  APPROVED
                </option>

                <option>
                  PENDING
                </option>
              </select>
            </div>
          </div>

          {/* ========================================================== */}
          {/* FOOTER */}
          {/* ========================================================== */}

          <div className="event-modal__footer">
            <button
              type="button"
              className="event-modal__cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="event-modal__submit"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;