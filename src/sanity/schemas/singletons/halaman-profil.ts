import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "halamanProfil",
  title: "Halaman Profil",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  liveEdit: true,
  fields: [
    defineField({
      name: "deskripsiDesa",
      title: "Deskripsi Desa",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "geografisDesa",
      title: "Geografis Desa",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "linkGoogleMaps",
      title: "Link Google Maps",
      type: "url",
      validation: (rule) => rule.required(),
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
