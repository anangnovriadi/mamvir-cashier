import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import FloatingWhatsAppButton from "../components/common/FloatingWhatsAppButton";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex min-h-screen flex-1 flex-col transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[280px]" : "lg:ml-[84px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="flex-1 p-4 md:p-6">
          <Outlet />
        </div>
        <footer className="border-t border-gray-200 px-4 py-3 dark:border-gray-800 md:px-6">
          <p className="text-sm text-left text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Mamvir Cashier. All rights reserved.
          </p>
        </footer>
      </div>
      <FloatingWhatsAppButton />
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
