import { useState } from "react";
import EditProfile from "../components/EditProfile.component";
import Tabs from "../components/Tabs.component";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className=" flex flex-col p-10">
      <section className=" bg-white rounded-3xl w-full flex flex-col p-6">
        {/* tabs */}
        <Tabs onSwitch={(tabIndex) => setActiveTab(tabIndex)} />
        {/* Body */}

        <div className="mt-10">
          {activeTab === 1 ? (
            <EditProfile />
          ) : activeTab === 2 ? (
            <>Preferences</>
          ) : (
            <>Security</>
          )}
        </div>
      </section>
    </div>
  );
};

export default Settings;
