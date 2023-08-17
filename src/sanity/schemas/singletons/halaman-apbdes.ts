import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "halamanApbdes",
  title: "Halaman APBDes",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  liveEdit: true,
  fields: [
    defineField({
      name: "tahunAnggaran",
      title: "Tahun Anggaran",
      description: "Contoh 2023",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pendanaan",
      title: "Pendanaan",
      type: "array",
      of: [
        defineArrayMember({
          name: "asalDana",
          title: "Asal Dana",
          type: "dana",
        }),
      ],
    }),
    defineField({
      name: "belanjaDesa",
      title: "Belanja Desa",
      description: "Belanja Desa (Belanja dari kegiatan tidak pelu diisi)",
      type: "array",
      of: [
        defineArrayMember({
          name: "asalDana",
          title: "Asal Dana",
          type: "dana",
        }),
      ],
    }),
    defineField({
      name: "pembiayaan",
      title: "Pembiayaan",
      type: "array",
      of: [
        defineArrayMember({
          name: "kegiatan",
          title: "Kegiatan",
          type: "dana",
        }),
      ],
    }),

    defineField({
      name: "belanjaKegiatan",
      title: "Belanja Kegiatan",
      type: "array",
      of: [
        defineArrayMember({
          name: "bidang",
          title: "Bidang Kegiatan",
          type: "bidangKegiatan",
        }),
      ],
    }),
  ],
});
