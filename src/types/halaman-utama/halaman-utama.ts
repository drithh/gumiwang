import type { Slide } from "..";

export type HalamanUtama = {
  _id: string;
  email: string;
  noTelepon: string;
  alamat: string;
  slides: Slide[];
};
