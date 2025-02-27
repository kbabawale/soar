import { ScriptableContext } from "chart.js/auto";
import { CardProps, ContactProps, Menu, TransactionProps } from "./model";

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

export const TRANSACTIONS: TransactionProps[] = [
  {
    amount: 850,
    createdAt: new Date().toISOString(),
    debit: true,
    narration: "Deposit from my card",
    type: "Card",
  },
  {
    amount: 5400,
    createdAt: new Date().toISOString(),
    debit: false,
    narration: "Jemi Wilson",
    type: "Cash",
  },
  {
    amount: 2500,
    createdAt: new Date().toISOString(),
    debit: true,
    narration: "Deposit Paypal",
    type: "PayPal",
  },
];

export const WEEKLYACTIVITYDATA = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],

  datasets: [
    {
      label: "Withdraw",
      data: [450, 350, 320, 460, 150, 390, 395],
      borderColor: "#232323",
      fill: true,
      borderRadius: 15,
      barPercentage: 0.5,
      backgroundColor: "#232323",
      tension: 0.5,
    },
    {
      label: "Deposit",
      data: [250, 100, 300, 400, 250, 230, 270],
      fill: true,
      borderRadius: 15,
      barPercentage: 0.5,
      borderColor: "#396AFF",
      backgroundColor: "#396AFF",
      tension: 0.5,
    },
  ],
};

export const BALANCEHISTORYDATA = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],

  datasets: [
    {
      data: [150, 350, 320, 460, 150, 390, 395],
      borderColor: "#1814F3",
      fill: true,
      borderRadius: 15,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, "rgba(45,96,255,50)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        return gradient;
      },
      tension: 0.5,
    },
  ],
};

export const EXPENSESDATA = {
  labels: ["Entertainment", "Bill Expense", "Investments", "Others"],

  datasets: [
    {
      label: "Withdraw",
      data: [450, 500, 720, 420],
      // borderColor: "#232323",
      // fill: true,
      // borderRadius: 15,
      // barPercentage: 0.5,
      backgroundColor: ["#343C6A", "#FC7900", "#396AFF", "#232323"],
      // tension: 0.5,
    },
  ],
};

export const CONTACTDATA: ContactProps[] = [
  {
    image: "/ceo.svg",
    name: "Livia Bator",
    role: "CEO",
  },
  {
    image: "/ceo.svg",
    name: "Randy Press",
    role: "Director",
  },
  {
    image: "/ceo.svg",
    name: "Workman Teal",
    role: "Designer",
  },
  {
    image: "/ceo.svg",
    name: "Workman Teal",
    role: "Designer",
  },
  {
    image: "/ceo.svg",
    name: "Workman Teal",
    role: "Designer",
  },
];
