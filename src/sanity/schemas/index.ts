import slideSchema from "./documents/slide";
import dusunSchema from "./documents/dusun";
import halamanUtamaSchema from "./singletons/halaman-utama";
import halamanProfil from "./singletons/halaman-profil";
import pembangunanDesaSchema from "./documents/pembangunan-desa";
import wargaSchema from "./objects/warga";
import perangkatDesa from "./documents/perangkat-desa";
import bidang from "./objects/bidang";
import kegiatan from "./objects/dana";
import halamanApbdes from "./singletons/halaman-apbdes";
export const schemaTypes = [
  slideSchema,
  dusunSchema,
  bidang,
  kegiatan,
  halamanUtamaSchema,
  halamanApbdes,
  wargaSchema,
  pembangunanDesaSchema,
  perangkatDesa,
  halamanProfil,
];
