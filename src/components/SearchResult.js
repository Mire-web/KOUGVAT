"use client";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import format from "date-fns/format";
import MapApp from "./Map";
import { MapIcon } from "@heroicons/react/outline";

export function SearchResult({searchResult}) {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const startDate = format(
    new Date(searchParams.get("startDate")),
    "dd MMMM yy"
  );
  const endDate = format(new Date(searchParams.get("endDate")), "dd MMMM yy");
  const noOfGuests = searchParams.get("noOfGuests");
  const formattedWord = noOfGuests > 1 ? "roommates" : "roommate";
  const range = `${startDate} - ${endDate}`;
  const [openMap, setOpenMap] = useState(false);
  return (
    <div>
	<div className="flex rounded-full px-4 py-2 bg-transparent text-white absolute h-[100vh] w-[100vw] border-red-800 pointer-events-none z-90">
	  <button className="flex items-end rounded-full px-4 py-2 bg-sky-700 fixed left-1/2 bottom-5 pointer-events-auto z-[999] outline-none" onClick={()=>setOpenMap(!openMap)}>
		<MapIcon className="mr-2 h-6" />
		Map
	  </button>
	</div>
      <Header
        placeholder={`${location || "any"} | ${range || "any"} | ${
          noOfGuests || "any"
        } ${formattedWord}`}
      />
      <main className="flex">
        <div className={`${!openMap && 'hidden'} fixed top-5 left-0 overflow-hidden min-h-[100vh] z-[998] min-w-[100vw]`}>
          <MapApp searchResult={searchResult}/>
        </div>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">Lodges - {range}</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Availiable in {location || "Any location"}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Water</p>
            <p className="button">Backup Power Supply</p>
            <p className="button">Wifi</p>
            <p className="button">Bungalow</p>
            <p className="button">Storey Building</p>
          </div>
          {searchResult.map((item) => (
            <InfoCard
              key={item.img}
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
