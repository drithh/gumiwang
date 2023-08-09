import Image from "next/image";
import { getHalamanUtama } from "@/src/sanity/sanity-utils";
import Carousel from "~/components/carousel";

export default async function Home() {
  const halamanUtama = await getHalamanUtama();
  return (
    <div className="bg-background">
      <Carousel slides={halamanUtama.slides} />

      <main className="mx-auto mt-8 max-w-5xl px-4 xl:px-0">
        {/* profil desa */}
        <div className="mx-auto flex flex-col items-center gap-2 sm:flex-row">
          <div className="xl:px-8">
            <div className="relative h-32 w-32 md:h-48 md:w-48">
              <Image
                src="/images/logo.png"
                fill
                alt="logo desa gumiwang lor"
              ></Image>
            </div>
          </div>
          <div className="flex flex-1 flex-col place-items-center gap-4 sm:items-start">
            <h1 className="text-justify text-xl font-bold text-foreground md:text-4xl">
              Profil Desa Gumiwang Lor
            </h1>
            <p className="text-center text-sm text-muted-foreground sm:text-justify md:text-lg">
              Situs Resmi Desa Gumiwang Lor di Kecamatan Wuryantoro, Kabupaten
              Wonogiri, merupakan sumber transparan informasi dari Pemerintah
              Desa untuk masyarakat Indonesia. Platform ini menghubungkan,
              berbagi, dan meningkatkan keterlibatan dalam berbagai aspek
              kehidupan desa. Kami berfokus pada sinergi pemerintah dan
              masyarakat demi kemajuan berkelanjutan.
            </p>
          </div>
        </div>

        {/* statistik desa */}

        {/* artikel */}
      </main>
    </div>
  );
}
