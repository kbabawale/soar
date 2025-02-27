import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.component";
import Topnav from "./Topnav.component";
import { useEffect } from "react";
import { useSidebarStore } from "../store/sidebar.store";

function HomeLayout() {
  const setMobile = useSidebarStore((state) => state.setIsMobile);
  useEffect(() => {
    const [width, height] = [window.screen.width, window.screen.height];
    const isMobile = Math.min(width, height) < 768;
    setMobile(isMobile);
  });

  return (
    <div className="w-screen md:absolute">
      {/* Sidebar */}
      <section className="hidden md:block fixed w-[300px] h-screen bg-white border-r border-[#E6EFF5]">
        <Link to="/" title="Homepage">
          <div
            tabIndex={0}
            className="flex items-center justify-center space-x-4 py-7"
          >
            <img src="/logo.svg" alt="Logo" aria-label="SOAR Logo" />
            <span className="heading-1" aria-label="Soar Task">
              Soar Task
            </span>
          </div>
        </Link>
        <Sidebar />
      </section>

      <section className="bg-c-light-gray absolute w-full md:w-[calc(100%-300px)] md:right-0">
        <Topnav />

        <main className="">
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default HomeLayout;
