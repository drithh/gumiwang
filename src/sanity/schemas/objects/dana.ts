import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "dana",
  title: "Dana",
  type: "object",
  fields: [
    defineField({
      name: "nama",
      title: "Nama",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "anggaran",
      title: "Anggaran",
      description: "jika defisit maka angka negatif",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "realisasi",
      title: "Realisasi",
      description: "jika defisit maka angka negatif",
      type: "number",
    }),
  ],
});
