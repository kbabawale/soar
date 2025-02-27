import { Link, useLocation } from "react-router-dom";
import { Menu } from "../util/model";
import { useSidebarStore } from "../store/sidebar.store";

const SideMenuItem = ({ filledIcon, unfilledIcon, label, route }: Menu) => {
  const setOpen = useSidebarStore((state) => state.toggleFn);
  const isMobile = useSidebarStore((state) => state.isMobile);
  const location = useLocation();
  const currentRouteActive = (currentRoute: string): boolean => {
    if (currentRoute === location.pathname) return true;
    return false;
  };

  const isCurrentRoute = currentRouteActive(route);

  return (
    <Link
      onClick={() => {
        if (isMobile) setOpen();
      }}
      to={route}
      title={label}
    >
      <div aria-label={label} className="flex items-center h-14">
        <div className="hidden md:block w-[20%]">
          {isCurrentRoute && (
            <div className="w-[5px] h-10 rounded-r bg-c-secondary"></div>
          )}
        </div>
        <div className="w-[20%]">
          <img
            src={`${isCurrentRoute ? filledIcon : unfilledIcon}.svg`}
            alt={label}
            aria-label={label}
          />
        </div>
        <span
          className={`pl-10 md:pl-0 text-lg font-medium ${
            isCurrentRoute ? "text-c-secondary" : "text-c-light"
          } `}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SideMenuItem;
