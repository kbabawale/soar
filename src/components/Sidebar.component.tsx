import { MENUITEMS } from "../util/data";
import SideMenuItem from "./Menu.component";

const _menuitems = MENUITEMS;
function Sidebar() {
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
