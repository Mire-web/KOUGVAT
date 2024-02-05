import React from "react";
import Link from "next/link";

function UserMenu() {

  const handleLogout = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch("api/logout", {
        method: "GET",
      });
      window.location.reload();
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
        <Link href={"#"} className="navLink">
          Explore Roommates
        </Link>
        <Link href={"#"} className="navLink">
          Explore Rooms
        </Link>
      </div>
      <div className="border-b"></div>
      <div className="cursor-pointer flex-col flex">
        <Link href={"#"} className="navLink">
          Contact Admin
        </Link>
        <Link href={"#"} className="navLink">
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
