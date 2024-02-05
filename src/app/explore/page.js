import { SearchResult } from '@/components/SearchResult'
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


export default async function Explore() {
	const isAuth = await getAndValidateCookiesFromApplication();

	const exploreResults = await fetch(
	  "https://api.npoint.io/db99a097ba2878c3d165",
	  {
		cache: "no-store",
	  }
	);
	const exploreResult = await exploreResults.json();
  return (
	<div>
	  <SearchResult searchResult={exploreResult} isAuth={isAuth}/>
	</div>
  )
}

