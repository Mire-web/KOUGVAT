'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter, useSearchParams } from 'next/navigation';
import format from 'date-fns/format';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { SearchResult } from '@/components/SearchResult';

export default function Search() {
	const searchParams = useSearchParams();
	const location = searchParams.get('location');
	const startDate = format(new Date(searchParams.get('startDate')), "dd MMMM yy");
	const endDate = format(new Date(searchParams.get('endDate')), "dd MMMM yy");
	const noOfGuests = searchParams.get('noOfGuests');
	const formattedWord = noOfGuests > 1 ? "roommates" : "roommate";
	const range = `${startDate} - ${endDate}`
  return (
	<div>
	  <Header placeholder={`${location} | ${range} | ${noOfGuests} ${formattedWord}`}/>
	  <main className='flex'>
		<section className='flex-grow pt-14 px-6'>
			<p className='text-xs'>Lodges - {range} - for {noOfGuests} {formattedWord}</p>
			<h1 className='text-3xl font-semibold mt-2 mb-6'>Availiable in {location}</h1>
			<div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
				<p className='button'>Water</p>
				<p className="button">Backup Power Supply</p>
				<p className="button">Wifi</p>
				<p className="button">Bungalow</p>
				<p className="button">Storey Building</p>
			</div>
			<SearchResult />
		</section>
	  </main>
	  <Footer />
	</div>
  )
}
