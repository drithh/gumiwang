const sliderSchema = {
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    {
      name: 'Judul',
      title: 'Judul Slider',
      type: 'string',
    },
    {
      name: 'deskripsi',
      title: 'Deskripsi Slider',
      type: 'text',
    },
    {
      name: 'gambar',
      title: 'Gambar Slider',
      type: 'image',
    },
  ],
};

export default sliderSchema;
