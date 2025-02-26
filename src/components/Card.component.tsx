import { UtilFunction } from "../util/functions";
import { CardProps } from "../util/model";

const Card = ({
  balance,
  cardNumber,
  cardType,
  expiryDate,
  holder,
  customStyles,
}: CardProps) => {
  const exp = UtilFunction.dateToCardValidThrough(expiryDate);

  return (
    <div
      style={customStyles}
      className={`flex-none flex flex-col w-[350px] h-[240px] rounded-3xl ${
        cardType === "dark"
          ? "bg-linear-to-r from-[#5B5A6F] to-[#000000]"
          : "bg-white"
      } border border-[#E6EFF5]`}
    >
      <div className="p-5 flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-white font-normal font-lato">
              Balance
            </span>
            <span
              className={`text-xl ${
                cardType === "dark" ? "text-white" : "text-c-primary"
              } font-semibold font-lato`}
            >
              {UtilFunction.formatCurrency(balance)}
            </span>
          </div>
          <img
            src={`${cardType === "dark" ? "white-chip.svg" : "dark-chip.svg"}`}
            alt="Card Chip"
          />
        </div>
        <div className="flex mt-7 space-x-8">
          <div className="flex flex-col">
            <span
              className={`text-xs ${
                cardType === "dark" ? "text-white/70" : "text-c-alt"
              } font-normal font-lato`}
            >
              CARD HOLDER
            </span>
            <span
              className={`text-base ${
                cardType === "dark" ? "text-white" : "text-c-primary"
              }  font-semibold font-lato`}
            >
              {holder}
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xs ${
                cardType === "dark" ? "text-white/70" : "text-c-alt"
              }  font-normal font-lato`}
            >
              VALID THRU
            </span>
            <span
              className={`text-base ${
                cardType === "dark" ? "text-white" : "text-c-primary"
              }  font-semibold font-lato`}
            >
              {exp}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${
          cardType === "dark"
            ? "bg-[#37363b]"
            : "bg-white border-t-1 border-t-[#DFEAF2]"
        } mt-5 h-full rounded-b-3xl px-5 flex items-center justify-between`}
      >
        <span
          className={`${
            cardType === "dark" ? "text-white" : "text-c-primary"
          } font-lato font-semibold text-xl tracking-wider`}
        >
          {UtilFunction.formatCardNumber(
            UtilFunction.maskCardNumber(cardNumber)
          )}
        </span>
        <img
          src={`${
            cardType === "dark" ? "white-card-logo.svg" : "dark-card-logo.svg"
          }`}
          alt="Card Processor Logo"
        />
      </div>
    </div>
  );
};

export default Card;
