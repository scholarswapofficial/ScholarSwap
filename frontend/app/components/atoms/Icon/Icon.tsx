import {
  FaHome,
  FaBook,
  FaStore,
  FaUsers,
  FaComments,
} from "react-icons/fa";

type IconProps = {
  name: string;
};

const iconMap: Record<string, JSX.Element> = {
  home: <FaHome />,
  book: <FaBook />,
  store: <FaStore />,
  users: <FaUsers />,
  chat: <FaComments />,
};

const Icon = ({ name }: IconProps) => {
  return <span>{iconMap[name]}</span>;
};

export default Icon;