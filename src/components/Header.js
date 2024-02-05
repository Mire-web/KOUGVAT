"use client";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { addYears } from "date-fns";
import { progressBarRun } from "./progressBar";
import GuestMenu from "./GuestMenu";
import { Logged } from "./Logged";
import UserMenu from "./UserMenu";
import { searchCompose } from "./searchComposer";
import Link from "next/link";

function Header({ placeholder, isLoggedIn  }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const date = new Date();
  const [endDate, setEndDate] = useState(addYears(date, 1));
  const [noOfGuests, setNoOfGuests] = useState("1");
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (obj) => {
      const params = new URLSearchParams(searchParams);
      Object.keys(obj).forEach((key) => {
        params.set(key, obj[key]);
      });
      return params.toString();
    },
    [searchParams]
  );

  const search =()=>{
	searchCompose({
		queryString:
        createQueryString({
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests: noOfGuests,
        }),
		router: router,
		path: '/search'
  })
  resetInput();
  }

  const handleHomeClick = () => {
    router.push("/");
    progressBarRun(1000);
	// console.log(Logged(true))
  };

  const [open, setOpen] =useState(false);

  return (
      <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5 md:px-10" onMouseLeave={() => setOpen(false)}>
        {/* {logo} */}
        <div
          onClick={handleHomeClick}
          className={
            "relative cursor-pointer text-2xl md:text-3xl text-sky-900 flex items-center h-10"
          }
        >
          <h1>KOUGVAT</h1>
        </div>
        {/* {search} */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            type="text"
            className="pl-5 flex-grow text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
            placeholder={placeholder || "Start your search"}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-sky-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
        {/* {right} */}
        <div className="flex space-x-4 items-center justify-end text-gray-500">
          <Link className="hidden md:inline cursor-pointer" href={'https://wa.me/2349027997382?text=I%20am%20interested%20in%20being%20an%20agent%20for%20KOUGVAT.'} target="blank">Become an Agent</Link>
          <GlobeAltIcon className="h-6" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer"
		  onClick={()=> setOpen(!open)}>
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>

        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["rgb(56,189,248)", "rgb(12,74,110)"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Roommates
              </h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg outline-none text-sky-400"
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min={1}
              />
            </div>
            <div className="flex">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button className="flex-grow text-sky-400" onClick={search}>
                Search
              </button>
            </div>
          </div>
        )}
      {open && <Logged logged = {isLoggedIn || false}/>}
      </header>
  );
}

export default Header;
