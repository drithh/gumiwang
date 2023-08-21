import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { env } from "~/env.mjs";
import { getApbdes } from "~/sanity/sanity-utils";
import { Bidang, Dana } from "~/types";

export default async function DanaDesaPage() {
  const apbdes = await getApbdes();

  // iterate over kegiatan to get total
  const belanjaKegiatanWithTotal = apbdes.belanjaKegiatan.map((kegiatan) => {
    const totalAnggaran = kegiatan.kegiatan.reduce(
      (acc, curr) => acc + curr.anggaran,
      0,
    );

    const totalRealisasi = kegiatan.kegiatan.reduce(
      (acc, curr) => acc + (curr?.realisasi ?? 0),
      0,
    );

    return {
      ...kegiatan,
      totalAnggaran,
      totalRealisasi,
    } as Bidang;
  });

  const belanjaDesaFromKegiatan = belanjaKegiatanWithTotal.map((kegiatan) => {
    return {
      nama: kegiatan.nama,
      anggaran: kegiatan.totalAnggaran,
      realisasi: kegiatan.totalRealisasi,
    };
  }) as Dana[];

  const apbdesBelanja = apbdes?.belanjaDesa || [];

  const combinedBelanja = [...apbdesBelanja, ...belanjaDesaFromKegiatan];

  const apbdesWithTotal = {
    ...apbdes,
    belanjaKegiatan: belanjaKegiatanWithTotal,
  };

  const getCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const getSlipa = (anggaran: number, realisasi: number | undefined) => {
    if (!realisasi) {
      return 0;
    }
    return anggaran - realisasi;
  };

  return (
    <main className="mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-4 md:mt-24 xl:px-0">
      <h1 className="text-center text-4xl font-bold text-foreground">
        Anggaran Pendapatan Dan Belanja Desa {apbdes.tahunAnggaran}
      </h1>
      <div className="flex flex-col gap-16">
        <div className="">
          <h2 className="w-full text-center text-xl font-bold uppercase text-accent-foreground   md:text-left">
            Pendapatan Desa
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kegiatan</TableHead>
                <TableHead className="w-52">Anggaran</TableHead>
                <TableHead className="w-52">Realisasi</TableHead>
                <TableHead className="w-32">Silpa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apbdesWithTotal.pendanaan.map((pendanaan, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {pendanaan.nama}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(pendanaan.anggaran)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(pendanaan?.realisasi ?? 0)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(
                      getSlipa(pendanaan.anggaran, pendanaan?.realisasi),
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="">
          <h2 className="w-full text-center text-xl font-bold uppercase text-accent-foreground  md:text-left">
            Belanja Desa
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kegiatan</TableHead>
                <TableHead className="w-52">Anggaran</TableHead>
                <TableHead className="w-52">Realisasi</TableHead>
                <TableHead className="w-32">Silpa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {combinedBelanja.map((bidang, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{bidang.nama}</TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(bidang?.anggaran ?? 0)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(bidang?.realisasi ?? 0)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(
                      getSlipa(bidang.anggaran ?? 0, bidang?.realisasi),
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="">
          <h2 className="w-full text-center text-xl font-bold uppercase text-accent-foreground  md:text-left">
            Pembiayaan Desa
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kegiatan</TableHead>
                <TableHead className="w-52">Anggaran</TableHead>
                <TableHead className="w-52">Realisasi</TableHead>
                <TableHead className="w-32">Silpa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apbdesWithTotal.pembiayaan.map((dana, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{dana.nama}</TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(dana.anggaran ?? 0)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(dana.realisasi ?? 0)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {getCurrency(getSlipa(dana.anggaran ?? 0, dana?.realisasi))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="">
          <h2 className="w-full text-center text-xl font-bold uppercase text-accent-foreground  md:text-left">
            Belanja Kegiatan
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kegiatan</TableHead>
                <TableHead className="w-52">Anggaran</TableHead>
                <TableHead className="w-52">Realisasi</TableHead>
                <TableHead className="w-32">Silpa</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {apbdesWithTotal.belanjaKegiatan.map((bidangKegiatan, index) => (
                <React.Fragment key={index}>
                  <TableRow className="">
                    <TableCell className="font-bold">
                      {bidangKegiatan.nama}
                    </TableCell>
                    <TableCell className="font-bold">
                      {getCurrency(bidangKegiatan.totalAnggaran ?? 0)}
                    </TableCell>
                    <TableCell className="font-bold">
                      {getCurrency(bidangKegiatan?.totalRealisasi ?? 0)}
                    </TableCell>
                    <TableCell className="font-bold">
                      {getCurrency(
                        getSlipa(
                          bidangKegiatan.totalAnggaran ?? 0,
                          bidangKegiatan?.totalRealisasi,
                        ),
                      )}
                    </TableCell>
                  </TableRow>
                  {bidangKegiatan.kegiatan.map((kegiatan, indexKegiatan) => (
                    <TableRow key={kegiatan.nama} className="">
                      <TableCell className="pl-8">{kegiatan.nama}</TableCell>
                      <TableCell className="">
                        {getCurrency(kegiatan.anggaran ?? 0)}
                      </TableCell>
                      <TableCell className="">
                        {getCurrency(kegiatan.realisasi ?? 0)}
                      </TableCell>
                      <TableCell className="">
                        {getCurrency(
                          getSlipa(kegiatan.anggaran ?? 0, kegiatan?.realisasi),
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}

export const revalidate = 60;
