export type GambarProyek = {
  _id: string;
  alt: string;
  gambar: string;
};

export type PembangunanDesa = {
  nama: string;
  lokasi: string;
  progress: number;
  _id: string;
  deskripsi: string;
  _updatedAt: string;
  _createdAt: string;
  dana: number;
  gambarProyek: GambarProyek[];
};
