import Image from 'next/image';
import { getHalamanUtama } from '@/src/sanity/sanity-utils';
// import Carousel from '~/components/carousel';
import Card from '~/components/card';

export default async function Home() {
  const halamanUtama = await getHalamanUtama();
  return (
    <div>
      <Card slides={halamanUtama.slides} />
      {/* <Carousel slides={halamanUtama.slides} /> */}
    </div>
  );
}
