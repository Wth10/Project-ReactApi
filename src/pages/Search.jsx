import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import Footer from "../components/Footer";
import axios from "axios";

export default function Search() {
  const [search, setsearch] = useState("");

  const { data, isFetching } = useQuery(
    "search",
    async () => {
      const url = `https://api.tvmaze.com/search/shows?q=${search}`;
      const res = await axios.get(url);

      return res.data;
    },
    {
      refetchOnWindowFocus: true,
      // refetchOnMount: true,
      // refetchInterval: 9000,
      // refetchOnReconnect: true,
      // notifyOnChangeProps: "tracked",
      // notifyOnChangePropsExclusions: String[search],
    }
  );

  return (
    <>
      <Head className="mb-5" />

      <h1 className="text-3xl text-center m-5">Welcome Search</h1>
      <form className="mt-6 m-4">
        <input
          type="text"
          value={search}
          onChange={(x) => setsearch(x.target.value)}
          placeholder="Nome Do Filme"
          className="sm:flex items-center w-full text-left space-x-3 px-4 h-9 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 mb-10"
        />
      </form>

      {isFetching && (
        <div className="m-8 flex items-center justify-center">
          <span className="inline-flex items-center px-4 py-2 font-semibold leading-6 shadow rounded-md  bg-[#0ea5e9] transition ease-in-out duration-150 cursor-not-allowed">
            <svg
              class="animate-spin -ml-2 mr-6 h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Carregando
          </span>
        </div>
      )}

      <div className="m-5 py-12 grid gap-8 grid-cols-6 font-mon text-xs font-bold bg-stripes-purple rounded-lg text-center">
        {Array.isArray(data) ? (
          data?.map((x) => {
            return (
              <div className="content" key={x.show.id}>
                <div className="flex-1 p-2 h-full justify-content align-items bg-[#1e293b] shadow-lg rounded-lg hover:bg-blue-600">
                  <span>
                    <img className="rounded-lg " src={x.show.image.medium} />
                  </span>
                  <Link to={`details/${x.show.id}`}>{x.show.name}</Link>
                </div>
              </div>
            );
          })
        ) : (
          <span>Erroo</span>
        )}
      </div>

      <Footer />
    </>
  );
}
