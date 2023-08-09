import { Warga } from './warga';

export type Dusun = {
  _id: string;
  nama: string;
  namaKepalaDusun: string;
  namaKetuaRW: string;
  namaKetuaRT: string;
  namaKetuaKarangTaruna: string;
  jumlahWarga: Warga;
  jumlahWargaUsiaSekolah: Warga;
  jumlahWargaBalita: Warga;
  jumlahWargaLansia: Warga;
};
