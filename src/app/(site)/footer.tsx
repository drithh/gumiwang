import { MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "~/components/ui/aspect-ratio";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto mt-12 max-w-5xl">
        <div className=" flex  flex-col place-content-center place-items-center gap-x-20 gap-y-4 px-4 py-8 sm:flex-row sm:place-content-between sm:place-items-start md:mt-24 xl:px-0">
          <div className="w-32">
            <AspectRatio ratio={1}>
              <Image
                src="/images/logo.png"
                fill
                alt="logo desa gumiwang lor"
                sizes="100%"
              ></Image>
            </AspectRatio>
          </div>
          {/* navigation */}
          <div className="flex flex-col gap-x-12 gap-y-8 sm:flex-row">
            <div className="flex flex-1 flex-col place-items-center gap-4 text-center opacity-50 sm:items-start sm:text-left">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm font-light text-foreground hover:underline"
                >
                  Beranda
                </Link>
                <Link
                  href="/profil"
                  className="text-sm font-light text-foreground hover:underline"
                >
                  Profil
                </Link>
                <Link
                  href="/pembangunan-desa"
                  className="text-sm font-light text-foreground hover:underline"
                >
                  Pembangunan Desa
                </Link>
                <Link
                  href="/dana-desa"
                  className="text-sm font-light text-foreground hover:underline"
                >
                  Dana Desa
                </Link>
                <Link
                  href="/demografi"
                  className="text-sm font-light text-foreground hover:underline"
                >
                  Demografi
                </Link>
              </div>
            </div>

            {/* contact */}
            <div className="flex flex-1 flex-col place-items-center gap-4 opacity-50 sm:items-start">
              <div className="grid grid-cols-[2rem_20rem]  items-center  gap-y-4 ">
                <MapPin className="h-4 w-4 text-foreground" />
                <p className="text-sm font-light text-foreground">
                  Desa Gumiwang Lor, Kecamatan Wuryantoro, Kabupaten Wonogiri,
                  Jawa Tengah
                </p>
                <Send className="h-4 w-4 text-foreground" />
                <p className="text-sm font-light text-foreground">
                  gumiwanglor@gmail.com
                </p>
                <Phone className="h-4 w-4 text-foreground" />
                <p className="text-sm font-light text-foreground">
                  0812-3456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="mt-4 flex flex-col place-content-center place-items-center text-xs opacity-50">
          <p className=" font-light text-foreground">
            © 2021 Desa Gumiwang Lor
          </p>
          <p className=" font-light text-foreground">
            Dibuat dengan ❤️ oleh{" "}
            <Link href="https://github.com/drithh" className="hover:underline">
              drithh
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
