import React from 'react'
import AdminMenu from '@/components/AdminMenu'

const Admin = () => {
  return (
	<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative'>
	<AdminMenu />
	<div className='lg:col-start-2 lg:col-span-3 md:col-start-2 md:col-span-2 flex items-center h-[100vh] pl-7'>
		<h1 className='text-9xl text-sky-500 font-bold'>
			Admin Panel
		</h1>
	</div>
	</div>
  )
}

export default Admin
