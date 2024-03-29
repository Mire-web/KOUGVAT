import Image from "next/image";
import React from "react";
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/components/Header";
import Link from "next/link";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

async function getAndValidateCookiesFromApplication() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  // console.log("token", token)
  if (!token) return false;
  try {
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET_KEY);
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
}

async function page() {
  const isAuth = await getAndValidateCookiesFromApplication();

  return (
    <>
      <Header isLoggedIn={isAuth}/>
      <div className="relative grid grid-cols-1 md:grid-cols-3">
        <div className="relative flex flex-col min-h-[100vh] border-r shadow-lg cursor-pointer">
          {/* {Profile pics} */}
          <div className="relative h-50 w-50 md:h-80 md:w-80 mb-5 mx-auto mt-5 flex items-center">
            <Image
              src={"https://i.imgur.com/P7zWtd7.jpeg"}
              alt="profile-img"
              layout="fill"
              className="rounded-full"
            />
            <h5 className="text-white font-semibold hover:opacity-70 text-lg z-20 mx-auto mt-[200px]">
              Update Photo
            </h5>
          </div>
          <div className="border-b"></div>
          <div className="relative h-[200px] justify-between mt-10 flex flex-col w-[100%] items-center px-3">
            <div className="justify-between w-[100%] flex">
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-400 outline-none"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                    I need a roommate
                  </span>
                </label>
              </div>
              <Link href={"https://wa.me/2348081175695"}>
                <FaWhatsapp className="text-2xl text-green-500 font-bold" />
              </Link>
            </div>
            <button className="mt-100 bg-red-500 rounded-full h-10 p-2 w-[200px] text-white font-bold">
              Log Out
            </button>
          </div>
        </div>
        <div className="col-span-2 flex flex-col pl-5">
          {/* h1 intro */}
          <div className="mt-10 mb-10">
            <h1 className="text-2xl md:text-4xl">Hey, Gena Here</h1>
            <p className="text-sm text-sky-400 hover:text-sky-600 font-semibold">
              ▪Edit profile
            </p>
          </div>
          {/* bio */}
          <p className="text-md md:text-xl text-gray-500 mb-10">
            C.E.O of Gena Concepts Media, a designer, photographer and photo
            editor by day, and an adventurer by night.
          </p>
          {/* location */}
          <h4 className="flex items-center text-sky-700">
            <HomeIcon className="h-5 mr-3" />
            Ifite-Awka.
          </h4>
          <h4 className="flex items-center text-sky-600">
            <BriefcaseIcon className="h-5 mr-3" />
            Computer Science Major
          </h4>
          {/* joined */}
          <h4 className="flex items-center text-sky-500">
            <ClockIcon className="h-5 mr-3" />
            Joined since today
          </h4>
        </div>
      </div>
    </>
  );
}

export default page;
