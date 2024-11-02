function Karir(props: any) {
  return (
    <div className="grid grid-cols-12 text-center mx-auto border-2 border-amber-700 bg-amber-500 rounded p-2 mt-2">
      <div className="text-cyan-950 col-span-12 md:col-span-4">
        {props.jenjang}
      </div>
      <div className="text-cyan-950 col-span-12 md:col-span-4">
        {props.nama}
      </div>
      <div className="text-cyan-950 col-span-12 md:col-span-4">
        {props.tahun}
      </div>
    </div>
  );
}

export default function RiwayatPekerjaan() {
  return (
    <div className="container mx-auto pt-20">
      <h2 className="text-center text-2xl font-bold">Riwayat Pekerjaan</h2>
      <Karir jenjang="Web Developer" nama="PT. Decode" tahun="2017 - 2019" />
      <Karir jenjang="Musisi" nama="Soka Band" tahun="2020 - 2022" />
      <Karir jenjang="Programmer" nama="Microsoft" tahun="2025 - 2028" />
      <Karir jenjang="IT Consultant" nama="Menkominfo" tahun="2028 - 2045" />
    </div>
  );
}
