import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "slide",
  title: "Slide",
  type: "document",
  fields: [
    defineField({
      name: "judul",
      title: "Judul Slide",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "deskripsi",
      title: "Deskripsi Slide",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gambar",
      title: "Gambar Slide",
      type: "image",
      validation: (rule) => rule.required(),
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
