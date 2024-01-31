'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { progressBarRun } from "./progressBar";


function Banner() {
	const router = useRouter();
	const explore = () => {
		progressBarRun({timer:3000});
		router.push('/explore')
	}
	const exploreRoommate = () => {
		progressBarRun({timer:3000});
		router.push('/explore/roommates')
	}
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">New to KOUGVAT? Perfect.</p>
		<div>
        <button className="text-sky-900 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 mr-3 hover:shadow-xl active:scale-90 transition duration-150" onClick={explore}>
          Explore Lodges
        </button>
        <button className="text-sky-900 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150" onClick={exploreRoommate}>
          Explore Roommates
        </button>
		</div>
      </div>
    </div>
  );
}

export default Banner;
