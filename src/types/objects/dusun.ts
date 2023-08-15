import { Warga } from "./warga";

export type Dusun = {
  _id: string;
  nama: string;
  namaKepalaDusun: string;
  jumlahWarga: Warga;
  jumlahWargaUsiaSekolah: Warga;
  jumlahWargaBalita: Warga;
  jumlahWargaLansia: Warga;
};
