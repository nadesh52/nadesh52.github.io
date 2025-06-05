"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logos/pokeball_logo.png";
import { Pokemon } from "../../types/Pokemon";
import { Generation, generations } from "../../types/Generation";
import GenSelection from "../components/GenSelection";
import FilterType from "../components/FilterType";
import Card from "../components/Card";
import useFetcher from "../../hooks/useFetcher";

const PokemonsTable = () => {
  const [selectedTypes, setSelectedTypes] = useState<string>("all");
  const [gens, setGens] = useState<Generation>(generations[0]);

  const { pokemonsData, isPending, setRefetch } = useFetcher(gens);

  const handleSelectGen = (e: any) => {
    setGens(e);
    setSelectedTypes("all");
    setRefetch({});
  };

  return (
    <section className="bg-skin-white">
      <nav className="flex items-center justify-between p-4">
        <div className="transition hover:rotate-45">
          <Link href="/pokedex">
            <Image src={logo} alt="" height={40} width={40} />
          </Link>
        </div>
        <Link href="/pokedex" className="btn btn-outline btn-primary">
          Home
        </Link>
      </nav>

      <div className="mx-auto space-y-4">
        <GenSelection selectedGen={handleSelectGen} />
        <FilterType selectedType={setSelectedTypes} />
        <p className="text-center font-josefin text-2xl font-medium text-secondary">
          {gens.region.toUpperCase()}
        </p>
      </div>

      {isPending ? (
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-3 p-4 transition-all sm:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 30 }).map((_, idx: any) => (
            <div key={idx} className="skeleton h-36 w-full"></div>
          ))}
        </div>
      ) : (
        <>
          <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-3 p-4 transition-all sm:grid-cols-4 lg:grid-cols-6">
            {selectedTypes === "all" ? (
              <>
                {pokemonsData.map((pokemon: Pokemon) => (
                  <Card key={pokemon.id} pokemon={pokemon} />
                ))}
              </>
            ) : (
              <>
                {pokemonsData
                  .filter((pokemon) => {
                    return pokemon.types.find((type: any) => {
                      return type.type.name === selectedTypes;
                    });
                  })
                  .map((pokemon: Pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                  ))}
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default PokemonsTable;
