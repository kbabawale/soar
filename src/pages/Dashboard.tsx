import { Link } from "react-router-dom";
import Card from "../components/Card.component";
import { CARDS, TRANSACTIONS } from "../util/data";
import Transaction from "../components/Transaction.component";
import WeeklyActivity from "../components/WeeklyActivity.component";
import ExpenseStatistics from "../components/ExpenseStatistics.component";

function Dashboard() {
  const _cards = CARDS;
  const _transactions = TRANSACTIONS;
  return (
    <div className="flex flex-col p-10">
      {/* First row */}
      <section className="flex items-start justify-between">
        {/* Cards */}
        <div className="flex flex-col w-[60%] ">
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
        <div className="flex flex-col w-[35%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Recent Transaction</span>
          </div>
          {/* Content */}
          <div className="h-[240px] flex flex-col justify-center space-y-4 bg-white rounded-3xl p-5">
            {/* Transaction */}
            {_transactions.map((object, index) => (
              <Transaction {...object} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Second row */}
      <section className="flex items-start justify-between mt-7">
        {/* Weekly Activity */}
        <div className="flex flex-col w-[60%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Weekly Activity</span>
          </div>
          {/* Content */}
          <div className="flex">
            <WeeklyActivity />
          </div>
        </div>
        {/* Recent Transactions */}
        <div className="flex flex-col w-[35%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Expense Statistics</span>
          </div>
          {/* Content */}
          <div className="h-[350px] flex items-center justify-center  bg-white rounded-3xl p-5">
            <ExpenseStatistics />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
