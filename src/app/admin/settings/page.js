import AdminMenu from "@/components/AdminMenu";
import React from "react";

function Settings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative bg-white dark:bg-gray-900 h-[100vh]">
      <AdminMenu />
      <div className="lg:col-start-2 p-7">
        <form action="">
          <label
            for="npassword"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Password
          </label>
          <input
            type="password"
            name="npassword"
            id="npassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter New Password"
            required
          />
          <label
            for="cnpassword"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            name="cnpassword"
            id="cnpassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Re-enter New Password"
            required
          />
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Change Password
          </button>
        </form>
        <form action="" className="mt-20">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Update Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter New Number"
            required
          />
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
