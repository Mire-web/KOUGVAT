'use client'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { progressBarRun } from './progressBar'
import { searchCompose } from './searchComposer'


async function fetchCardData(e){
	const res = await fetch('https://api.npoint.io/5f901d070246022232f2', {
		cache:"no-store"
	})
	const result = await res.json();
	const filteredResult = result?.filter((item)=>title === item.title)
	return filteredResult[0];
}

function MediumCard({img, title}) {
	const router = useRouter();
	const data = fetchCardData();
	const searchParams = useSearchParams();
	const createQueryString = useCallback(
	  (obj) => {
		const params = new URLSearchParams(searchParams);
		Object.keys(obj).forEach((key) => {
		  params.set(key, obj[key]);
		});
		return params.toString();
	  },
	  [searchParams]
	);
	
	const showDetail =()=>{
	  searchCompose({
		  queryString:
		  createQueryString({
			location: data.location,
			img: img,
			title: title,
			star: data.star,
			price: data.price,
			desc: data.description
		  }),
		  router: router,
		  path: `/explore/${location}`
	})
	progressBarRun({timer:2000})
  }

  return (
	<div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
	<div className='relative h-80 w-80'>
	  <Image src={img} layout='fill' className='rounded-md' onClick={showDetail}/>
	</div>
	<h3 className="text-2xl mt-3">{title}</h3>
	</div>
  )
}

export default MediumCard
