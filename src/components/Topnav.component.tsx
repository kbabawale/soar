import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.component";

function Topnav() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="">
      {!isOpen && (
        <nav className="bg-white flex items-center justify-between py-6 px-10 border-b border-[#E6EFF5]">
          <img
            onClick={() => setOpen(!isOpen)}
            className="w-[25px] md:hidden"
            src="/menu.svg"
          />
          <span className="grow md:grow-0 text-center md:text-left  text-3xl font-semibold text-c-primary">
            Overview
          </span>
          <div className="flex items-center md:space-x-6">
            <input
              className="hidden md:block text-base text-c-text bg-c-light-ash rounded-3xl py-3 px-6 outline-0"
              placeholder="Search for something"
              type="search"
            />

            <Link className="hidden md:block" to="/" title="Preferences">
              <div className="flex items-center justify-center rounded-full bg-c-light-ash w-[50px] h-[50px]">
                <img src="/preferences.svg" alt="" />
              </div>
            </Link>

            <Link className="hidden md:block" to="/" title="Notifications">
              <div className="flex items-center justify-center rounded-full bg-c-light-ash w-[50px] h-[50px]">
                <img src="/notification.svg" alt="" />
              </div>
            </Link>

            <Link to="/" title="Profile">
              <div className="flex items-center justify-center rounded-full bg-c-light-ash w-[60px] h-[60px]">
                <img src="/profile.svg" alt="" />
              </div>
            </Link>
          </div>
        </nav>
      )}
      {isOpen && (
        <div className="md:hidden p-10 flex flex-col space-y-2 w-screen h-screen transition-all ease-in-out bg-c-light-ash">
          <span
            style={{ fontSize: "xxx-large", fontWeight: "bolder" }}
            onClick={() => setOpen(!isOpen)}
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
