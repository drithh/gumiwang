import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "dusun",
  title: "Dusun",
  type: "document",
  liveEdit: true,
  fields: [
    defineField({
      name: "nama",
      title: "Nama Dusun",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "namaKepalaDusun",
      title: "Nama kepala Dusun",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jumlahWarga",
      title: "Jumlah Warga",
      type: "warga",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jumlahWargaUsiaSekolah",
      title: "Jumlah Warga Usia Sekolah",
      type: "warga",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jumlahWargaBalita",
      title: "Jumlah Warga Balita",
      type: "warga",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jumlahWargaLansia",
      title: "Jumlah Warga Lansia",
      type: "warga",
      validation: (rule) => rule.required(),
    }),
  ],
});
