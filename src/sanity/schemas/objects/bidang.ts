import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "bidangKegiatan",
  title: "Bidang Kegiatan",
  type: "object",
  fields: [
    defineField({
      name: "nama",
      title: "Nama Bidang Kegiatan",
      type: "string",
    }),
    defineField({
      name: "kegiatan",
      title: "Kegiatan",
      type: "array",
      of: [
        defineArrayMember({
          name: "kegiatan",
          title: "Kegiatan",
          type: "dana",
        }),
      ],
    }),
  ],
});
