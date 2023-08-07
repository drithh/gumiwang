import Image from 'next/image';
import { getHalamanUtama } from '@/src/sanity/sanity-utils';
import Carousel from '~/components/Carousel';

export default async function Home() {
  const halamanUtama = await getHalamanUtama();
  return (
    <div>
      <Carousel slides={halamanUtama.slides} />
    </div>
  );
}
