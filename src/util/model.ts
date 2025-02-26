import { CSSProperties } from "react";

export type Menu = {
  label: string;
  filledIcon: string;
  unfilledIcon: string;
  route: string;
};

export type CardType = "dark" | "light";

export type CardProps = {
  balance: number;
  holder: string;
  expiryDate: string;
  cardNumber: number;
  cardType: CardType;
  customStyles?: CSSProperties;
};
