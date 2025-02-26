import { MENUITEMS } from "../util/menuItems";
import SideMenuItem from "./Menu.component";

function Sidebar() {
  const _menuitems = MENUITEMS;

  return (
    <div className="flex flex-col w-full pt-5 space-y-1">
      {_menuitems.map((object, index) => (
        <SideMenuItem
          label={object.label}
          filledIcon={object.filledIcon}
          unfilledIcon={object.unfilledIcon}
          route={object.route}
          key={index}
        />
      ))}
    </div>
  );
}

export default Sidebar;
