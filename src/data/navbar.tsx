import Home from "@/../public/iconsPixels/Building-Real-Eastate-House-Streamline-Pixel.svg";
import Transferencias from "@/../public/iconsPixels/Interface-Essential-Navigation-Left-Circle-1--Streamline-Pixel.svg";
import Orcamentos from "@/../public/iconsPixels/Business-Products-Data-File-Bars--Streamline-Pixel.svg";
import Publicar from "@/../public/iconsPixels/Shopping-Shipping-Receipt-Slip--Streamline-Pixel.svg";
import Faturas from "@/../public/iconsPixels/Money-Payments-Accounting-Calculator--Streamline-Pixel.svg";
import HomeActive from "@/../public/iconsPixels/Building-Real-Eastate-House-1--Streamline-Pixel.svg";
import TransferenciasActive from "@/../public/iconsPixels/Interface-Essential-Navigation-Left-Circle-Streamline-Pixel.svg";
import OrcamentosActive from "@/../public/iconsPixels/Business-Products-Data-File-Bars-Streamline-Pixel.svg";
import PublicarActive from "@/../public/iconsPixels/Shopping-Shipping-Receipt-Slip-Streamline-Pixel.svg";
import FaturasActive from "@/../public/iconsPixels/Money-Payments-Accounting-Calculator-Streamline-Pixel.svg";

import { NavItem } from "../types/navType";

export const listNav: NavItem[] = [
  { icon: Home, iconActive: HomeActive, label: "Home", href: "/" },
  {
    icon: Transferencias,
    iconActive: TransferenciasActive,
    label: "Transfe",
    href: "/Transactions",
  },
  {
    icon: Orcamentos,
    iconActive: OrcamentosActive,
    label: "Orçamento",
    href: "/Orcamento",
  },
  {
    icon: Publicar,
    iconActive: PublicarActive,
    label: "Publicar",
    href: "/publicar",
  },
  {
    icon: Faturas,
    iconActive: FaturasActive,
    label: "Faturas",
    href: "/faturas",
  },
];
