"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { Dusun } from "~/types";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Dusun>[] = [
  {
    accessorKey: "nama",
    header: "Nama Dusun",
  },
  {
    accessorKey: "namaKepalaDusun",
    header: "Nama Kepala Dusun",
  },
  {
    accessorKey: "jumlahWarga",
    header: "Dewasa",
    columns: [
      {
        accessorKey: "jumlahWarga.lakiLaki",
        header: "L",
      },
      {
        accessorKey: "jumlahWarga.perempuan",
        header: "P",
      },
    ],
  },
  {
    accessorKey: "jumlahWargaBalita",
    header: "Balita",
    columns: [
      {
        accessorKey: "jumlahWargaBalita.lakiLaki",
        header: "L",
      },
      {
        accessorKey: "jumlahWargaBalita.perempuan",
        header: "P",
      },
    ],
  },
  {
    accessorKey: "jumlahWargaUsiaSekolah",
    header: "Usia Sekolah",
    columns: [
      {
        accessorKey: "jumlahWargaUsiaSekolah.lakiLaki",
        header: "L",
      },
      {
        accessorKey: "jumlahWargaUsiaSekolah.perempuan",
        header: "P",
      },
    ],
  },
  {
    accessorKey: "jumlahWargaLansia",
    header: "Lansia",
    columns: [
      {
        accessorKey: "jumlahWargaLansia.lakiLaki",
        header: "L",
      },
      {
        accessorKey: "jumlahWargaLansia.perempuan",
        header: "P",
      },
    ],
  },
];
