"use client";
import { useState, useEffect } from "react";

function Skill(props: any) {
  const progressBarColor =
    props.theme === "blue" || props.theme === "dark"
      ? "bg-white"
      : "bg-blue-600";
  return (
    <>
      <div className="flex justify-between mb-1 mt-2">
        <span className="text-base font-medium">{props.nama}</span>
        <span className="text-sm font-medium">{props.tingkat}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${progressBarColor} h-2.5 rounded-full`}
          style={{ width: props.proses }}
        ></div>
      </div>
    </>
  );
}

export default function Skills() {
  const [theme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="container mx-auto pt-20">
        <h2 className="text-center text-2xl font-bold">Keahlian</h2>
        <Skill nama="JavaScript" proses="80%" tingkat="80%" theme={theme} />
        <Skill nama="Laravel" proses="50%" tingkat="50%" theme={theme} />
        <Skill nama="React" proses="30%" tingkat="30%" theme={theme} />
      </div>
    </>
  );
}
