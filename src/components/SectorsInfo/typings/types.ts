import { Sector } from "../../../typings/types";

export type InfoCard = Sector & OpenCard

export type OpenCard = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export type RoleType = {
  role: string
}