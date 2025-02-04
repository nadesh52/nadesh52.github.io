import { useEffect, useState } from "react";

export default function useFetcher(gens: any) {
  const [pokemonsData, setPokemonsData] = useState<any[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [refetch, setRefetch] = useState({});
  const API_URL = `https://pokeapi.co/api/v2/pokemon`;

  const { offset, limit } = gens;

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const res = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
      const jsonData = await res.json();

      const allPokemon = jsonData.results.map(async (p: any) => {
        const fetchPokemon = await fetch(p.url);
        const pokemonData = await fetchPokemon.json();

        const pokemon = {
          id: pokemonData.id,
          name: pokemonData.name,
          height: pokemonData.height,
          weight: pokemonData.weight,
          types: pokemonData.types,
          sprite:
            pokemonData.sprites.other["official-artwork"]["front_default"],
        };
        return pokemon;
      });

      const p = Promise.all(allPokemon).then((values) => {
        return values;
      });

      setPokemonsData(await p);
      setIsPending(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  return { pokemonsData, isPending, setRefetch };
}
