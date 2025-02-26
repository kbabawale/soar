import { Link } from "react-router-dom";
import Card from "../components/Card.component";
import { CARDS } from "../util/data";

function Dashboard() {
  const _cards = CARDS;
  return (
    <div className="border flex flex-col p-10">
      {/* First row */}
      <div className="flex">
        {/* Cards */}
        <div className="flex flex-col w-[70%] ">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">My Cards</span>
            <Link to="/">
              <span className="heading-3">See All</span>
            </Link>
          </div>
          {/* Content */}
          <div className="flex items-center flex-nowrap overflow-x-scroll no-scrollbar">
            {_cards.map((object, index) => (
              <Card
                customStyles={{ marginRight: "20px" }}
                {...object}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* Recent Transactions */}
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
