import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";

import Head from "../components/Head";
import Load from "../components/Load";

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
    }
  );

  return (
    <>
      <Head />
      <div className="h-full">
        <div class="m-5 text-3xl font-extrabold text-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Qual Nome Do Filme?
          </span>
        </div>
        <form className="container mx-auto items-center justify-between">
          <input
            type="text"
            value={search}
            onChange={(x) => setsearch(x.target.value)}
            className="sm:flex items-center w-full text-left space-x-3 px-4 h-9 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 mb-10"
          />
        </form>

        {isFetching && <Load />}

        <div className="m-5 container mx-auto items-center justify-between grid gap-8 grid-cols-6 font-mon text-xs font-bold bg-stripes-purple rounded-lg text-center">
          {Array.isArray(data)
            ? data?.map((x) => {
                return (
                  <div className="content" key={x.score}>
                    <div className="flex-1 p-2 h-full justify-content align-items bg-[#1e293b] shadow-lg rounded-lg hover:bg-blue-600">
                      <span>
                        <img className="rounded-lg" src={x.show.image.medium} />
                      </span>
                      <Link to={`details/${x.show.id}`}>{x.show.name}</Link>
                    </div>
                  </div>
                );
              })
            : false}
        </div>
      </div>
    </>
  );
}
