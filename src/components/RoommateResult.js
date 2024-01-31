'use client'
import Image from "next/image";
import { progressBarRun } from "./progressBar";
import { useRouter } from "next/navigation";

function RoommateCard({img, username}) {
	const router = useRouter();
  return (
	<div className="relative h-[300px] w-[300px] flex items-center flex-col shadow-lg rounded-2xl p-3 mt-5">
	  <div className="relative h-40 w-40">
		<Image 
		src={img}
		objectFit="cover" 
		layout="fill"
		className="rounded-full"
		/>
	  </div>
	  <div className="relative flex items-center flex-col justify-between mt-3">
	  <h1>{username}</h1>
	  <button className="bg-sky-400 text-sm font-semibold text-white p-2 mt-5 w-60 rounded-xl" onClick={()=>{
		progressBarRun({timer:2000})
		router.push(`/users/${username}`)
	  }}>Go to Profile</button>
	  </div>
	</div>
  )
}
export default RoommateCard;
