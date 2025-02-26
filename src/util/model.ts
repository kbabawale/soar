import { CSSProperties } from "react";

export type Menu = {
  label: string;
  filledIcon: string;
  unfilledIcon: string;
  route: string;
};

export type CardType = "dark" | "light";
export type TransactionType = "PayPal" | "Card" | "Cash";

export type CardProps = {
  balance: number;
  holder: string;
  expiryDate: string;
  cardNumber: number;
  cardType: CardType;
  customStyles?: CSSProperties;
};

export type TransactionProps = {
  type: TransactionType;
  narration: string;
  amount: number;
  debit: boolean;
  createdAt: string;
};
