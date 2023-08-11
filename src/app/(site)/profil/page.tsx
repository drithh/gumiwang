import Image from "next/image";
import React from "react";
import GoogleMapReact from "google-map-react";
import { getPerangkatDesa } from "~/sanity/sanity-utils";
interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";

export default async function Profil() {
  const perangkatDesa = await getPerangkatDesa();
  return (
    <main className="mx-auto mt-24 flex max-w-5xl flex-col gap-20 px-4 xl:px-0">
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
          <h1 className="text-justify text-2xl font-bold text-foreground md:text-4xl">
            Desa Gumiwang Lor
          </h1>
          <p className="text-center text-sm text-muted-foreground sm:text-justify md:text-lg">
            Desa Gumiwang Lor adalah desa di kecamatan Wuryantoro, Kabupaten
            Wonogiri, Jawa Tengah, Indonesia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur similique veritatis quae
            temporibus laboriosam, blanditiis reiciendis itaque eius, fuga
            sapiente repellat debitis! Ipsam sed similique dolorem dolores fugit
            eaque harum facilis saepe, molestias libero? Architecto animi
            nesciunt obcaecati fugit deleniti.
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
            Desa Gumiwang Lor terletak lebih kurang 12 km ke arah selatan dari
            pusat Kota Wonogiri, Gumiwang Lor menjauh sekitar 6 km dari pusat
            kecamatan Wuryantoro. Dengan kata lain, Gumiwang Lor membanggakan
            diri sebagai kelurahan terjauh yang menghiasi sebelah utara
            kecamatan Wuryantoro. Wilayahnya yang luas merentang hingga 1826
            hektar. Sementara itu, batas-batas wilayahnya dengan lembut
            terhampar: Di sebelah barat, bertetangga dengan Kecamatan
            Wuryantoro; di utara, menghadap Kecamatan Wonogiri; sedangkan di
            timur, berdekatan dengan Kecamatan Wonogiri, dan di selatan,
            berbatasan dengan Waduk Gajah Mungkur.
          </p>
        </div>
        <div className="flex-2 h-[26rem] sm:flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44538.61971527043!2d110.87281310376504!3d-7.8674049007549325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3214307a2efd%3A0x5027a76e3569ed0!2sGumiwang%20Lor%2C%20Wuryantoro%2C%20Wonogiri%20Regency%2C%20Central%20Java!5e1!3m2!1sen!2sid!4v1691664575378!5m2!1sen!2sid"
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
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
          {perangkatDesa.map((perangkat) => (
            <div
              key={perangkat._id}
              className={cn(
                " rounded-xl bg-accent p-4 shadow-md",
                perangkat.prioritas === 1 && "col-span-2 ",
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
                    <p className=" text-sm text-muted-foreground">Jabatan:</p>
                    <p className="  text-sm text-muted-foreground">
                      {perangkat.jabatan}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className=" text-sm text-muted-foreground">Alamat:</p>
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
