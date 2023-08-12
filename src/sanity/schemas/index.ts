import slideSchema from "./documents/slide";
import dusunSchema from "./documents/dusun";
import halamanUtamaSchema from "./singletons/halaman-utama";
import halamanProfil from "./singletons/halaman-profil";
import pembangunanDesaSchema from "./documents/pembangunan-desa";
import wargaSchema from "./objects/warga";
import perangkatDesa from "./documents/perangkat-desa";
export const schemaTypes = [
  slideSchema,
  dusunSchema,
  halamanUtamaSchema,
  wargaSchema,
  pembangunanDesaSchema,
  perangkatDesa,
  halamanProfil,
];
