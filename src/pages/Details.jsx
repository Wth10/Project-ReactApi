import axios from "axios";
import { useParams } from "react-router";
import { useQuery } from "react-query";

import Head from "../components/Head";
import Load from "../components/Load";

export default function Details() {
  const { Id } = useParams();

  const { data, isFetching } = useQuery("details", async () => {
    const url = `https://api.tvmaze.com/shows/${Id}`;
    const res = await axios.get(url);

    return [res.data];
  });

  return (
    <>
      <Head />

      {isFetching && <Load />}

      {Array.isArray(data)
        ? data?.map((x) => {
            return (
              <ul
                className="list-none mt-4 mb-6 pb-6 container mx-auto items-center justify-between"
                key={x.id}
              >
                <div class="flex font-sans">
                  <div class="flex-none w-[15em] relative">
                    <img
                      src={x.image.original}
                      class=" absolute inset-0 object-cover rounded-lg"
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
                            <strong>Gênero: </strong>
                            <span className="boring-text">{x.genres[0]}</span>
                            <span className="boring-text">{x.genres[1]}</span>
                            <span>{x.genres[2]}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex space-x-4 mb-6 text-sm font-medium">
                      <div class="flex-auto flex space-x-4">
                        <p class="text-sm text-slate-300 indent-8">
                          <span
                            dangerouslySetInnerHTML={{ __html: x["summary"] }}
                          ></span>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </ul>
            );
          })
        : false}
    </>
  );
}
