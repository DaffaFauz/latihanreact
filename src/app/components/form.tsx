"use client";
import { useState } from "react";
export default function Form() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState<number[]>([]);
  const [isSent, setIsSent] = useState(false);

  function handleNamaChange(e: any) {
    setNama(e.target.value);
  }

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }
  function handlePesanChange(e: any) {
    setPesan(e.target.value);
  }

  function handleRatingChange(value: number) {
    setRating(value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setRatings([...ratings, rating]); // Menyimpan rating ke dalam array
    setIsSent(true);
  };

  const averageRating =
    ratings.length > 0
      ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(
          2
        )
      : 0;

  if (isSent) {
    return (
      <>
        <h1>Nama: {nama}</h1>
        <h1>Email: {email}</h1>
        <h1>Pesan: {pesan}</h1>
        <h1>Rating: {rating} Bintang</h1>
        <h1>Average Rating: {averageRating} Bintang</h1>
        <p>data diatas akan segera di input ke database. terimakasih!</p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center mt-20 mb-5 text-2xl font-bold">
        Contact Saya
      </h2>
      <div className="flex justify-center">
        <form
          action=""
          onSubmit={
            handleSubmit
            // (e: any) => {
            //   e.preventDefault();
            //   setRatings([...ratings, rating]);
            //   setIsSent(true);
          }
          // }
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="name"
              >
                Nama
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                onChange={handleNamaChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="message"
              >
                Pesan
              </label>
              <textarea
                className="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="message"
                onChange={handlePesanChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                Rating
              </label>
              <div className=" flex">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`cursor-pointer text-2xl ${
                      value <= rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleRatingChange(value)}
                  >
                    &#x2605;
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center mb-30">
            <div className="w-full flex justify-around mb-3">
              <button
                className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Submit
              </button>
              <button
                className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                type="reset"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
