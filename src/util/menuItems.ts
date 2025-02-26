import { Menu } from "./model";

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
