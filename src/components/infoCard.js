'use client'
import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { progressBarRun } from './progressBar';

function InfoCard({img, title, description, star, price, location}) {
	const router = useRouter();
  return (
	<div className='flex py-7 px-2 pr-2 border-b cursor-pointer flex-col md:flex-row first:border-t hover:opacity-80 hover:shadow-lg transition duration-200 ease-out' 
	onClick={()=>{
		progressBarRun({timer:2000})
		router.push(`/explore/${title}`)
		}}>
		<div className='relative h-24 w-40 md:h-52 md:w-80 self-center flex-shrink-0'>
			<Image src={img} layout='fill' objectFit='cover' className='rounded-2xl'/>
		</div>
		<div className='flex flex-col flex-grow pl-5'>
			<div className='flex justify-between text-xs md:text-sm items-center'>
				<p>{location}</p>
				<HeartIcon className='h-7 cursor-pointer'/>
			</div>
			<h4 className='text-xl'>{title}</h4>
			<div className='border-b w-10 pt-2' />
			<p className='pt-2 text-xs md:text-sm text-gray-500 flex-grow'>{description}</p>
			<div className='flex justify-between items-center md:items-end pt-5'>
				<p className='flex items-center'>
					<StarIcon className='h-5 text-yellow-400'/>
					{star}
				</p>
				<div>
					<p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default InfoCard;
