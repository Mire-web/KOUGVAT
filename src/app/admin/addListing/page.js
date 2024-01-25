import AdminMenu from "@/components/AdminMenu";

function AddListing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">
      <AdminMenu />
	  <div></div>
      <div className="lg:col-span-3 md:col-span-2 md:col-start-2">
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new lodge
            </h2>
            <form action="#">
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Lodge Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type lodge name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    for="brand"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Lodge Location"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    for="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="100000"
					min={10000}
                    required
                  />
                </div>
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select category</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="twin bungalow">Twin Bungalow</option>
                    <option value="storey">Storey</option>
                    <option value="twin storey">Twin Storey</option>
                  </select>
                </div>
				<div>
					
				<label
                    for="room-type"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Type
                  </label>
                  <select
                    id="room-type"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select Room Type</option>
                    <option value="single-room">Single Room</option>
                    <option value="studio-apartment">Studio Apartment(self contain)</option>
                    <option value="shared-apartment">Shared Apartment</option>
                    <option value="rfh">Room in a Family house</option>
                  </select>
				</div>
				<div>
				<label
                    for="amenities"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amenities
                  </label>
                  <select
                    id="amenities"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select Amenities</option>
                    <option value="SF">Semi-Furnished</option>
                    <option value="FF">Fully Furnished</option>
                    <option value="WI">Water Inflow</option>
                    <option value="BG">Backup Generator</option>
                    <option value="GTW">General tap water</option>
                    <option value="AA">All of the Above</option>
                  </select>
				</div>
                <div>
                  <label
                    for="max-roommate"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Maximum roommate
                  </label>
                  <input
                    type="number"
                    name="max-roommate"
                    id="max-roommate"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="3"
					min={1}
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add Listing
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddListing;
