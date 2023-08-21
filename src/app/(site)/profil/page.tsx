import Image from "next/image";
import React from "react";
import { getHalamanProfil, getPerangkatDesa } from "~/sanity/sanity-utils";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import { env } from "~/env.mjs";

export default async function Profil() {
  const halamanProfil = await getHalamanProfil();
  const perangkatDesa = await getPerangkatDesa();
  return (
    <main className="mx-auto mt-12 flex max-w-5xl flex-col gap-20 px-4 md:mt-24 xl:px-0">
      <div className="mx-auto flex flex-col items-center gap-2 sm:flex-row">
        <div className="xl:px-8">
          <div className="relative h-32 w-32 md:h-48 md:w-48">
            <Image
              src="/images/logo.png"
              fill
              alt="logo desa gumiwang lor"
              sizes="100%"
            ></Image>
          </div>
        </div>
        <div className="flex flex-1 flex-col place-items-center gap-4 sm:items-start">
          <h1 className="text-justify text-2xl font-bold text-foreground md:text-4xl">
            Desa Gumiwang Lor
          </h1>
          <p className="text-center text-sm text-muted-foreground sm:text-justify md:text-lg">
            {halamanProfil.deskripsiDesa}
          </p>
        </div>
      </div>

      {/* Lokasi Gumiwanglor */}
      <div className="flex flex-col gap-6 rounded-xl border  bg-accent p-6 shadow-md sm:flex-row">
        <div className="flex  flex-1 flex-col items-center justify-evenly gap-4 sm:items-start">
          <h1 className="text-center text-2xl font-bold text-foreground sm:text-start md:text-3xl">
            Geografis Desa Gumiwang Lor
          </h1>
          <p className="text-center text-sm text-muted-foreground sm:text-justify md:text-lg">
            {halamanProfil.geografisDesa}
          </p>
        </div>
        <div className="flex-2 h-[26rem] sm:flex-1">
          <iframe
            src={halamanProfil.linkGoogleMaps}
            className="h-full w-full  rounded-xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Struktur Organisasi */}
      <div className="flex flex-col gap-6 rounded-xl p-6  ">
        <h1 className="w-full text-center text-2xl font-bold text-foreground md:text-3xl">
          Struktur Organisasi
        </h1>
        <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
          {perangkatDesa.map((perangkat) => (
            <div
              key={perangkat._id}
              className={cn(
                " flex h-32 content-center rounded-xl bg-accent p-4 shadow-md",
                perangkat.prioritas === 1 && "md:col-span-2 ",
              )}
            >
              <div className="flex w-full flex-row place-content-center place-items-center gap-5">
                <Avatar className="h-16 w-16 md:h-24 md:w-24">
                  <AvatarImage src={perangkat.foto} />
                  <AvatarFallback className="bg-background text-foreground">
                    {perangkat.nama.length > 2
                      ? perangkat.nama.substring(0, 2).toUpperCase()
                      : "US"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col place-content-between">
                  <h1 className=" text-xl font-bold text-foreground">
                    {perangkat.nama}
                  </h1>
                  <div className="flex justify-between">
                    <p className="  text-sm text-muted-foreground">
                      {perangkat.jabatan}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="  text-sm text-muted-foreground">
                      {perangkat.alamat}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const revalidate = 60;
