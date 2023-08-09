import { createClient } from "next-sanity";
import { env } from "~/env.mjs";
import { HalamanUtama, StatistikDusun } from "~/types";

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-08-01",
  useCdn: false,
});

export async function getHalamanUtama(): Promise<HalamanUtama> {
  const halamanUtama = await client.fetch(`*[_type == "halaman-utama"]{
    _id, overview, "slides": tampilanSlide[]-> {
      _id,
      judul,
      deskripsi,
      "gambar": gambar.asset->url,
      "alt": gambar.alt
    }
  }[0]`);
  return halamanUtama;
}

export async function getStatistikDesa(): Promise<StatistikDusun[]> {
  const statistikDesa = await client.fetch(`*[_type == "dusun"] {
    _id, "warga": math::sum([jumlahWarga.lakiLaki, jumlahWarga.perempuan]), "balitaDanSekolah": math::sum([jumlahWargaBalita.lakiLaki, jumlahWargaBalita.perempuan, jumlahWargaUsiaSekolah.lakiLaki, jumlahWargaUsiaSekolah.perempuan]), "lansia": math::sum([jumlahWargaLansia.lakiLaki, jumlahWargaLansia.perempuan])
 }`);
  return statistikDesa;
}
