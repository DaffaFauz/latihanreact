function Karir(props: any) {
  return (
    <div className="grid grid-cols-12 text-center mx-auto border-2 border-blue-700 bg-blue-500 rounded p-2 mt-2">
      <div className="text-slate-100 col-span-12 md:col-span-4">
        {props.jenjang}
      </div>
      <div className="text-slate-100 col-span-12 md:col-span-4">
        {props.nama}
      </div>
      <div className="text-slate-100 col-span-12 md:col-span-4">
        {props.tahun}
      </div>
    </div>
  );
}

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto pt-20">
      <h2 className="text-center text-2xl font-bold">Riwayat Pendidikan</h2>
      <Karir jenjang="SD" nama="SDN 2 Kaso" tahun="2010 - 2016" />
      <Karir jenjang="SMP" nama="SMPN 1 Tambaksari" tahun="2016 - 2019" />
      <Karir jenjang="SMK" nama="SMKN 1 Ciamis" tahun="2019 - 2022" />
      <Karir
        jenjang="Kuliah"
        nama="Universitas Masoem"
        tahun="2022 - Sekarang"
      />
    </div>
  );
}
