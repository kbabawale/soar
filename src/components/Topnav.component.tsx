import { Link } from "react-router-dom";

function Topnav() {
  return (
    <nav className="bg-white flex items-center justify-between py-6 px-10 border-b border-[#E6EFF5]">
      <span className="text-3xl font-semibold text-c-primary">Overview</span>
      <div className="flex items-center space-x-6">
        <input
          className="text-base text-c-text bg-c-light-ash rounded-3xl py-3 px-6 outline-0"
          placeholder="Search for something"
          type="search"
        />

        <Link to="/" title="Preferences">
          <div className="flex items-center justify-center rounded-full bg-c-light-ash w-[50px] h-[50px]">
            <img src="/preferences.svg" alt="" />
          </div>
        </Link>

        <Link to="/" title="Notifications">
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
  );
}

export default Topnav;
