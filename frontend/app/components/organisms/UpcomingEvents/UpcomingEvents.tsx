import styles from "@/styles/sections/home/rightpanel.module.scss";

const events = [
  {
    id: 1,
    title: "DBMS Assignment",
    date: "May 20",
    time: "11:59 PM",
    left: "2 Days Left",
  },
  {
    id: 2,
    title: "OS Quiz",
    date: "May 25",
    time: "11:59 PM",
    left: "7 Days Left",
  },
];

const UpcomingEvents = () => {
  return (
    <div className={styles.card}>
      
      <div className={styles.card__header}>
        <div className={styles.card__title}>📅 Upcoming Deadlines</div>
        <span className={styles.card__link}>View all</span>
      </div>

      {events.map((event) => (
        <div key={event.id} className={styles.event}>
          
          <div className={styles.event__date}>
            <span>May</span>
            <strong>{event.date.split(" ")[1]}</strong>
          </div>

          <div className={styles.event__info}>
            <p>{event.title}</p>
            <span>Submit by {event.time}</span>
          </div>

          <span className={styles.event__badge}>{event.left}</span>

        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;