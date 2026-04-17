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
};

const iconMap: Record<string, JSX.Element> = {
  home: <FaHome />,
  library: <FaBook />,
  marketplace: <FaStore />,
  messages: <FaComments />,
  settings: <FaCog />,
  logout: <FaSignOutAlt />,
};

const Icon = ({ name }: IconProps) => {
  return <span>{iconMap[name] || <FaHome />}</span>; // fallback added
};

export default Icon;