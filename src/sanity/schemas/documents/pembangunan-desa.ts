import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "pembangunanDesa",
  title: "PembangunanDesa",
  type: "document",
  liveEdit: true,
  fields: [
    defineField({
      name: "nama",
      title: "Nama Proyek",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "deskripsi",
      title: "Deskripsi Proyek",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lokasi",
      title: "Lokasi Proyek",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dana",
      title: "Dana Proyek",
      type: "number",
      validation: (rule) => rule.min(0).required(),
    }),
    defineField({
      name: "progress",
      title: "Progress Proyek",
      type: "number",
      validation: (rule) => rule.min(0).max(100).required(),
    }),
    defineField({
      name: "gambar",
      title: "Gambar Proyek",
      type: "array",
      of: [
        defineArrayMember({
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
    }),
  ],
});
