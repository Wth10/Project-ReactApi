import Head from "../components/Head";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import axios from "axios";
import Footer from "../components/Footer";

export default function Details() {
  const { id } = useParams();

  const { data, isFetching } = useQuery("details", async () => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const res = await axios.get(url);

    return [res.data];
  });

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

      {Array.isArray(data) ? (
        data?.map((x) => {
          return (
            <ul className="list-none mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="flex font-sans">
                <div class="flex-none w-48 relative">
                  <img
                    src={x.image.medium}
                    class="ml-2 absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <form class="flex-auto p-6">
                  <div class="flex flex-wrap">
                    <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                      {x.name}
                    </h1>
                    <div class="w-full flex-none text-sm font-medium text-white mt-2 underline underline-offset-8 decoration-sky-500">
                      <a href={x.url}>Detalhes</a>
                    </div>
                  </div>
                  <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div class="space-x-2 flex text-sm">
                      <div class="space-x-3 flex text-sm font-medium underline underline-offset-8 decoration-sky-500">
                        <p>
                          <strong>Genero: </strong>
                          <span className="boring-text">{x.genres[0]}</span>
                          <span className="boring-text">{x.genres[1]}</span>
                          <span>{x.genres[2]}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex space-x-4 mb-6 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                      <p class="text-sm text-slate-300">
                        <article>{x["summary"]}</article>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </ul>
          );
        })
      ) : (
        <span>Erroo</span>
      )}
    </>
  );
}
