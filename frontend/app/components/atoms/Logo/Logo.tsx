type LogoProps = {
  text?: string;
  className?: string;
};

const Logo = ({
  text,
  className = "",
}: LogoProps) => {
  return (
    <div className={`logo ${className}`}>
      <img
        src="/images/logo.png"
        alt="ScholarSwap Logo"
      />

      {text && <span>{text}</span>}
    </div>
  );
};

export default Logo;