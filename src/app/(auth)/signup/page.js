"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SignUp() {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [successMsg, setSuccessMsg] = useState("");
  const validatePassword = () => {
    return password === cpassword;
  };
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    reg_no: null,
    password: "",
  });
  const handleInput = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validatePassword()) {
      setError("Password must match.");
    } else if (!userInfo.name || !userInfo.email || !userInfo.password) {
      setError("Must provide all credentials.");
    } else {
      try {
        setPending(true);
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        if (res.ok) {
          setPending(false);
          const form = e.target;
          form.reset();
          setSuccessMsg("Registration Successful");
          setTimeout(() => {
            router.push("/signin");
          }, 1500);
        } else {
          const errorData = await res.json();
          setError(errorData.message);
          setPending(false);
        }
      } catch (error) {
        setPending(false);
        setError("something went wrong, Try again.");
      }
    }
  }

  return (
    <section className="bg-sky-50 dark:bg-sky-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
              Sign up
            </h1>
            {successMsg && (
              <span className="text-xl text-green-400 w-[100%] text-center">
                {successMsg}
              </span>
            )}
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  FullName
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500"
                  placeholder="Gena Concept"
                  required=""
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500"
                  placeholder="genaconcept@gmail.com"
                  required=""
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <label
                  for="reg-no"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reg no
                </label>
                <input
                  type="number"
                  name="reg_no"
                  id="reg_no"
                  className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500"
                  placeholder="2018123232"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500"
                  required=""
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleInput(e);
                  }}
                />
              </div>
              <div>
                <label
                  for="cpassword"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm password"
                  id="cpassword"
                  placeholder="Confirm Password"
                  className="bg-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500"
                  required=""
                  onChange={(e) => {
                    setCpassword(e.target.value);
                    handleInput(e);
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-600"
                >
                  Forgot password?
                </a>
              </div>
              {error && (
                <span className="text-xs w-[100%] font-semibold text-center text-red-500">
                  {error}
                </span>
              )}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => setError("")}
                disabled={pending ? true : false}
              >
                {pending ? "Registering" : "Sign up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
