type LogoProps = {
  text?: string;
};

const Logo = ({
  text = "ScholarSwap",
}: LogoProps) => {
  return (
    <div className="logo">
      <img
        src="/images/logo.png"
        alt="logo"
      />

      <span>{text}</span>
    </div>
  );
};

export default Logo;