import { House } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { ChartArea } from "lucide-react";
import { Wallet } from "lucide-react";
import { Receipt } from "lucide-react";

export const listNav = [
  { icon: House, label: "Home", path: "/dashboard/overview" },
  {
    icon: ArrowLeftRight,
    label: "Transferencias",
    path: "/dashboard/transactions",
  },
  { icon: ChartArea, label: "Orçamento", path: "/dashboard/budgets" },
  { icon: Wallet, label: "Publicar", path: "/dashboard/post" },
  { icon: Receipt, label: "Faturas", path: "/dashboard/recurring-bills" },
];
