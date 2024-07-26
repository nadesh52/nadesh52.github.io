"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/public/assets/logos/pokeball_logo.png";
import padNumber from "@/utils/padNumber";
import randomNumber from "@/utils/randomNumber";
import getTheme from "@/utils/getTheme";
import getRandomFavor from "@/utils/getRandomFavor";
import getPokemonName from "@/utils/getPokemonName";
import Image from "next/image";
import LoadingBlock from "./components/LoadingBlock";
import NavPokemon from "./components/NavPokemon";
import EvoChain from "./components/EvoChain";
import DiscoverButton from "./components/DiscoverButton";
import { typeColor } from "@/types/TypeColor";

const initPoke = {
  id: 0,
  name: "",
  types: [],
  artwork: "",
  sprites: {
    front_default: "",
    back_default: "",
    front_shiny: "",
    back_shiny: "",
  },
  flavor_text: "",
  flavor_version: "",
};

const URL = "https://pokeapi.co/api/v2/pokemon/";

const titleStr =
  "While most Pokémon resemble animals and may behave like them,there are many that do not resemble animals at all, taking onother forms such as plants, inanimate objects, machines,human-like forms, or other more enigmatic and exoticappearances.";

const titleStr2 =
  "Pokémon inhabit an extremely diverse range of habitats,ranging from the driest deserts to the lushest jungles, thedeepest oceans to the highest mountains and everything else inbetween, even outer space and other dimensions.";

const LandingPage = () => {
  const [pokeId, setPokeId] = useState(randomNumber);
  const [pokemon, setPokemon] = useState(initPoke);
  const [evoData, setEvoData] = useState();
  const [inputText, setInputText] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [theme, setTheme] = useState("");

  const fetchData = async (pokeId: string) => {
    try {
      setIsPending(true);
      const res = await fetch(`${URL}/${pokeId}`);
      const jsonData = await res.json();

      const resSpecies = await fetch(jsonData.species.url);
      const jsonSpecies = await resSpecies.json();

      const pokemonName = getPokemonName(jsonSpecies.names);
      const flavorText = getRandomFavor(jsonSpecies);

      const poke = {
        id: jsonData.id,
        name: pokemonName,
        sprites: jsonData.sprites,
        artwork: jsonData.sprites.other["official-artwork"]["front_default"],
        types: jsonData.types,
        flavor_text: flavorText.flavor_text,
        flavor_version: flavorText.version.name,
      };

      setTheme(getTheme(jsonData));
      setEvoData(jsonSpecies);
      setPokemon(poke);
      setIsPending(false);
    } catch (error) {
      throw error;
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setPokeId(inputText);
    setInputText("");
  };

  useEffect(() => {
    fetchData(pokeId);
  }, [pokeId]);

  return (
    <article className={`${theme} bg-white`}>
      <section className="space-y-4 pt-4">
        <nav className="flex items-center justify-between bg-white px-4">
          <div>
            <Link href="/pokemon-app">
              <Image src={logo} alt="" height={40} width={40} />
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="/pokemon-app/table">
              <p className="w-fit rounded-md bg-skin-fill-light px-2 py-1 font-josefin text-lg font-medium transition hover:bg-skin-fill-dark hover:text-skin-base">
                Pokemon Table
              </p>
            </Link>
            <Link href="/">
              <p className="w-fit rounded-md bg-black px-2 py-1 font-josefin text-lg font-medium text-white">
                Home
              </p>
            </Link>
          </div>
        </nav>

        {isPending ? (
          <LoadingBlock />
        ) : (
          <>
            <section className="bg-gradient-to-b from-white to-rose-100 p-4">
              <div className="mx-auto max-w-sm">
                <div>
                  <p className="text-center font-josefin text-4xl font-extrabold">
                    Random landing page by Pokemon identity
                  </p>
                  <p className="text-center">try it now!</p>
                </div>

                <form
                  onSubmit={onSubmit}
                  className="my-2 flex items-center justify-center gap-4"
                >
                  <label>
                    <input
                      onChange={(e: any) => setInputText(e.target.value)}
                      value={inputText}
                      type="number"
                      autoComplete="off"
                      placeholder="Enter Pokemon number"
                      className="h-11 w-full rounded-xl px-4 shadow-md outline-none ring-1 ring-secondary ring-opacity-40 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
                    />
                  </label>
                  <button
                    className="rounded-full p-2 text-skin-type transition-all hover:bg-slate-400 hover:text-white"
                    onClick={() => setPokeId(randomNumber)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </section>

            <section className="mx-auto grid max-w-screen-md grid-cols-1 px-4 sm:grid-cols-2">
              <div className="order-2 mx-auto max-w-screen-xs content-center space-y-4 justify-self-start font-josefin sm:order-1 sm:mx-0 sm:max-w-full">
                <p className="text-4xl font-medium">{pokemon.name}</p>

                <div className="flex items-center gap-2">
                  <p className="w-fit rounded bg-black px-2 py-1 text-lg font-medium tracking-wider text-white">
                    #{padNumber(pokemon.id)}
                  </p>
                  {pokemon.types.map((t: any, i: number) => (
                    <p
                      key={i}
                      className="w-fit rounded px-2 py-1 text-lg text-white"
                      id={t.type.name}
                      style={{ backgroundColor: typeColor[t.type.name] }}
                    >
                      {t.type.name.toUpperCase()}
                    </p>
                  ))}
                </div>
                <p className="indent-4 text-lg">{pokemon.flavor_text}</p>
                <p className="text-right">Pokemon {pokemon.flavor_version}</p>
              </div>

              <div className="order-1 content-center justify-self-center sm:order-2 sm:justify-self-end">
                <Image
                  src={pokemon.artwork ? pokemon.artwork : logo}
                  alt=""
                  height={250}
                  width={250}
                />
              </div>
            </section>

            <section className="bg-skin-fill-light">
              <div className="mx-auto max-w-screen-md px-4">
                <EvoChain
                  speciesData={evoData}
                  onEvoClick={(e: any) => setPokeId(e)}
                />
              </div>
            </section>

            <section className="mx-auto grid max-w-screen-md grid-cols-1 px-4 sm:grid-cols-2">
              <div className="order-2 content-center justify-self-center sm:order-1">
                <Image
                  src="https://archives.bulbagarden.net/media/upload/thumb/a/a7/PSMD_poster.png/250px-PSMD_poster.png"
                  alt="https://archives.bulbagarden.net/media/upload/thumb/a/a7/PSMD_poster.png/250px-PSMD_poster.png"
                  height={200}
                  width={200}
                />
              </div>

              <div className="order-1 mx-auto mb-4 flex max-w-screen-xs flex-col items-center space-y-4 sm:order-2 sm:mx-0 sm:mb-0 sm:max-w-full sm:items-start">
                <p className="indent-8">{titleStr}</p>
                <p className="indent-8">{titleStr2}</p>
                <DiscoverButton />
              </div>
            </section>

            <section className="bg-skin-fill-light">
              <div className="mx-auto flex max-w-screen-md items-center justify-between px-4">
                <NavPokemon
                  pokemon={pokemon}
                  onNewNav={(e: any) => setPokeId(e)}
                />
              </div>
            </section>
          </>
        )}
      </section>
    </article>
  );
};
export default LandingPage;
