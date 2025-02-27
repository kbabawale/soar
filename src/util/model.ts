import { CSSProperties, InputHTMLAttributes } from "react";

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

export type ContactProps = {
  name: string;
  image: string;
  role: string;
};

export type TabItemProps = {
  id: number;
  active: boolean;
  label: string;
  click?: () => void;
};

export type TabsProps = {
  onSwitch: (activeTab: number) => void;
};

export type FormElementType = "text" | "password" | "email" | "dropdown";
export type DropdownOptions = {
  value: number | string;
  label: string;
};
export type FormElementProps = {
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  type: FormElementType;
  extraTypeAttributes?: InputHTMLAttributes<unknown>[];
  label: string;
  customStyles?: CSSProperties;
  options?: DropdownOptions[];
  disabled?: boolean;
};
