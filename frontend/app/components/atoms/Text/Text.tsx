type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <span className="text">{children}</span>;
};

export default Text;