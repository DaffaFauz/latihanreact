function Profile() {
  return (
    <img
      className="mx-auto p-3 rounded-full"
      src="https://avatars.githubusercontent.com/u/94423743?s=96&v=4"
      alt="Daffa Fauzul Hakim"
    />
  );
}

export default function profile() {
  return (
    <>
      <h1 className="text-center pt-5 text-2xl font-bold">CV Online</h1>
      <div className="container mx-auto p-2">
        <Profile />
        <h1 className="text-center text-2xl font-bold">DAFFA FAUZUL HAKIM</h1>
        <h2 className="text-center text-xl font-bold">Front-end Developer</h2>
      </div>
      <br />
      <br />
      <p className="text-center">
        Saya seorang mahasiswa jurusan Sistem Informasi semester 5 yang sedang
        menekuni bidang software development
      </p>
    </>
  );
}
