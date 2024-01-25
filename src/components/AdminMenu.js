"use client";
import NavBar from '@/components/NavBar'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';

const AdminMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed lg:w-1/4 md:w-1/3'>
      <div>
        {!isOpen && <MenuIcon className={`h-5 md:h-7 ml-5 mt-5 md:hidden cursor-pointer ${isOpen && 'absolute'}`} onClick={()=> setIsOpen(!isOpen)}/>
		}
        <section>
          <NavBar status = {isOpen}
		  onShow={()=>setIsOpen(false)}
		  />
		  {isOpen && <XIcon className="h-5 md:h-7 absolute text-white top-7 left-7 md:hidden z-200 cursor-pointer" onClick={()=> setIsOpen(!isOpen)}/>}
        </section>
        <section>
          {/* Display */}
          <div className="md:col-span-2 lg:col-span-3">

		  </div>
        </section>
      </div>
    </div>
  );
};

export default AdminMenu;
