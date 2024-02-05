import Header from '@/components/Header'
import RoommateCard from '@/components/RoommateResult'
import React from 'react'
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

async function getAndValidateCookiesFromApplication() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  // console.log("token", token)
  if(!token) return false
  try {
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET_KEY);
    return true
  } catch (err) {
    console.log('err', err)
    return false
  }
}
async function page() {
	
	const roommate = await fetch("https://api.npoint.io/9fb92cd034cca75dafa8", {
		cache: "no-store",
	});
	const result = await roommate.json();
	 const isAuth = await getAndValidateCookiesFromApplication();
  return (
	<>
	<Header isLoggedIn={isAuth} />
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
