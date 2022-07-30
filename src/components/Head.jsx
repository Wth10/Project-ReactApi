import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Head() {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dark:bg-gray-900">
      <div>
        <div className="relative">
          {/* For md screen size */}
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex"
            } bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}
          >
            <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
              <div>
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9984 18.9999L14.6484 14.6499"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder=" Search...."
                className="text-sm rounded ml-1 border border-transparent w-[29em] h-[2em] bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
              />
            </div>
          </div>

          {/* For md screen size */}
          {/* For large screens */}
          <div className="bg-black px-6 py-9 pb-6">
            <div className="container mx-auto flex items-center justify-between">
              <h1 className="md:w-2/12 font-consolas  text-2xl cursor-pointer text-gray-800 dark:text-white">
                DEV.MOVIE
              </h1>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <Link
                    to="/"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Lista De Filmes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Pesquisa Filme
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teste"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  ></Link>
                </li>
                <li>
                  <a
                    href=""
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  ></a>
                </li>
                <li>
                  <a
                    href=""
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  ></a>
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center"></div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8"></div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For small screen celular */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3">
                <div>
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9984 18.9999L14.6484 14.6499"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder=" Search Celular"
                  className="text-sm rounded ml-1 border border-transparent w-[19em] h-[2em] bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                />
              </div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a
                    href=""
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Home
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Furniture
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Lookbook
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Support
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
