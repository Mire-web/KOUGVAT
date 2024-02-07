import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function UserMenu() {
	const router = useRouter();

  const handleLogout = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch("api/logout", {
        method: "GET",
      });
      router.push('/signin');
    } catch (error) {
      console.log(error)
    }

    // router.reload();
    console.log("logging out");
  };

  return (
    <div className="bg-white rounded-md absolute top-[70px] min-w-[200px] min-h-[200px] right-[30px] flex flex-col justify-evenly shadow-2xl">
      <div className="cursor-pointer flex-col flex">
        <Link href={"/users"} className="navLink">
          Profile
        </Link>
        <Link href={"/explore/roommates"} className="navLink">
          Explore Roommates
        </Link>
        <Link href={"/explore"} className="navLink">
          Explore Rooms
        </Link>
      </div>
      <div className="border-b"></div>
      <div className="cursor-pointer flex-col flex">
        <Link href={"https://wa.me/2349027997382"} target="_blank" className="navLink">
          Contact Admin
        </Link>
        <Link href={"https://wa.me/2347044090201"} className="navLink">
          Help Center
        </Link>
        <Link
          href={"#"}
          className="navLink text-[red]"
          onClick={handleLogout}
        >
          Log out
        </Link>
      </div>
    </div>
  );
}

export default UserMenu;
