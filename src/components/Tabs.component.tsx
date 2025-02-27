import { useState } from "react";
import { TabItemProps, TabsProps } from "../util/model";
import { TABSDATA } from "../util/data";

const TabItem = ({ active, label, click }: TabItemProps) => {
  return (
    <div
      onClick={click}
      className={`${
        active
          ? "border-b-3 border-b-c-primary cursor-default"
          : "cursor-pointer border-0"
      } flex flex-col justify-center h-[50px] md:h-[35px] px-3 transition-[border] ease-in-out`}
    >
      <span
        title={label}
        className={`${
          active ? "text-c-primary" : "text-c-alt hover:text-c-primary"
        } text-sm md:text-base text-center font-medium`}
      >
        {label}
      </span>
    </div>
  );
};

const Tabs = ({ onSwitch }: TabsProps) => {
  const [tabs, setTabs] = useState<TabItemProps[]>(TABSDATA);

  const handleClick = (index: number) => {
    if (!index) return;

    const newInstance = [...tabs].map((v) => {
      return v.id !== index ? { ...v, active: false } : { ...v, active: true };
    });
    setTabs(newInstance);
    onSwitch(index);
  };

  return (
    <div className="flex border-b border-b-[#F4F5F7] items-center md:space-x-10">
      {tabs &&
        tabs.map((v) => (
          <TabItem
            click={() => handleClick(v.id)}
            key={v.id}
            active={v.active}
            label={v.label}
            id={v.id}
          />
        ))}
    </div>
  );
};

export default Tabs;
