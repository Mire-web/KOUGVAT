'use client'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { progressBarRun } from './progressBar'
import { searchCompose } from './searchComposer'


async function fetchCardData({title}){
	const res = await fetch('https://api.npoint.io/5f901d070246022232f2', {
		cache:"no-store"
	})
	const result = await res.json();
	const filteredResult = result?.filter((item)=>title === item.title);
	return filteredResult[0];
}

function MediumCard({img, title}) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const data = fetchCardData({
		title: title
	});
	let location, star, price, description;
	data.then(item=> {
		location = item.location
		star = item.star
		description = item.description
		price = item.price
	})
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
			location: location,
			img: img,
			title: title,
			star: star,
			price: price,
			desc: description
		  }),
		  router: router,
		  path: `/explore/${title}`
	})
	progressBarRun({timer:3000})
  }


  return (
	<div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out' onClick={showDetail}>
	<div className='relative h-80 w-80'>
	  <Image src={img} layout='fill' className='rounded-md' />
	</div>
	<h3 className="text-2xl mt-3">{title}</h3>
	</div>
  )
}

export default MediumCard
