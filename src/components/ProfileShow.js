'use client'
import Header from "./Header";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ClockIcon } from "@heroicons/react/outline";
import { BookOpenIcon, BriefcaseIcon, HomeIcon } from "@heroicons/react/solid";

function ProfileShow({isAuth, username, description, img, course, occupation, joinDate}) {
  return (
    <div>
      <Header isLoggedIn={isAuth} />
      <div className="relative grid grid-cols-1 md:grid-cols-3">
        <div className="relative flex flex-col md:min-h-[100vh] border-r shadow-lg cursor-pointer pb-5">
          {/* {Profile pics} */}
          <div className="relative h-40 w-40 md:h-80 md:w-80 mb-5 mx-auto mt-5 flex items-center">
            <Image
              src={img}
              alt="profile-img"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="border-b"></div>
          <div className="relative md:h-[200px] justify-between mt-10 flex flex-col w-[100%] items-center px-3">
            <div className="justify-between w-[100%] flex">
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    readOnly
                    checked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-400 outline-none"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                    I need a roommate
                  </span>
                </label>
              </div>
              <Link
                href={`https://wa.me/2349027997382?text=I%20am%20interested%20in%20being%20${username}'s%20roommate%20.`}
              >
                <FaWhatsapp className="text-2xl text-green-500 font-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col pl-5">
          {/* h1 intro */}
          <div className="mt-10 mb-10">
            <h1 className="text-3xl md:text-5xl">{username}</h1>
          </div>
          {/* bio */}
          <p className="text-md md:text-xl text-gray-500 mb-10">
            {description}
          </p>
          {/* location */}
          <h4 className="flex items-center text-sky-700">
            <BookOpenIcon className="h-5 mr-3" />
            {course}
          </h4>
          <h4 className="flex items-center text-sky-600">
            <BriefcaseIcon className="h-5 mr-3" />
            {occupation}
          </h4>
          {/* joined */}
          <h4 className="flex items-center text-sky-500 mb-5">
            <ClockIcon className="h-5 mr-3" />
            Joined since {joinDate}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProfileShow
