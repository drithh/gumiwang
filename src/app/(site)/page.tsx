import Image from "next/image";
import {
  getHalamanUtama,
  getPembangunanDesa,
  getStatistikDesa,
} from "@/src/sanity/sanity-utils";
import CarouselSlide from "~/components/carousel-home";
import CarouselPembangunan from "~/components/carousel-pembangunan-desa";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Progress } from "~/components/ui/progress";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const halamanUtama = await getHalamanUtama();
  const statistikDesa = await getStatistikDesa();
  const pembangunanDesa = await getPembangunanDesa();
  return (
    <div className="bg-background">
      <CarouselSlide slides={halamanUtama.slides} />

      <main className="mx-auto mt-12 flex max-w-5xl flex-col gap-20 px-4 md:mt-24 xl:px-0">
        {/* profil desa */}
        <div className="mx-auto flex flex-col items-center gap-2 sm:flex-row">
          <div className="xl:px-8">
            <div className="relative h-32 w-32 px-4 py-2 md:h-48 md:w-48">
              <AspectRatio ratio={8 / 10}>
                <Image
                  src="/images/wonogiri.png"
                  fill
                  sizes="100%"
                  alt="logo desa gumiwang lor"
                ></Image>
              </AspectRatio>
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

        {/* pembangunan desa */}
        <div className="">
          <h1 className="text-center text-xl font-bold text-foreground md:text-4xl">
            Pembangunan Desa
          </h1>
          <p className="text-center text-sm text-muted-foreground md:text-lg">
            Data Pembangunan Desa Gumiwang Lor
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pembangunanDesa.map((pembangunan) => (
              <div
                key={pembangunan._id}
                className="flex h-full flex-1 flex-col place-content-between  gap-3 rounded-md border
                border-border bg-secondary p-4 shadow-md"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex w-full place-content-center place-items-center overflow-hidden rounded-xl">
                    <AspectRatio ratio={4 / 3}>
                      {pembangunan?.gambarProyek ? (
                        <CarouselPembangunan
                          slides={pembangunan.gambarProyek}
                        />
                      ) : (
                        // no image
                        <div className="relative flex h-full w-full place-content-center place-items-center  bg-primary p-8 text-center text-xl font-bold text-accent-foreground sm:text-3xl">
                          Tidak Ada Gambar
                        </div>
                      )}
                    </AspectRatio>
                  </div>
                  <p className=" text-center text-sm text-foreground md:text-base">
                    {pembangunan.nama}
                  </p>
                </div>
                <Progress value={pembangunan.progress} />
              </div>
            ))}
          </div>
          {/* lihat semua */}
          <div className="flex place-content-center">
            <Button
              variant={"link"}
              size={"lg"}
              className="mt-8 text-sm sm:text-lg"
            >
              <Link href="/pembangunan-desa">Lihat Semua Pembangunan</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export const revalidate = 60;
