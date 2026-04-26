import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import "@/styles/sections/home/sidebar.module.scss";

const SidebarSection = ({ collapsed, setCollapsed }: any) => {
  return (
    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
  );
};

export default SidebarSection;