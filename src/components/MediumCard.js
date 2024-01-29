'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { progressBarRun } from './progressBar'

function MediumCard({img, title}) {
	const router = useRouter()
  return (
	<div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out' onClick={()=>{
		progressBarRun({timer:2000})
		router.push(`/explore/${title}`)
		}}>
	<div className='relative h-80 w-80'>
	  <Image src={img} layout='fill' className='rounded-md'/>
	</div>
	<h3 className="text-2xl mt-3">{title}</h3>
	</div>
  )
}

export default MediumCard
