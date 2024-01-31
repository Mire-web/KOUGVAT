"use client";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { progressBarRun } from "./progressBar";

export default function ItemDetailCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const title = searchParams.get("title");
  const img = searchParams.get("img");
  const desc = searchParams.get("desc");
  const star = searchParams.get("star");
  const price = searchParams.get("price");

  return (
    <div className="relative grid md:grid-cols-2 min-h-[100vh]">
	<p
	  onClick={() => {
		progressBarRun({timer:2000})
		router.back();
		router.replace('/explore', undefined, {shallow:true});
	  }}
	 className="flex items-center w-[150px] mb-3 mt-3 ml-3 text-sky-600 font-semibold cursor-pointer md:col-start-2">
	  <ArrowLeftIcon className="h-5 pr-2" />
	  Back to explore
	</p>
      <div className="relative h-80 mx-auto w-80 md:h-[100%] md:w-[100%] md:row-start-1 md:row-span-2">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="p-7 md:col-start-2">
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        <h3 className="text-xl font-semibold mb-3">{location}</h3>
        <div className="flex items-center text-md mb-3">
          <h4 className="pr-3">• Storey</h4>
          <h4>• Studio Apartment</h4>
        </div>
		<p className="flex items-center w-[150px] mb-3 font-semibold cursor-pointer mb-3">
			<StarIcon className="h-6 pr-2 text-yellow-400"/>
			{star}
		</p>
		<div className="mb-5">
			<h5 className="text-md font-semibold">Amenities</h5>
			<p className="font-semibold text-sm">{desc}</p>
		</div>
		<div>
			<h6 className="text-md font-semibold ">Description</h6>
		<p className="mt-2 mb-3">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam suscipit impedit aspernatur sunt quidem exercitationem totam doloremque! Adipisci fuga minima ipsa, numquam aliquid iste dolorem. Placeat voluptates recusandae, nemo voluptatum perspiciatis porro, quidem quam assumenda laborum officia reprehenderit maxime, nobis mollitia facere consequuntur. Omnis dolorum ab, est praesentium atque exercitationem.
		</p>
		</div>
		<div className="bg-white shadow-md p-3 flex justify-between items-center mt-9">
			<p className="text-xl md:text-2xl font-bold">{price}</p>
			<Link href={'https://wa.me/2349027997382?text=I%20am%20interested%20in%20lodge%20from%20KOUGVAT.'} target="blank" className="font-medium text-white hover:scale-95 shadow-md transform transition duration-150 rounded-md p-2 text-sm md:text-md md:p-3 bg-primary-600">Book this room</Link>
		</div>
      </div>
    </div>
  );
}
