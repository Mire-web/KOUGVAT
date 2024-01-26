'use client'
import { XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";

function NavBar({ status }) {
	const router = useRouter()
  return (
    <div className={`${!status && 'hidden'} md:block z-100`}>
      <div className="bg-sky-900 min-h-[100vh] flex flex-col justify-between p-6 relative">
	  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-white cursor-pointer" onClick={()=> router.push("/admin")}>Admin</h1>
        <div className="text-white cursor-pointer flex-col flex">
          {/* Posts */}
          <button className="adminNavbtn" onClick={()=> router.push("/admin/addListing")}>Add New Listing</button>
          {/* view listings */}
          <button className="adminNavbtn" onClick={()=> router.push("/admin/manageListings")}>Manage Listings</button>
        </div>
        {/* Logout */}
        <div className="text-white cursor-pointer flex flex-col">
          <button className="adminNavbtn" onClick={()=> router.push("/admin/settings")}>Settings</button>
          <button className="adminNavbtn bg-red-500" onClick={()=> router.push("/auth/signin")}>Log Out</button>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default NavBar;
