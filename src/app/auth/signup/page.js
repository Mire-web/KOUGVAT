import React from 'react'

function SignUp() {
  return (
	<section className="bg-sky-50 dark:bg-sky-400">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                  Sign up
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="name" className="block text-sm font-medium text-gray-900 dark:text-white">FullName</label>
                      <input type="text" name="name" id="name" className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500" placeholder="Gena Concept" required="" />
                  </div>
                  <div>
                      <label for="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500" placeholder="genaconcept@gmail.com" required="" />
                  </div>
                  <div>
                      <label for="reg-no" className="block text-sm font-medium text-gray-900 dark:text-white">Reg no</label>
                      <input type="text" name="reg-no" id="reg-no" className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500" placeholder="2018/CS/12323"
					   />
                  </div>
                  <div>
                      <label for="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500" required="" />
                  </div>
				  <div>
                      <label for="cpassword" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="confirm password" id="cpassword" placeholder="Confirm Password" className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-600">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default SignUp
