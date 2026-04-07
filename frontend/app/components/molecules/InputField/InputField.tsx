import styles from "@/styles/sections/auth/auth.module.scss";

type Props = {
  label: string;
  type: string;
  placeholder: string;
};

const InputField = ({ label, type, placeholder }: Props) => {
  return (
    <div className={styles["input-field"]}>
      <label className={styles["input-label"]}>{label}</label>
      <input
        className={styles["input-control"]}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;