import { useState } from "react";
import EditProfile from "../components/EditProfile.component";
import Tabs from "../components/Tabs.component";
import UnderConstruction from "../components/Construction.component";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className="flex flex-col p-5 md:p-10">
      <section className=" bg-white rounded-3xl w-full flex flex-col p-6">
        {/* tabs */}
        <Tabs onSwitch={(tabIndex) => setActiveTab(tabIndex)} />
        {/* Body */}

        <div className="mt-10 min-h-[400px]">
          {activeTab === 1 ? (
            <EditProfile />
          ) : activeTab === 2 ? (
            <UnderConstruction />
          ) : (
            <UnderConstruction />
          )}
        </div>
      </section>
    </div>
  );
};

export default Settings;
