import Image from "next/image";
import { getHalamanUtama, getStatistikDesa } from "@/src/sanity/sanity-utils";
import Carousel from "~/components/carousel";

export default async function Home() {
  const halamanUtama = await getHalamanUtama();
  const statistikDesa = await getStatistikDesa();
  return (
    <div className="bg-background">
      <Carousel slides={halamanUtama.slides} />

      <main className="mx-auto mt-24 flex max-w-5xl flex-col gap-20 px-4 xl:px-0">
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
              Website Desa Gumiwang Lor
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
        <div className="">
          <h1 className="text-center text-xl font-bold text-foreground md:text-4xl">
            Statistik Desa
          </h1>
          <p className="text-center text-sm text-muted-foreground md:text-lg">
            Data Statistik Desa Gumiwang Lor
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="flex h-full flex-1 flex-col place-content-evenly  gap-2 rounded-md border
              border-border p-4 shadow-md"
            >
              <h1 className="text-center text-2xl font-bold text-foreground md:text-4xl">
                {statistikDesa.length}
              </h1>
              <p className="text-center text-sm text-muted-foreground md:text-lg">
                Jumlah Dusun
              </p>
            </div>
            <div
              className="flex h-full flex-1 flex-col place-content-evenly  gap-2 rounded-md border
              border-border p-4 shadow-md"
            >
              <h1 className="text-center text-2xl font-bold text-foreground md:text-4xl">
                {statistikDesa.reduce((acc, cur) => acc + cur.warga, 0)}
              </h1>
              <p className="text-center text-sm text-muted-foreground md:text-lg">
                Jumlah Warga
              </p>
            </div>
            <div
              className="flex h-full flex-1 flex-col place-content-evenly gap-2 rounded-md border
              border-border p-4 shadow-md"
            >
              <h1 className="text-center text-2xl font-bold text-foreground md:text-4xl">
                {statistikDesa.reduce(
                  (acc, cur) => acc + cur.balitaDanSekolah,
                  0,
                )}
              </h1>
              <p className="text-center text-sm text-muted-foreground md:text-lg">
                Jumlah Balita & Usia Sekolah
              </p>
            </div>
            <div
              className="flex h-full flex-1 flex-col place-content-evenly  gap-2 rounded-md border
              border-border p-4 shadow-md"
            >
              <h1 className="text-center text-2xl font-bold text-foreground md:text-4xl">
                {statistikDesa.reduce((acc, cur) => acc + cur.lansia, 0)}
              </h1>
              <p className="text-center text-sm text-muted-foreground md:text-lg">
                Jumlah Lanjut Usia
              </p>
            </div>
          </div>
        </div>

        {/* artikel */}
      </main>
    </div>
  );
}
