import { Outlet } from "react-router-dom";
import Header from "../../shared/pages/header/Header";
import Sidebar from "../../shared/pages/sidebar/Sidebar";
import { useAuth } from "../../context/AuthContext";
import './MainLayout.css';

const MainLayout = () => {
  const {isSidebarMinimized} = useAuth();
  return (
    <>
      <div className="layout">
        {/* <Sidebar /> */}
        <main className={`main-content ${isSidebarMinimized ? 'minimized' : ''}`}>
          <Header />
          <Outlet />
        </main>
      </div>
    </>

  );
};

export default MainLayout;
