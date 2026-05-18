import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import "@/styles/sections/home/sidebar.module.scss";

type SidebarSectionProps = {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;

  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
};

const SidebarSection = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: SidebarSectionProps) => {
  return (
    <Sidebar
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
    />
  );
};

export default SidebarSection;