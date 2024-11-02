import Header from "./components/header";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import Personal from "./components/personal";
import Skill from "./components/skills";
import Hobi from "./components/hobbies";
import Contact from "./components/form";
import Theme from "./components/theme";

export default function Home() {
  return (
    <div className="grid min-h-screen pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2">
        <Theme />
        <Header />
        <RiwayatPendidikan />
        <RiwayatPekerjaan />
        <Skill />
        <Personal />
        <Hobi />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center my-20">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &copy; 2024. Daffa Fauzul Hakim
        </a>
      </footer>
    </div>
  );
}
