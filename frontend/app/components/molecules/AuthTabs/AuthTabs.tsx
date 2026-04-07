import styles from "@/styles/sections/auth/auth.module.scss";

type Props = {
  mode: "login" | "register";
  setMode: (mode: "login" | "register") => void;
};

const AuthTabs = ({ mode, setMode }: Props) => {
  return (
    <div className={styles["auth-tabs"]}>
      <button
        className={`${styles["tab-btn"]} ${
          mode === "login" ? styles["active"] : ""
        }`}
        onClick={() => setMode("login")}
      >
        Login
      </button>

      <button
        className={`${styles["tab-btn"]} ${
          mode === "register" ? styles["active"] : ""
        }`}
        onClick={() => setMode("register")}
      >
        Register
      </button>
    </div>
  );
};

export default AuthTabs;