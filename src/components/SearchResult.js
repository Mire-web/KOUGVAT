import React from "react";
import infoCard from "./infoCard";

export async function SearchResult() {
	const searchResults = await fetch('https://api.npoint.io/db99a097ba2878c3d165', {
		cache: "no-store",
	});
	const searchResult = await searchResults.json();
  return (
	<div>
	{searchResult.map((item) => (
		<infoCard 
		key={item.img}
		img={item.img}
		location={item.location}
		title={item.title}
		description={item.description}
		star={item.star}
		price={item.price}/>
	))}
	</div>
  );
}
