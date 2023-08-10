import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "warga",
  title: "Warga",
  type: "object",
  fields: [
    defineField({
      name: "lakiLaki",
      title: "Laki-laki",
      type: "number",
    }),
    defineField({
      name: "perempuan",
      title: "Perempuan",
      type: "number",
    }),
  ],
});
