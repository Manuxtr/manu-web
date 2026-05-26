import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[url(/bg.jpg)] h-[40vh] bg-contain md:bg-[url(/bg.jpg)] md:h-[50vh] md:bg-contain md:bg-no-repeat  lg:bg-[url(/bg.jpg)] lg:h-screen lg:bg-cover">
        <h1 className="text-3xl font-bold text-center text-white">
          this is a background image
        </h1>
      </div>
      <p className="text-center font-bold text-blue-500 text-3xl mt-4">
        My products
      </p>
      <div className="my-5 grid grid-cols-1   md:grid-cols-2   lg:grid-cols-4 ">
        <div className="w-70 h-70 round-md shadow-md">
          <Image
            src="/bg.jpg"
            alt="image"
            width={100}
            height={100}
            className="w-70 h-70 rounded-md"
          />
        </div>
        <div className="w-70 h-70 round-md shadow-md">
          <Image
            src="/bg.jpg"
            alt="image"
            width={100}
            height={100}
            className="w-70 h-70 rounded-md"
          />
        </div>
        <div className="w-70 h-70 round-md shadow-md">
          <Image
            src="/bg.jpg"
            alt="image"
            width={100}
            height={100}
            className="w-70 h-70 rounded-md"
          />
        </div>
        <div className="w-70 h-70 round-md shadow-md">
          <Image
            src="/bg.jpg"
            alt="image"
            width={100}
            height={100}
            className="w-70 h-70 rounded-md"
          />
        </div>
      </div>
    </main>
  );
}
