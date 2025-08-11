import {
  Code2,
  Smartphone,
  Cloud,
  PenTool,
  ShoppingCart,
  Wrench,
  Lock,
  Database,
  Megaphone,
  Globe,
} from "lucide-react";
import type { ReactNode } from "react";

export type ServiceKey =
  | "web"
  | "mobile"
  | "cloud"
  | "uiux"
  | "ecommerce"
  | "customApps"
  | "security"
  | "data"
  | "marketing"
  | "seo";

export interface ServiceItem {
  key: ServiceKey;
  icon: ReactNode;
}

export const services: ServiceItem[] = [
  { key: "web",        icon: <Code2 /> },
  { key: "mobile",     icon: <Smartphone /> },
  { key: "cloud",      icon: <Cloud /> },
  { key: "uiux",       icon: <PenTool /> },
  { key: "ecommerce",  icon: <ShoppingCart /> },
  { key: "customApps", icon: <Wrench /> },
  { key: "security",   icon: <Lock /> },
  { key: "data",       icon: <Database /> },
  { key: "marketing",  icon: <Megaphone /> },
  { key: "seo",        icon: <Globe /> },
];
