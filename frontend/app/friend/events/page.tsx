"use client";

import { useState } from "react";

import styles from "@/styles/sections/friend/events.module.scss";

import { EVENTS } from "@/constant/friend/events";

import FriendSidebar from "@/components/organisms/FriendSidebar/FriendSidebar";
import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import EventStats from "@/components/organisms/EventStats/EventStats";

/* MOBILE */
import MobileHeaderSection from "@/sections/home/MobileHeaderSection";


import {  FaMapMarkerAlt,  FaUsers,  FaPlus,} from "react-icons/fa";

export default function EventsPage() {
  /* ================= MOBILE DRAWER ================= */
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <MobileHeaderSection
        setMobileOpen={setMobileOpen}
      />

      {/* ================= PAGE LAYOUT ================= */}
      <div className={styles["layout"]}>
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className={styles["left"]}>
          <FriendSidebar />
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className={styles["center"]}>
          
          {/* FEED NAVIGATION */}
          <FeedTabs />

          {/* ================= PAGE HEADER ================= */}
          <div className={styles["header"]}>
            <div>
              <h2>Events</h2>
              <p> Discover and join amazing events around you</p>
            </div>

            <button
              className={styles["create-btn"]}>
              + Create Event
            </button>
          </div>

          {/* ================= FILTERS ================= */}
          <div className={styles["filters"]}>
            <input
              type="text"
              placeholder="Search events..."
            />

            <select>
              <option>
                All Events
              </option>

              <option>
                Workshops
              </option>

              <option>
                Hackathons
              </option>

              <option>
                Meetups
              </option>

              <option>
                Seminars
              </option>
            </select>

            <select>
              <option>Date</option>

              <option>Today</option>

              <option>
                This Week
              </option>

              <option>
                This Month
              </option>
            </select>

            <select>
              <option>
                Location
              </option>

              <option>
                Online
              </option>

              <option>
                Offline
              </option>
            </select>
          </div>

          {/* ================= CATEGORY PILLS ================= */}
          <div
            className={styles["categories"]}
          >
            <span
              className={
                styles["active"]
              }
            >
              All
            </span>

            <span>Workshops</span>

            <span>Seminars</span>

            <span>Hackathons</span>

            <span>Meetups</span>

            <span>Career</span>

            <span>AI & ML</span>

            <span>Cloud</span>

            <span>Design</span>
          </div>

          {/* ================= EVENTS LIST ================= */}
          <div
            className={styles["event-list"]}
          >
            {EVENTS.map((event) => {
              const [day, month] =
                event.date.split(" ");

              return (
                <article
                  key={event.id}
                  className={
                    styles["event-card"]
                  }
                >
                  
                  {/* ================= IMAGE ================= */}
                  <div
                    className={
                      styles["image-box"]
                    }
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                    />

                    {/* DATE BADGE */}
                    <div
                      className={
                        styles["date"]
                      }
                    >
                      <span>{day}</span>

                      <small>
                        {month}
                      </small>
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div
                    className={
                      styles["content"]
                    }
                  >
                    {/* TAG */}
                    <span
                      className={
                        styles["tag"]
                      }
                    >
                      {event.type}
                    </span>

                    {/* TITLE */}
                    <h3>
                      {event.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={
                        styles["desc"]
                      }
                    >
                      {
                        event.description
                      }
                    </p>

                    {/* META */}
                    <div
                      className={
                        styles["meta"]
                      }
                    >
                      <span>
                        <FaMapMarkerAlt />

                        {
                          event.location
                        }
                      </span>

                      <span>
                        <FaUsers />

                        {
                          event.attendees
                        }{" "}
                        going
                      </span>
                    </div>
                  </div>

                  {/* ================= ACTION ================= */}
                  <div
                    className={
                      styles["action"]
                    }
                  >
                    <button>
                      View Details
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ================= MOBILE EVENT STATS ================= */}
          <div
            className={
              styles["mobile-stats"]
            }
          >
            <EventStats />
          </div>
        </main>

        {/* ================= DESKTOP RIGHT SIDEBAR ================= */}
        <aside className={styles["right"]}>
          <EventStats />
        </aside>

        {/* ================= MOBILE FLOATING BUTTON ================= */}
        <button
          className={
            styles["floating-btn"]
          }
          aria-label="Create Event"
        >
          <FaPlus />
        </button>
      </div>
    </>
  );
}