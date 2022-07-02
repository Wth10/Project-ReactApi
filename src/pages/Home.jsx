import { useQuery } from "react-query";
import axios from "axios";
import Head from "../components/Head";

export default function Home() {
  const { data, isFetching } = useQuery(
    "filme",
    async () => {
      const url = "https://api.tvmaze.com/search/shows?q=batman";
      const res = await axios.get(url);

      return res.data;
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <>
      <Head />

      {isFetching && (
        <p className="text-emerald-400 text-3xl text-center">Carregando....</p>
      )}

      {data?.map((x) => {
        return (
          <ul className="list-none mt-4 mb-6 pb-6 border-b border-slate-200">
            <div class="flex font-sans">
              <div class="flex-none w-48 relative">
                <img
                  src={x.show.image.medium}
                  class="ml-2 absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                  <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                    {x.show.name}
                  </h1>
                  <div class="w-full flex-none text-sm font-medium text-white mt-2 underline underline-offset-8 decoration-sky-500">
                    <a href={x.show.url}>Detalhes</a>
                  </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                  <div class="space-x-2 flex text-sm">
                    <div class="space-x-3 flex text-sm font-medium underline underline-offset-8 decoration-sky-500">
                      <p>
                        <strong>Genero: </strong>
                        <span className="boring-text">{x.show.genres[0]}</span>
                        <span className="boring-text">{x.show.genres[1]}</span>
                        <span>{x.show.genres[2]}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex space-x-4 mb-6 text-sm font-medium">
                  <div class="flex-auto flex space-x-4">
                    <p class="text-sm text-slate-300">
                      <article>{x.show.summary}</article>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </ul>
        );
      })}
    </>
  );
}
