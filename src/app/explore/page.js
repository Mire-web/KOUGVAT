import { SearchResult } from '@/components/SearchResult'
import React from 'react'

export default async function Explore() {
	const exploreResults = await fetch(
	  "https://api.npoint.io/db99a097ba2878c3d165",
	  {
		cache: "no-store",
	  }
	);
	const exploreResult = await exploreResults.json();
  return (
	<div>
	  <SearchResult searchResult={exploreResult}/>
	</div>
  )
}

