import { createClient } from 'next-sanity';
import { env } from '~/env.mjs';
import { HalamanUtama } from '~/types';

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-08-01',
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
