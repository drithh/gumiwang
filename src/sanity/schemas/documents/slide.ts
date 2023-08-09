const slideSchema = {
  name: 'slide',
  title: 'Slide',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Slide',
      type: 'string',
    },
    {
      name: 'deskripsi',
      title: 'Deskripsi Slide',
      type: 'text',
    },
    {
      name: 'gambar',
      title: 'Gambar Slide',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};

export default slideSchema;
