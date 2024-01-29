"use client";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { progressBarRun } from "./progressBar";

export default function ItemDetailCard() {
  const router = useRouter();
  return (
    <div className="relative grid grid-cols-2 min-h-[100vh]">
      <div className="relative h-50 w-50 md:h-[100%] md:w-[100%]">
        <Image
          src={"https://i.imgur.com/rgEFjUP.jpeg"}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="p-7">
        <p
          onClick={() => {
			progressBarRun({timer:2000})
            router.back();
          }}
         className="flex items-center w-[150px] mb-3 text-sky-600 font-semibold cursor-pointer">
          <ArrowLeftIcon className="h-5 pr-2" />
          Back to explore
        </p>
        <h1 className="text-2xl font-bold mb-3">Item Title</h1>
        <h3 className="text-xl font-semibold mb-3">Item Location</h3>
        <div className="flex items-center text-md mb-3">
          <h4 className="pr-3">• Building Type</h4>
          <h4>• Room Type</h4>
        </div>
		<p className="flex items-center w-[150px] mb-3 font-semibold cursor-pointer mb-3">
			<StarIcon className="h-6 pr-2 text-yellow-400"/>
			4.89
		</p>
		<div className="mb-5">
			<h5 className="text-md font-semibold">Amenities</h5>
			<p className="font-semibold text-sm">amenity 1, 2, 3, 4</p>
		</div>
		<div>
			<h6 className="text-md font-semibold ">Description</h6>
		<p className="mt-2 mb-3">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit impedit aspernatur sunt quidem exercitationem totam doloremque! Adipisci fuga minima ipsa, numquam aliquid iste dolorem. Placeat voluptates recusandae, nemo voluptatum perspiciatis porro, quidem quam assumenda laborum officia reprehenderit maxime, nobis mollitia facere consequuntur. Omnis dolorum ab, est praesentium atque exercitationem.
		</p>
		</div>
		<div className="bg-white shadow-md p-3 flex justify-between items-center mt-9">
			<p className="text-2xl font-bold">160000NGN</p>
			<Link href={'https://wa.me/2349027997382?text=I%20am%20interested%20in%20lodge%20from%20KOUGVAT.'} target="blank" className="font-medium text-white hover:scale-95 shadow-md transform transition duration-150 rounded-md p-3 bg-primary-600">Book this room</Link>
		</div>
      </div>
    </div>
  );
}
