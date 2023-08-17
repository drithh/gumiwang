import { Dana } from "..";

export type Bidang = {
  nama: string;
  totalAnggaran?: number;
  totalRealisasi?: number;
  kegiatan: Dana[];
};
