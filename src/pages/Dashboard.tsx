import { Link } from "react-router-dom";
import Card from "../components/Card.component";
import { CARDS, CONTACTDATA, TRANSACTIONS } from "../util/data";
import Transaction from "../components/Transaction.component";
import WeeklyActivity from "../components/WeeklyActivity.component";
import ExpenseStatistics from "../components/ExpenseStatistics.component";
import Contact from "../components/Contact.component";
import BalanceHistory from "../components/BalanceHistory.component";

function Dashboard() {
  const _cards = CARDS;
  const _transactions = TRANSACTIONS;
  const _contacts = CONTACTDATA;
  return (
    <div className="flex flex-col md:p-10 p-5 bg-white md:bg-auto">
      {/* First row */}
      <section className="flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Cards */}
        <div className="flex flex-col md:w-[60%] ">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">My Cards</span>
            <Link to="/">
              <span className="heading-3">See All</span>
            </Link>
          </div>
          {/* Content */}
          <div className="flex items-center overflow-y-none overflow-x-scroll no-scrollbar">
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
        <div className="mt-10 md:mt-0 flex flex-col md:w-[35%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Recent Transaction</span>
          </div>
          {/* Content */}
          <div className=" h-[240px] flex flex-col justify-center space-y-4 bg-white rounded-3xl py-5">
            {/* Transaction */}
            {_transactions.map((object, index) => (
              <Transaction {...object} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Second row */}
      <section className="flex flex-col md:flex-row md:items-start md:justify-between mt-7">
        {/* Weekly Activity */}
        <div className="flex flex-col md:w-[60%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Weekly Activity</span>
          </div>
          {/* Content */}
          <div className="flex">
            <WeeklyActivity />
          </div>
        </div>
        {/* Expense Statistics */}
        <div className="mt-10 md:mt-0 flex flex-col md:w-[35%]">
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

      {/* Third row */}
      <section className="flex flex-col md:flex-row md:items-start md:justify-between mt-7">
        {/* Quick Transfer */}
        <div className="flex flex-col md:w-[35%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Quick Transfer</span>
          </div>
          {/* Content */}
          <div className="bg-white w-full h-[250px] py-6 rounded-3xl flex flex-col justify-evenly">
            <div className="flex flex-nowrap overflow-x-scroll no-scrollbar">
              {_contacts.map((object, index) => (
                <Contact {...object} key={index} />
              ))}
            </div>
            <div className="flex items-center justify-between px-6 w-full">
              <span className="text-c-alt text-sm">Write amount</span>
              <div className=" bg-c-dark-ash rounded-3xl w-[60%] flex items-center justify-between">
                <input
                  type="text"
                  placeholder="500.00"
                  inputMode="numeric"
                  className="text-c-alt w-[45%] text-sm px-5 outline-0"
                />
                <button
                  onClick={() => alert("Sent")}
                  className="text-white text-sm bg-c-secondary w-[50%] max-w-[100px] rounded-3xl flex items-center justify-evenly p-2"
                  type="submit"
                >
                  Send <img src="/send.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Balance History */}
        <div className="mt-10 md:mt-0 flex flex-col md:w-[60%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Balance History</span>
          </div>
          {/* Content */}
          <div className="h-[250px] flex flex-col  bg-white rounded-3xl p-5">
            <BalanceHistory />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
