"use client";

import styles from "@/styles/sections/friend/eventStats.module.scss";
import {
  FaCalendarCheck,
  FaEnvelope,
  FaBookmark,
  FaUserFriends,
} from "react-icons/fa";

const EventStats = () => {
  return (
    <div className={styles["wrapper"]}>
      
      {/* ================= YOUR EVENTS ================= */}
      <div className={styles["card"]}>
        <div className={styles["card-header"]}>
          <h3>Your Events</h3>
          <span>View all</span>
        </div>

        <div className={styles["stats-grid"]}>
          <div className={styles["stat"]}>
            <FaCalendarCheck />
            <div>
              <h4>5</h4>
              <p>Registered</p>
            </div>
          </div>

          <div className={styles["stat"]}>
            <FaEnvelope />
            <div>
              <h4>3</h4>
              <p>Invitations</p>
            </div>
          </div>

          <div className={styles["stat"]}>
            <FaBookmark />
            <div>
              <h4>2</h4>
              <p>Saved</p>
            </div>
          </div>

          <div className={styles["stat"]}>
            <FaUserFriends />
            <div>
              <h4>1</h4>
              <p>Organizing</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= UPCOMING ================= */}
      <div className={styles["card"]}>
        <div className={styles["card-header"]}>
          <h3>Upcoming This Week</h3>
          <span>View calendar</span>
        </div>

        <div className={styles["upcoming"]}>
          {[
            { date: "24 MAY", title: "Tech Talk: Future of AI", time: "4:00 PM" },
            { date: "25 MAY", title: "Cloud Computing 101", time: "11:00 AM" },
            { date: "27 MAY", title: "UI/UX Workshop", time: "2:00 PM" },
          ].map((item, i) => {
            const [day, month] = item.date.split(" ");

            return (
              <div key={i} className={styles["up-item"]}>
                <div className={styles["date-box"]}>
                  <span>{day}</span>
                  <small>{month}</small>
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className={styles["cta"]}>
        <h3>Organize an Event</h3>
        <p>Share your ideas and bring people together</p>
        <button>Create Event →</button>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className={styles["card"]}>
        <div className={styles["card-header"]}>
          <h3>Popular Categories</h3>
          <span>View all</span>
        </div>

        <div className={styles["categories"]}>
          {[
            { name: "Tech", count: "28" },
            { name: "Business", count: "18" },
            { name: "Design", count: "15" },
            { name: "Career", count: "22" },
          ].map((cat, i) => (
            <div key={i} className={styles["cat-item"]}>
              <div className={styles["icon"]}></div>
              <h4>{cat.name}</h4>
              <p>{cat.count} Events</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventStats;