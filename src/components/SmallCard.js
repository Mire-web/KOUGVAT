"use client";
import Image from "next/image";
import { searchCompose } from "./searchComposer";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { addYears } from "date-fns";

function SmallCard({ img, location, distance }) {
  const [startDate, setStartDate] = useState(new Date());
  const date = new Date();
  const [endDate, setEndDate] = useState(addYears(date, 1));
  const [noOfGuests, setNoOfGuests] = useState("any");
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
  const router = useRouter();
  return (
    <div
      className="flex items-center m-2 my-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
      onClick={() => {
        searchCompose({
          queryString: createQueryString({
            location: location,
			startDate: startDate,
			endDate: endDate,
			noOfGuests: noOfGuests
          }),
          router: router,
        });
      }}
    >
      {/* {img} */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* {description} */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
