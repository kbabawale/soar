import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.component";
import { useSidebarStore } from "../store/sidebar.store";

function Topnav() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const setOpen = useSidebarStore((state) => state.toggleFn);
  return (
    <div className="">
      {!isOpen && (
        <div className="bg-white flex flex-col py-6 px-5 md:px-10 md:border-b md:border-[#E6EFF5]">
          <nav className=" flex items-center justify-between ">
            <img
              onClick={() => setOpen()}
              className="w-[25px] md:hidden"
              src="/menu.svg"
            />
            <span className="grow md:grow-0 text-center md:text-left  text-3xl font-semibold text-c-primary">
              Overview
            </span>
            <div className="flex items-center md:space-x-6">
              <input
                autoFocus
                className="hidden md:block text-base text-c-text bg-c-light-ash rounded-3xl py-3 px-6 outline-0"
                placeholder="Search for something"
                type="search"
              />

              <Link className="hidden md:block" to="/" title="Preferences">
                <div
                  aria-label="Preferences"
                  className="flex items-center justify-center rounded-full bg-c-light-ash w-[50px] h-[50px]"
                >
                  <img src="/preferences.svg" alt="" />
                </div>
              </Link>

              <Link className="hidden md:block" to="/" title="Notifications">
                <div
                  aria-label="notification"
                  className="flex items-center justify-center rounded-full bg-c-light-ash w-[50px] h-[50px]"
                >
                  <img src="/notification.svg" alt="" />
                </div>
              </Link>

              <Link to="/" title="Profile">
                <div
                  aria-label="Profile"
                  className="flex items-center justify-center rounded-full bg-c-light-ash w-[60px] h-[60px]"
                >
                  <img src="/profile.svg" alt="" />
                </div>
              </Link>
            </div>
          </nav>
          <input
            className="md:hidden text-base text-c-text bg-c-light-ash rounded-3xl mt-2 py-2 px-6 outline-0"
            placeholder="Search for something"
            type="search"
          />
        </div>
      )}
      {isOpen && (
        <div className="md:hidden p-10 flex flex-col space-y-2 w-screen h-screen transition-all ease-in-out bg-c-light-ash">
          <span
            style={{ fontSize: "xxx-large", fontWeight: "bolder" }}
            onClick={() => setOpen()}
            className="self-end text-c-red material-symbols-outlined"
          >
            close
          </span>

          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default Topnav;
