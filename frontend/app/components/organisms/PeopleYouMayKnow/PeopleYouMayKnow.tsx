import styles from "@/styles/sections/home/rightpanel.module.scss";

const people = [
  {
    id: 1,
    name: "Abhijit Shil",
    desc: "B.Tech Student • Techno Main",
    mutual: "24 mutual connections",
    avatar: "/images/avatars/sara.png",
  },
  {
    id: 2,
    name: "Sharmila Malik",
    desc: "Student • Techno Main",
    mutual: "12 mutual connections",
    avatar: "/images/avatars/sara.png",
  },
];

const PeopleYouMayKnow = () => {
  return (
    <div className={styles.card}>
      
      <div className={styles.card__header}>
        <div className={styles.card__title}>👥 People You May Know</div>
        <span className={styles.card__link}>View all</span>
      </div>

      {people.map((p) => (
        <div key={p.id} className={styles.person}>
          
          <img src={p.avatar} className={styles.person__avatar} />

          <div className={styles.person__info}>
            <p>{p.name}</p>
            <span>{p.desc}</span>
            <small>{p.mutual}</small>
          </div>

          <button className={styles.connect}>Connect</button>

        </div>
      ))}
    </div>
  );
};

export default PeopleYouMayKnow;