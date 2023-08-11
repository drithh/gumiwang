import Image from "next/image";
import { PerangkatDesa } from "~/types";

interface PerangkatDesaProps {
  data: PerangkatDesa;
}

export default function PerangkatDesaComponent(props: PerangkatDesaProps) {
  const { data } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={data.foto}
          alt={data.alt}
          className="h-32 w-32 rounded-full"
        />
        <div className="mt-2 flex flex-col items-center justify-center">
          <div className="text-lg font-semibold">{data.nama}</div>
          <div className="text-sm text-gray-500">{data.jabatan}</div>
        </div>
      </div>
    </div>
  );
}
