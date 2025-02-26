import { CardProps, Menu } from "./model";

export const MENUITEMS: Menu[] = [
  {
    filledIcon: "/home-filled",
    unfilledIcon: "/home-unfilled",
    label: "Dashboard",
    route: "/",
  },
  {
    filledIcon: "/transactions",
    unfilledIcon: "/transactions",
    label: "Transactions",
    route: "/transactions",
  },
  {
    filledIcon: "/accounts",
    unfilledIcon: "/accounts",
    label: "Accounts",
    route: "/accounts",
  },
  {
    filledIcon: "/investments",
    unfilledIcon: "/investments",
    label: "Investments",
    route: "/investments",
  },
  {
    filledIcon: "/credit-cards",
    unfilledIcon: "/credit-cards",
    label: "Credit Cards",
    route: "/cards",
  },
  {
    filledIcon: "/loans",
    unfilledIcon: "/loans",
    label: "Loans",
    route: "/loans",
  },
  {
    filledIcon: "/services",
    unfilledIcon: "/services",
    label: "Services",
    route: "/services",
  },
  {
    filledIcon: "/privileges",
    unfilledIcon: "/privileges",
    label: "My Privileges",
    route: "/privileges",
  },
  {
    filledIcon: "/settings-filled",
    unfilledIcon: "/settings-unfilled",
    label: "Setting",
    route: "/settings",
  },
];

export const CARDS: CardProps[] = [
  {
    balance: 3000,
    cardNumber: 2343234323454333,
    cardType: "dark",
    expiryDate: new Date("01/08/2030").toISOString(),
    holder: "Eddy Cusuma",
  },
  {
    balance: 53030,
    cardNumber: 2343234323454333,
    cardType: "light",
    expiryDate: new Date("05/12/2026").toISOString(),
    holder: "Eddie Murphy",
  },
  {
    balance: 1000,
    cardNumber: 2343234323454333,
    cardType: "light",
    expiryDate: new Date("05/12/2026").toISOString(),
    holder: "Tom Murphy",
  },
  {
    balance: 53030,
    cardNumber: 2343234323454333,
    cardType: "light",
    expiryDate: new Date("05/12/2026").toISOString(),
    holder: "Peter Drury",
  },
  {
    balance: 53030,
    cardNumber: 2343234323454333,
    cardType: "light",
    expiryDate: new Date("05/12/2026").toISOString(),
    holder: "Peter Drury",
  },
];
