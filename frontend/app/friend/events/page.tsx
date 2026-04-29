"use client";

import styles from "@/styles/sections/friend/events.module.scss";
import { EVENTS } from "@/constant/friend/events";

import FriendSidebar from "@/components/organisms/FriendSidebar/FriendSidebar";
import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import EventStats from "@/components/organisms/EventStats/EventStats";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";

export default function EventsPage() {
  return (
    <div className={styles["layout"]}>
      {/* LEFT SIDEBAR */}
      <div className={styles["left"]}>
        <FriendSidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className={styles["center"]}>
        <FeedTabs />

        {/* HEADER */}
        <div className={styles["header"]}>
          <div>
            <h2>Events</h2>
            <p>Discover and join amazing events around you</p>
          </div>

          <button className={styles["create-btn"]}>
            + Create Event
          </button>
        </div>

        {/* FILTERS */}
        <div className={styles["filters"]}>
          <input placeholder="Search events..." />
          <select>
            <option>All Events</option>
            <option>Workshops</option>
            <option>Hackathons</option>
          </select>
          <select>
            <option>Date</option>
          </select>
          <select>
            <option>Location</option>
          </select>
        </div>

        {/* CATEGORY PILLS */}
        <div className={styles["categories"]}>
          <span className={styles["active"]}>All</span>
          <span>Workshops</span>
          <span>Seminars</span>
          <span>Hackathons</span>
          <span>Meetups</span>
        </div>

        {/* EVENTS LIST */}
        <div className={styles["event-list"]}>
          {EVENTS.map((event) => {
            const [day, month] = event.date.split(" ");

            return (
              <div key={event.id} className={styles["event-card"]}>
                
                {/* LEFT: IMAGE BOX */}
                <div className={styles["image-box"]}>
                  <img src={event.image} alt={event.title} />

                  {/* DATE OVERLAY */}
                  <div className={styles["date"]}>
                    <span>{day}</span>
                    <small>{month}</small>
                  </div>
                </div>

                {/* CENTER: CONTENT */}
                <div className={styles["content"]}>
                  <span className={styles["tag"]}>{event.type}</span>

                  <h3>{event.title}</h3>

                  <p className={styles["desc"]}>
                    {event.description}
                  </p>

                  <div className={styles["meta"]}>
                    <span>
                      <FaMapMarkerAlt /> {event.location}
                    </span>

                    <span>
                      <FaUsers /> {event.attendees} going
                    </span>
                  </div>
                </div>

                {/* RIGHT: ACTION */}
                <div className={styles["action"]}>
                  <button>View Details</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     <div className={styles["right"]}>
     <EventStats />
     </div>
    </div>
  );
}