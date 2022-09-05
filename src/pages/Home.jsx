import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import Head from "../components/Head";
import Footer from "../components/Footer";
import Load from "../components/Load";

export default function Home() {
  const { data, isFetching } = useQuery(
    "show",
    async () => {
      const url = "https://api.tvmaze.com/shows";
      const res = await axios.get(url);
      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      cacheTime: 5 * 60 * 1000, // 5 minute
      staleTime: 5 * 60 * 1000,
    }
  );

  const [ItensPerPage, setItensPerPage] = useState(15);
  const [CurrentPage, setCurrentPage] = useState(0);

  const Pages = Math.ceil(data?.length / ItensPerPage);
  const StartIndex = CurrentPage * ItensPerPage;
  const EndIndex = StartIndex + ItensPerPage;
  const CurrentItens = data?.slice(StartIndex, EndIndex);

  return (
    <>
      <Head />
      {isFetching && <Load />}

      <div className="py-12 px-2 container mx-auto items-center justify-between grid gap-8 grid-cols-2 xl:grid md:gap-8 md:grid-cols-5 font-mon text-xs font-bold bg-stripes-purple rounded-lg text-center">
        {CurrentItens?.map((x) => {
          return (
            <div className="content">
              <div
                className="flex-1 p-2 h-full justify-content align-items bg-[#1e293b] shadow-lg rounded-lg hover:bg-blue-600"
                key={x.id}
              >
                <span>
                  <img className="rounded-lg mx-auto" src={x.image.medium} />
                </span>
                <Link to={`details/${x.id}`}>{x.name}</Link>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
