import Header from '@/components/Header'
import ItemDetailCard from '@/components/ItemDetailCard'
import Link from 'next/link'

function ListingDetail({params}) {
	const id = params.slug
  return (
	<div>
		<ItemDetailCard />
	</div>
  )
}

export default ListingDetail
