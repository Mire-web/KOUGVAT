import Image from 'next/image'
import React from 'react'

function infoCard({img, title, description, star, price, location}) {
  return (
	<div>
		<div className='relative h-24 w-40'>
			<Image src={img} layout='fill' objectFit='cover' />
		</div>
	</div>
  )
}

export default infoCard;
