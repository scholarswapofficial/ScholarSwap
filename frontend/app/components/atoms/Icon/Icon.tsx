import type { ReactNode } from "react";

import {
  FaHome,
  FaBook,
  FaStore,
  FaComments,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

type IconProps = {
  name: string;
  className?: string;
};

const iconMap: Record<
  string,
  ReactNode
> = {
  home: <FaHome />,
  library: <FaBook />,
  marketplace: <FaStore />,
  messages: <FaComments />,
  settings: <FaCog />,
  logout: <FaSignOutAlt />,
};

const Icon = ({
  name,
  className = "",
}: IconProps) => {
  return (
    <span className={className}>
      {iconMap[name] || <FaHome />}
    </span>
  );
};

export default Icon;