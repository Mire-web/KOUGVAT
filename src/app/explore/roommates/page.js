import Header from '@/components/Header'
import RoommateCard from '@/components/RoommateResult'
import React from 'react'

async function page() {
	const roommate = await fetch("https://api.npoint.io/9fb92cd034cca75dafa8", {
		cache: "no-store",
	});
	const result = await roommate.json();
  return (
	<>
	<Header />
	<div className=' max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 px-8 sm:px-16'>
	{result?.map((item)=> (
		<RoommateCard 
		key={item.id}
		img={item.img}
		username={item.username}
		/>
	))}
	</div>
	</>
  )
}

export default page
