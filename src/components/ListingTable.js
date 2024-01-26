import React from 'react'

const ListingTable = () => {
  return (
	<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">	  
<div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:col-span-3 lg:col-start-2 md:col-start-2 md:col-span-2">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Lodge name
                </th>
                <th scope="col" class="px-6 py-3">
                    Building Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Room Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Amazing Grace
                </th>
                <td class="px-6 py-4">
                    Twin Storey
                </td>
                <td class="px-6 py-4">
                    Studio Apartment
                </td>
                <td class="px-6 py-4">
                    150000NGN
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Let Love Lead 
                </th>
                <td class="px-6 py-4">
                    Storey
                </td>
                <td class="px-6 py-4">
					Studio Apartment
                </td>
                <td class="px-6 py-4">
                    120000NGN
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Divine Favour
                </th>
                <td class="px-6 py-4">
                    Bungalow
                </td>
                <td class="px-6 py-4">
                    Single Room
                </td>
                <td class="px-6 py-4">
                    70000NGN
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Yahoo Villa
                </th>
                <td class="px-6 py-4">
                    Twin Bungalow
                </td>
                <td class="px-6 py-4">
                    Shared Apartment
                </td>
                <td class="px-6 py-4">
                    180000NGN
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

	</div>
  )
}

export default ListingTable
