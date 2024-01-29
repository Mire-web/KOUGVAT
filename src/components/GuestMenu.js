'use client'
import { useRouter } from "next/navigation"

function GuestMenu() {
	const router = useRouter()
  return (
	<div className="relative col-span-3 z-160">
		<div className="bg-white rounded-md absolute top-1 min-w-[200px] min-h-[200px] right-0 flex flex-col justify-evenly shadow-2xl">
			<div className="cursor-pointer">
				<p className="text-md font-bold hover:bg-gray-200 transition duration-100 ease-out py-3 px-2 rounded-sm" onClick={()=>router.push('/signup')}>Sign up</p>
				<p className="text-sm font-semibold hover:bg-gray-200 transition duration-100 ease-out py-3 px-2 rounded-sm" onClick={() => router.push("/signin")}>Login</p>
			</div>
			<div className="border-b"></div>
			<div className="cursor-pointer">
				<p className="text-sm font-semibold hover:bg-gray-200 transition duration-100 ease-out py-3 px-2 rounded-sm" onClick={()=>router.push('https://wa.me/2349027997382?text=I%20am%20interested%20in%20being%20an%20agent%20for%20KOUGVAT.')} target="blank">Become an Agent</p>
				<p className="text-sm font-semibold hover:bg-gray-200 transition duration-100 ease-out py-3 px-2 rounded-sm">Help Center</p>
			</div>
		</div>
	</div>
  )
}

export default GuestMenu
