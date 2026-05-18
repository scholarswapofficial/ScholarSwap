import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
  variant?:
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4";
};

const Text = ({
  children,
  className = "",
  variant = "span",
}: TextProps) => {
  const Component = variant;

  return (
    <Component
      className={`text ${className}`}
    >
      {children}
    </Component>
  );
};

export default Text;