import BarChartDusun from "~/components/demografi/bar-chart-dusun";
import PieChartDusun from "~/components/demografi/pie-chart-dusun";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "~/components/ui/table";
import { getDataDusun } from "~/sanity/sanity-utils";
import { columns } from "~/components/demografi/columns";
import { DataTable } from "~/components/demografi/data-table";
import { env } from "~/env.mjs";
export default async function DemografiPage() {
  const dataDusun = await getDataDusun();

  // reduce jumlah warga from rest of warga
  const dataDusunReduced = dataDusun.map((dusun) => {
    const jumlahWargaLakiLaki =
      dusun.jumlahWarga?.lakiLaki -
      dusun.jumlahWargaBalita?.lakiLaki -
      dusun.jumlahWargaUsiaSekolah?.lakiLaki -
      dusun.jumlahWargaLansia?.lakiLaki;
    const jumlahWargaPerempuan =
      dusun.jumlahWarga?.perempuan -
      dusun.jumlahWargaBalita?.perempuan -
      dusun.jumlahWargaUsiaSekolah?.perempuan -
      dusun.jumlahWargaLansia?.perempuan;

    return {
      ...dusun,
      jumlahWarga: {
        lakiLaki: jumlahWargaLakiLaki || 0,
        perempuan: jumlahWargaPerempuan || 0,
      },
    };
  });

  return (
    <main className="mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-4 md:mt-24 xl:px-0">
      <h1 className="text-center text-4xl font-bold text-foreground">
        Demografi Desa Gumiwang Lor
      </h1>
      <div className="flex flex-col place-content-center place-items-center gap-4 rounded-xl bg-secondary p-4 shadow-md">
        <h2 className="text-center text-base font-bold text-foreground sm:text-xl md:text-2xl">
          Jumlah penduduk desa Gumiwang Lor berdasarkan usia
        </h2>
        <div className="h-[26rem] w-full sm:w-[26rem]">
          <PieChartDusun data={dataDusun} />
        </div>
      </div>
      <div className="flex flex-col place-content-center place-items-center gap-4 rounded-xl bg-secondary p-4 shadow-md">
        <h2 className="text-center text-base font-bold text-foreground sm:text-xl md:text-2xl">
          Jumlah penduduk desa Gumiwang Lor tiap dusun
        </h2>
        <div className="h-[26rem] w-full sm:w-[26rem]">
          <BarChartDusun data={dataDusun} />
        </div>
      </div>
      <div className="hidden sm:block">
        <h2 className="my-4 text-center text-base font-bold text-foreground sm:text-xl md:text-2xl">
          Tabel Jumlah penduduk desa Gumiwang Lor tiap dusun
        </h2>
        <DataTable columns={columns} data={dataDusunReduced} />
      </div>
      <div className="block sm:hidden">
        <h2 className="my-4 text-center text-base font-bold text-foreground sm:text-xl md:text-2xl">
          Jumlah penduduk desa Gumiwang Lor tiap dusun
        </h2>
        <div className="flex flex-col gap-3">
          {dataDusunReduced.map((dusun) => (
            <div
              className="flex flex-col place-content-center place-items-center gap-1 rounded-xl bg-secondary p-4 shadow-md"
              key={dusun._id}
            >
              <h3 className="text-center text-base font-bold text-foreground sm:text-xl md:text-2xl">
                {dusun.nama}
              </h3>
              <p className="text-center text-base  text-foreground sm:text-xl md:text-2xl">
                {dusun.namaKepalaDusun}
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usia</TableHead>
                    <TableHead>Laki-laki</TableHead>
                    <TableHead>Perempuan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Dewasa</TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWarga.perempuan}
                    </TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWarga.lakiLaki}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Balita</TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWargaBalita?.lakiLaki}
                    </TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWargaBalita?.perempuan}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Usia Sekolah</TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWargaUsiaSekolah?.lakiLaki}
                    </TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWargaUsiaSekolah?.perempuan}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lansia</TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWargaLansia?.lakiLaki}
                    </TableCell>
                    <TableCell className="font-medium">
                      {dusun.jumlahWargaLansia?.perempuan}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const revalidate = env.REVALIDATE;
