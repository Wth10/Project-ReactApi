import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import Head from "../components/Head";
import Footer from "../components/Footer";

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

  return (
    <>
      <Head />
      {isFetching && (
        <div className="m-8 flex items-center justify-center">
          <span className="inline-flex items-center px-4 py-2 font-semibold leading-6 shadow rounded-md  bg-[#0ea5e9] hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed">
            <svg
              className="animate-spin -ml-2 mr-6 h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokewidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Carregando
          </span>
        </div>
      )}

      <div className="m-5 py-12 grid gap-8 grid-cols-6 font-mon text-xs font-bold bg-stripes-purple rounded-lg text-center">
        {data?.map((x) => {
          return (
            <div className="content">
              <div
                className="flex-1 p-2 h-full justify-content align-items bg-[#1e293b] shadow-lg rounded-lg hover:bg-blue-600"
                key={x.id}
              >
                <span>
                  <img className="rounded-lg" src={x.image.medium} />
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
