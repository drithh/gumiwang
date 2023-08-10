import Image from "next/image";
export default function Profil() {
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
          <h1 className="text-justify text-xl font-bold text-foreground md:text-4xl">
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
    </main>
  );
}
