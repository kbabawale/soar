import { Link } from "react-router-dom";
import Card from "../components/Card.component";
import { CONTACTDATA } from "../util/data";
import Transaction from "../components/Transaction.component";
import WeeklyActivity from "../components/WeeklyActivity.component";
import ExpenseStatistics from "../components/ExpenseStatistics.component";
import Contact from "../components/Contact.component";
import BalanceHistory from "../components/BalanceHistory.component";
import { useEffect } from "react";
import { useCardStore } from "../store/cards.store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTransactionStore } from "../store/transactions.store";

function Dashboard() {
  const fetchCards = useCardStore((state) => state.fetchCards);
  const fetchTransactions = useTransactionStore(
    (state) => state.fetchTransactions
  );
  const transactions = useTransactionStore((state) => state.data);
  const transactionLoading = useTransactionStore((state) => state.loading);
  const cards = useCardStore((state) => state.data);
  // const error = useCardStore((state) => state.error);
  const cardsLoading = useCardStore((state) => state.loading);

  useEffect(() => {
    if (cards.length === 0) fetchCards?.();
    if (transactions.length === 0) fetchTransactions?.();
  }, []);

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
            <Link onClick={() => alert("See all")} to="/">
              <span className="heading-3">See All</span>
            </Link>
          </div>
          {/* Content */}
          {cards.length > 0 && (
            <div className="flex items-center overflow-y-none overflow-x-scroll no-scrollbar">
              {cards.map((object, index) => (
                <Card
                  customStyles={{ marginRight: "20px" }}
                  {...object}
                  key={index}
                />
              ))}
            </div>
          )}
          {cardsLoading && (
            <Skeleton containerClassName="flex-1" style={{ height: "200px" }} />
          )}
        </div>
        {/* Recent Transactions */}
        <div className="mt-10 md:mt-0 flex flex-col md:w-[35%]">
          {/* Headings */}
          <div className="flex justify-between items-center">
            <span className="heading-2 mb-3">Recent Transaction</span>
          </div>
          {/* Content */}
          {transactions.length > 0 && (
            <div className=" h-[240px] flex flex-col justify-center space-y-4 bg-white rounded-3xl py-5">
              {transactions.map((object, index) => (
                <Transaction {...object} key={index} />
              ))}
            </div>
          )}
          {transactionLoading && (
            <Skeleton containerClassName="flex-1" style={{ height: "200px" }} />
          )}
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
