import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="bg-white mt-32">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-poppins font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium placeholder:font-poppins placeholder:font-light"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 font-poppins">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-16 lg:px-5 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-[#0081FE] p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
              href="#header"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img src="icons/logo-nav.png" alt="" />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left font-poppins">
              Veen altered in some form, injected humor, or random words. Explore our cutting-edge technology for a transformative future.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <NavLink
                  className="text-gray-700 transition hover:text-gray-700/75"
                  to={"/shop"}
                >
                  {" "}
                  Shop{" "}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-700 transition hover:text-gray-700/75 font-poppins"
                  to={"/about-us"}
                >
                  {" "}
                  About Us{" "}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-700 transition hover:text-gray-700/75 font-poppins"
                  to={"/contact-us"}
                >
                  {" "}
                  Contact Us{" "}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-700 transition hover:text-gray-700/75 font-poppins"
                  to={"/blog"}
                >
                  {" "}
                  Blog{" "}
                </NavLink>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right font-poppins">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
