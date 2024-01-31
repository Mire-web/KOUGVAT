'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import  {signIn} from "next-auth/react"
import User from "@/models/userModel";
import { connectDB } from "@/utils/connect";

function SignIn() {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [pending, setPending] = useState(false);
	const router = useRouter() 
	const [successMsg, setSuccessMsg] = useState("")
	
	const [userInfo, setUserInfo] = useState({
	  email: "",
	  password: "",
	});
	const handleInput = (e) => {
	  setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	  setError("");
	};

	async function login(){
		try {
			connectDB();
			console.log(User)
			const user = await User.findOne({email:userInfo.email});
			if(!user) throw new Error("Wrong Credentials.");
			const isCorrect = await bcrypt.compare(userInfo.password, user.password);
			if (!isCorrect) throw new Error("Wrong Credentials");
			return user;
		}catch (error){
			setError(error);
		}
	}

	async function handleSubmit(e) {
	  e.preventDefault();
	  if (!userInfo.email || !userInfo.password) {
		setError("Enter valid credentials.");
	  } else {
		try {
		  setPending(true);
		  const user = login()
		  console.log(user);
		} catch (error) {
		  setPending(false);
		  console.log(error);
		  setError(error);
		}
	  }
	}
  return (
	<section className="bg-sky-50 dark:bg-sky-400">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 min-h-[100vh]">
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                  Log in to your account
              </h1>
			  {successMsg && <span className="text-xl text-green-400 w-[100%] text-center">{successMsg}</span>}
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500" placeholder="name@company.com" required="" onChange={(e) => handleInput(e)}/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500" required="" onChange={(e) => handleInput(e)}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-700 dark:text-gray-500">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-600">Forgot password?</a>
                  </div>
              {error && (
                <span className="text-xs w-[100%] font-semibold text-center text-red-500">
                  {error}
                </span>
              )}
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >{pending?'Logging into your account':'Sign in'}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default SignIn
