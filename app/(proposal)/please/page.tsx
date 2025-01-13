import Image from "next/image";
import Link from "next/link";

export default function LovePrompt() {
  return (
    <div className="flex h-screen justify-center items-center bg-pink-200">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="https://media.tenor.com/p_VEcmrBsLMAAAAj/manja.gif" // Replace with your image file in the `public` folder
            alt="Cute Cat"
            width={250}
            height={250}
            className="bg-white rounded-3xl"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">DO you love me? 🥰</h1>
        <p className="text-gray-700 italic mb-6">
          ~Im all yours, Main sirf apka hun
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/yes" className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-100">
            Yes
          </Link>
          <Link href="/no1" className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-100">
            No
          </Link>
        </div>
      </div>
    </div>
  );
}
