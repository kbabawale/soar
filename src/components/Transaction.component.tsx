import { UtilFunction } from "../util/functions";
import { TransactionProps } from "../util/model";

const Transaction = ({
  type,
  narration,
  amount,
  debit,
  createdAt,
}: TransactionProps) => {
  return (
    <div className="flex items-center justify-between px-3">
      <div className="w-[20%]">
        <div
          className={`w-[50px] h-[50px] rounded-full ${
            type === "Card"
              ? "bg-[#FFF5D9]"
              : type === "Cash"
              ? "bg-c-green"
              : "bg-c-light-purple"
          } flex items-center justify-center`}
        >
          <img
            src={`${
              type === "Card"
                ? "/card-deposit.svg"
                : type === "Cash"
                ? "/cash-deposit.svg"
                : "/paypal-deposit.svg"
            }`}
            alt={type}
          />
        </div>
      </div>
      <div className="flex flex-col w-full pl-5">
        <span className="text-base font-medium">{narration}</span>
        <span className="text-c-alt text-sm">
          {UtilFunction.formatDate(createdAt)}
        </span>
      </div>
      <div className={`${debit ? "text-c-red" : "text-c-green"}`}>
        {debit ? "-" : "+"}
        {UtilFunction.formatCurrency(amount)}
      </div>
    </div>
  );
};

export default Transaction;
