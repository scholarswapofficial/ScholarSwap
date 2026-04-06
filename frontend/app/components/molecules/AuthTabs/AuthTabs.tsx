type Props = {
  mode: "login" | "register";
  setMode: (mode: "login" | "register") => void;
};

const AuthTabs = ({ mode, setMode }: Props) => {
  return (
    <div className="auth-tabs">
      <button
        className={mode === "login" ? "active" : ""}
        onClick={() => setMode("login")}
      >
        Login
      </button>

      <button
        className={mode === "register" ? "active" : ""}
        onClick={() => setMode("register")}
      >
        Register
      </button>
    </div>
  );
};

export default AuthTabs;