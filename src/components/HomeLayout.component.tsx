import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.component";
import Topnav from "./Topnav.component";

function HomeLayout() {
  return (
    <div className="bg-c-light-gray w-screen h-screen absolute">
      {/* Sidebar */}
      <section className="fixed w-[300px] h-screen bg-white border-r border-[#E6EFF5]">
        <Link to="/" title="Homepage">
          <div className="flex items-center justify-center space-x-4 py-7">
            <img src="/logo.svg" alt="Logo" aria-label="SOAR Logo" />
            <span className="heading-1">Soar Task</span>
          </div>
        </Link>
        <Sidebar />
      </section>

      <section className="fixed w-[calc(100%-300px)] right-0">
        <Topnav />

        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default HomeLayout;
