import { People } from "./People";

export type Order = {
  id?: number | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  people?: People[] | null;
  total?: number | null
  price_per_people?: number | null
};

export const initOrder: Order = {
  name: null,
  price: null,
  quantity: null
};