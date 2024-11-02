"use client";
import { useState } from "react";
export default function GantiWarna() {
  const [warna, setWarna] = useState("blue");

  return (
    <>
      <div className="pt-20">
        <div className="text-center text-lg">Pilih Warna</div>
      </div>
      <div className="flex justify-center pt-2 pb-2">
        <button className="btn btn-danger m-2" onClick={() => setWarna("red")}>
          Merah
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => setWarna("yellow")}
        >
          Kuning
        </button>
        <button className="btn btn-danger m-2" onClick={() => setWarna("blue")}>
          Biru
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => setWarna("purple")}
        >
          Ungu
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => setWarna("green")}
        >
          Hijau
        </button>
      </div>
      <div
        className="h-20 w-40 flex mx-auto mb-2"
        style={{ background: warna }}
      ></div>
    </>
  );
}
