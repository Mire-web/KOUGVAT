import React from "react";
import Link from "next/link";

function UserMenu() {
  return (
    <div className="bg-white rounded-md absolute top-[70px] min-w-[200px] min-h-[200px] right-[30px] flex flex-col justify-evenly shadow-2xl">
      <div className="cursor-pointer flex-col flex">
        <Link href={'/users'} className="navLink">Profile</Link>
      <Link href={'#'} className="navLink">Explore Roommates</Link>
      <Link href={'#'} className="navLink">Explore Rooms</Link>
      </div>
	  <div className="border-b"></div>
      <div className="cursor-pointer flex-col flex">
        <Link href={'#'} className="navLink">Contact Admin</Link>
        <Link href={'#'} className="navLink">Help Center</Link>
		<Link href={'#'} className="navLink">Log out</Link>
      </div>
    </div>
  );
}

export default UserMenu;
