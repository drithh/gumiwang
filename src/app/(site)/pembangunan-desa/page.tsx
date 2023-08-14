import { getPembangunanDesa } from "~/sanity/sanity-utils";
import Carousel from "~/components/carousel-pembangunan-desa";
import { Progress } from "~/components/ui/progress";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";
import { formatter } from "~/lib/utils";
dayjs.extend(relativeTime);
dayjs.locale("id");

export default async function PembangunanDesaPage() {
  const pembangunanDesa = await getPembangunanDesa();
  return (
    <main className="mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-4 md:mt-24 xl:px-0">
      <h1 className="text-center text-4xl font-bold text-foreground">
        Pembangunan Desa Gumiwang Lor
      </h1>
      {pembangunanDesa.map((item) => (
        <div
          key={item._id}
          className="flex flex-col place-content-center place-items-center gap-2  rounded-xl bg-accent p-4 md:flex-row"
        >
          <div className="flex h-[15rem] w-[20rem] place-content-center place-items-center overflow-hidden rounded-xl">
            {item?.gambarProyek ? (
              <Carousel slides={item.gambarProyek} />
            ) : (
              // no image
              <div className="relative flex h-full w-full place-content-center place-items-center  bg-primary p-8 text-center text-3xl font-bold text-accent-foreground">
                Tidak Ada Gambar
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col place-content-between gap-y-3 p-3 md:p-4 ">
            <div className="">
              <h1 className="text-2xl font-semibold">{item.nama}</h1>
              <p className="mt-4 text-muted-foreground">{item.deskripsi}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-semibold">Lokasi</p>
              <p className="text-muted-foreground">{item.lokasi}</p>
              <p className="font-semibold">Dana</p>
              <p className="text-muted-foreground">
                {formatter.format(item.dana)}
              </p>
            </div>
            <Progress value={item.progress} />
            <div className="">
              {/* terakhir diupdate */}
              <p className="mt-4 text-center text-muted-foreground md:text-left">
                Terakhir diperbarui{" "}
                {dayjs(item._updatedAt ?? item._createdAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
