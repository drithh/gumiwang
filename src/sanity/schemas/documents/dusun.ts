const dusunSchema = {
  name: 'dusun',
  title: 'Dusun',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Dusun',
      type: 'string',
    },
    {
      name: 'namaKepalaDusun',
      title: 'Nama kepala Dusun',
      type: 'string',
    },
    {
      name: 'namaKetuaRW',
      title: 'Nama Ketua RW',
      type: 'string',
    },
    {
      name: 'namaKetuaRT',
      title: 'Nama Ketua RT',
      type: 'string',
    },
    {
      name: 'namaKetuaKarangTaruna',
      title: 'Nama Ketua Karang Taruna',
      type: 'string',
    },
    {
      name: 'jumlahWarga',
      title: 'Jumlah Warga',
      type: 'warga',
    },
    {
      name: 'jumlahWargaUsiaSekolah',
      title: 'Jumlah Warga Usia Sekolah',
      type: 'warga',
    },
    {
      name: 'jumlahWargaBalita',
      title: 'Jumlah Warga Balita',
      type: 'warga',
    },
    {
      name: 'jumlahWargaLansia',
      title: 'Jumlah Warga Lansia',
      type: 'warga',
    },
  ],
};

export default dusunSchema;
