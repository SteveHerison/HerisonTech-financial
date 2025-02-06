// data.tsx

// Defina as interfaces para tipar os dados
export interface Balance {
  restante: number;
  renda: number;
  despesas: number;
}

export interface Transaction {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

export interface Budget {
  id: number;
  category: string;
  maximum: number;
  theme: string;
}

export interface Pot {
  name: string;
  target: number;
  total: number;
  theme: string;
}

export interface Data {
  balance: Balance;
  transactions: Transaction[];
  budgets: Budget[];
  pots: Pot[];
}

// Exporte os dados (copie o conteúdo do seu JSON)
export const data: Data = {
  balance: {
    restante: 2113.75,
    renda: 3814.25,
    despesas: 1700.5,
  },
  transactions: [
    {
      avatar: "./assets/images/avatars/emma-richardson.jpg",
      name: "Emma Richardson",
      category: "General",
      date: "2024-08-19",
      amount: 75.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/savory-bites-bistro.jpg",
      name: "Savory Bites Bistro",
      category: "Dining Out",
      date: "2024-08-19",
      amount: -55.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/daniel-carter.jpg",
      name: "Daniel Carter",
      category: "General",
      date: "2024-08-18",
      amount: -42.3,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/sun-park.jpg",
      name: "Sun Park",
      category: "General",
      date: "2024-08-17",
      amount: 120.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/urban-services-hub.jpg",
      name: "Urban Services Hub",
      category: "General",
      date: "2024-08-17",
      amount: -65.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/liam-hughes.jpg",
      name: "Liam Hughes",
      category: "Groceries",
      date: "2024-08-15",
      amount: 65.75,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/lily-ramirez.jpg",
      name: "Lily Ramirez",
      category: "General",
      date: "2024-08-14",
      amount: 50.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/ethan-clark.jpg",
      name: "Ethan Clark",
      category: "Dining Out",
      date: "2024-08-13",
      amount: -32.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/james-thompson.jpg",
      name: "James Thompson",
      category: "Entertainment",
      date: "2024-08-11",
      amount: -5.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/pixel-playground.jpg",
      name: "Pixel Playground",
      category: "Entertainment",
      date: "2024-08-11",
      amount: -10.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/ella-phillips.jpg",
      name: "Ella Phillips",
      category: "Dining Out",
      date: "2024-08-10",
      amount: -45.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/sofia-peterson.jpg",
      name: "Sofia Peterson",
      category: "Transportation",
      date: "2024-08-08",
      amount: -15.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/mason-martinez.jpg",
      name: "Mason Martinez",
      category: "Lifestyle",
      date: "2024-08-07",
      amount: -35.25,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/green-plate-eatery.jpg",
      name: "Green Plate Eatery",
      category: "Groceries",
      date: "2024-08-06",
      amount: -78.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/sebastian-cook.jpg",
      name: "Sebastian Cook",
      category: "Transportation",
      date: "2024-08-06",
      amount: -22.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/william-harris.jpg",
      name: "William Harris",
      category: "Personal Care",
      date: "2024-08-05",
      amount: -10.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/elevate-education.jpg",
      name: "Elevate Education",
      category: "Education",
      date: "2024-08-04",
      amount: -50.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/serenity-spa-and-wellness.jpg",
      name: "Serenity Spa & Wellness",
      category: "Personal Care",
      date: "2024-08-03",
      amount: -30.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/spark-electric-solutions.jpg",
      name: "Spark Electric Solutions",
      category: "Bills",
      date: "2024-08-02",
      amount: -100.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/rina-sato.jpg",
      name: "Rina Sato",
      category: "Bills",
      date: "2024-08-02",
      amount: -50.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/swift-ride-share.jpg",
      name: "Swift Ride Share",
      category: "Transportation",
      date: "2024-08-01",
      amount: -18.75,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/aqua-flow-utilities.jpg",
      name: "Aqua Flow Utilities",
      category: "Bills",
      date: "2024-07-30",
      amount: -100.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/ecofuel-energy.jpg",
      name: "EcoFuel Energy",
      category: "Bills",
      date: "2024-07-29",
      amount: -35.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/yuna-kim.jpg",
      name: "Yuna Kim",
      category: "Dining Out",
      date: "2024-07-29",
      amount: -28.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/flavor-fiesta.jpg",
      name: "Flavor Fiesta",
      category: "Dining Out",
      date: "2024-07-27",
      amount: -42.75,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/harper-edwards.jpg",
      name: "Harper Edwards",
      category: "Shopping",
      date: "2024-07-26",
      amount: -89.99,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/buzz-marketing-group.jpg",
      name: "Buzz Marketing Group",
      category: "General",
      date: "2024-07-26",
      amount: 3358.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/technova-innovations.jpg",
      name: "TechNova Innovations",
      category: "Shopping",
      date: "2024-07-25",
      amount: -29.99,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/bytewise.jpg",
      name: "ByteWise",
      category: "Lifestyle",
      date: "2024-07-23",
      amount: -49.99,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/nimbus-data-storage.jpg",
      name: "Nimbus Data Storage",
      category: "Bills",
      date: "2024-07-21",
      amount: -9.99,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/emma-richardson.jpg",
      name: "Emma Richardson",
      category: "General",
      date: "2024-07-20",
      amount: -25.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/daniel-carter.jpg",
      name: "Daniel Carter",
      category: "General",
      date: "2024-07-19",
      amount: 50.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/sun-park.jpg",
      name: "Sun Park",
      category: "General",
      date: "2024-07-18",
      amount: -38.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/harper-edwards.jpg",
      name: "Harper Edwards",
      category: "Shopping",
      date: "2024-07-17",
      amount: -29.99,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/liam-hughes.jpg",
      name: "Liam Hughes",
      category: "Groceries",
      date: "2024-07-16",
      amount: -52.75,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/lily-ramirez.jpg",
      name: "Lily Ramirez",
      category: "General",
      date: "2024-07-15",
      amount: 75.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/ethan-clark.jpg",
      name: "Ethan Clark",
      category: "Dining Out",
      date: "2024-07-14",
      amount: -41.25,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/rina-sato.jpg",
      name: "Rina Sato",
      category: "Entertainment",
      date: "2024-07-13",
      amount: -10.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/james-thompson.jpg",
      name: "James Thompson",
      category: "Bills",
      date: "2024-07-12",
      amount: -95.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/ella-phillips.jpg",
      name: "Ella Phillips",
      category: "Dining Out",
      date: "2024-07-11",
      amount: -33.75,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/yuna-kim.jpg",
      name: "Yuna Kim",
      category: "Dining Out",
      date: "2024-07-10",
      amount: -27.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/sofia-peterson.jpg",
      name: "Sofia Peterson",
      category: "Transportation",
      date: "2024-07-09",
      amount: -12.5,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/mason-martinez.jpg",
      name: "Mason Martinez",
      category: "Lifestyle",
      date: "2024-07-08",
      amount: -65.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/sebastian-cook.jpg",
      name: "Sebastian Cook",
      category: "Transportation",
      date: "2024-07-07",
      amount: -20.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/william-harris.jpg",
      name: "William Harris",
      category: "General",
      date: "2024-07-06",
      amount: 20.0,
      recurring: false,
    },
    {
      avatar: "./assets/images/avatars/elevate-education.jpg",
      name: "Elevate Education",
      category: "Education",
      date: "2024-07-05",
      amount: -50.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/serenity-spa-and-wellness.jpg",
      name: "Serenity Spa & Wellness",
      category: "Personal Care",
      date: "2024-07-03",
      amount: -30.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/spark-electric-solutions.jpg",
      name: "Spark Electric Solutions",
      category: "Bills",
      date: "2024-07-02",
      amount: -100.0,
      recurring: true,
    },
    {
      avatar: "./assets/images/avatars/swift-ride-share.jpg",
      name: "Swift Ride Share",
      category: "Transportation",
      date: "2024-07-02",
      amount: -16.5,
      recurring: false,
    },
  ],
  budgets: [
    {
      id: 1,
      category: "Entretenimento",
      maximum: 50.0,
      theme: "#277C78",
    },
    {
      id: 2,
      category: "Contas",
      maximum: 750.0,
      theme: "#82C9D7",
    },
    {
      id: 3,
      category: "Jantar fora",
      maximum: 75.0,
      theme: "#F2CDAC",
    },
    {
      id: 4,
      category: "Cuidados pessoais",
      maximum: 100.0,
      theme: "#626070",
    },
  ],
  pots: [
    {
      name: "Savings",
      target: 2000.0,
      total: 159.0,
      theme: "#277C78",
    },
    {
      name: "Ticket",
      target: 150.0,
      total: 110.0,
      theme: "#626070",
    },
    {
      name: "Gift",
      target: 150.0,
      total: 110.0,
      theme: "#82C9D7",
    },
    {
      name: "Laptop",
      target: 1000.0,
      total: 10.0,
      theme: "#F2CDAC",
    },
    {
      name: "Holiday",
      target: 1440.0,
      total: 531.0,
      theme: "#826CB0",
    },
  ],
};
