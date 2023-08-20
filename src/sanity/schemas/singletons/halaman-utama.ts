import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "halaman-utama",
  title: "Halaman Utama",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  liveEdit: true,
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "noTelepon",
      title: "No Telepon",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tampilanSlide",
      title: "Tampilan Slide",
      description:
        "Ini adalah slide yang akan muncul di halaman utama. Anda dapat mengubah urutan slider dengan mengubah urutan di sini.",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "slide" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Home",
        title,
      };
    },
  },
});
