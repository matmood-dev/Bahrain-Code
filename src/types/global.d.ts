// src/types/global.d.ts
import { TFunction } from "i18next";

declare global {
  type TProp = { t: TFunction };
}
