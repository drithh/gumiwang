const dusunSchema = {
  name: 'dusun',
  title: 'Dusun',
  type: 'document',
  fields: [
    {
      name: 'Judul',
      title: 'Judul Dusun',
      type: 'string',
    },
    {
      name: 'deskripsi',
      title: 'Deskripsi Dusun',
      type: 'text',
    },
    {
      name: 'gambar',
      title: 'Gambar Dusun',
      type: 'image',
    },
  ],
};

export default dusunSchema;
