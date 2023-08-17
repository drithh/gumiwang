import { Dana, Bidang } from "..";

export type Apbdes = {
  _id: string;
  _updatedAt: string;
  tahunAnggaran: number;
  pendanaan: Dana[];
  pembiayaan: Dana[];
  belanjaKegiatan: Bidang[];
  belanjaDesa?: Dana[];
};
