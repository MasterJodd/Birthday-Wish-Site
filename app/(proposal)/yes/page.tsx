import Image from "next/image";

export default function LoveYouPrompt() {
  return (
    <div className="flex h-screen justify-center items-center bg-pink-200">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="https://media1.tenor.com/m/A4Lvk69JMJkAAAAd/mochi-cat.gif" // Replace with your new image file in the `public` folder
            alt="Cute Love Cats"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </div>
        <h1 className="text-2xl font-bold">
          Hehehehe, I knew it! Love you a lot 😘
        </h1>
      </div>
    </div>
  );
}
