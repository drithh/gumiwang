import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "perangkatDesa",
  title: "Perangkat Desa",
  type: "document",
  liveEdit: true,
  fields: [
    defineField({
      name: "nama",
      title: "Nama Lengkap",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alamat",
      title: "Alamat",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jabatan",
      title: "Jabatan",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "prioritas",
      title: "Prioritas",
      type: "number",
      description:
        "Semakin kecil semakin prioritas, misalnya 1 untuk Kepala Desa, 2 untuk Sekretaris Desa, dst.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto Perangkat Desa",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
  ],
});
