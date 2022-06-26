import React, { useState } from "react";

export default function Search() {
const [busca, setBusca] = useState("");

const frutas = [
"Banana",
"Maça",
"Pera",
"laranja",
"uva",
"kiwi",
"tangerina",
"melancia",
];

const lowerBusca = busca.toLowerCase();
const frutasFiltradas = frutas.filter((fruta) =>
fruta.toLowerCase().includes(lowerBusca)
);

return (
<>
<h1>Hello World</h1>
<div className="mt-6">
<input
type="text"
value={busca}
onChange={(x) => setBusca(x.target.value)}
placeholder="search"
className=" sm:flex items-center w-72 text-left space-x-3 px-4 h-9 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
/>
</div>
<ul>
{frutasFiltradas.map((fruta) => {
return (
<>
<ul className="list-disc">
<li className="ml-4" key={fruta}>
{fruta}
</li>
</ul>
</>
);
})}
</ul>
</>
);
}
