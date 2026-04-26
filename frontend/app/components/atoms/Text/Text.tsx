type TextProps = {
  children: React.ReactNode;
  className?: string;
};

const Text = ({ children, className = "" }: TextProps) => {
  return <span className={`text ${className}`}>{children}</span>;
};

export default Text;