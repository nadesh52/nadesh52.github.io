"use client";
// import {
//   faArrowLeftLong,
//   faArrowRightLong,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoadingBlock from "./LoadingBlock";
import logo from "@/public/assets/logos/pokeball_logo.png";

type NavPoke = {
  id: number;
  sprite: string;
};

const initNavPoke: NavPoke = {
  id: 0,
  sprite: "",
};

const firstIdx = 1;
const lastIdx = 1025;

const URL = "https://pokeapi.co/api/v2/pokemon/";

const NavPokemon = ({ pokemon, onNewNav }: any) => {
  const [prev, setPrev] = useState<NavPoke>(initNavPoke);
  const [next, setNext] = useState<NavPoke>(initNavPoke);
  const [isPending, setIsPending] = useState<boolean>(true);

  const fetchNavPokemon = async (nav: any) => {
    setIsPending(true);

    if (
      nav.id > firstIdx ||
      nav.id < lastIdx ||
      nav.id === firstIdx ||
      nav.id === lastIdx
    ) {
      const resPrev = await fetch(`${URL}${nav.id - 1}`);
      const jsonPrev = await resPrev.json();

      const newPrev: NavPoke = {
        id: jsonPrev.id,
        sprite: jsonPrev.sprites.front_default,
      };

      const resNext = await fetch(`${URL}${nav.id + 1}`);
      const jsonNext = await resNext.json();

      const newNext: NavPoke = {
        id: jsonNext.id,
        sprite: jsonNext.sprites.front_default,
      };

      setPrev(newPrev);
      setNext(newNext);
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchNavPokemon(pokemon);
  }, [pokemon]);

  return (
    <>
      {isPending ? (
        <LoadingBlock />
      ) : (
        <>
          {pokemon.id >= firstIdx && (
            <button
              className="flex items-center text-skin-base"
              onClick={() => onNewNav(prev.id)}
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>

              <Image
                src={prev.sprite ? prev.sprite : logo}
                alt=""
                height={96}
                width={96}
              />
            </button>
          )}

          {pokemon.id <= lastIdx && (
            <button
              className="flex items-center text-skin-base"
              onClick={() => onNewNav(next.id)}
            >
              <Image
                src={next.sprite ? next.sprite : logo}
                alt=""
                height={96}
                width={96}
              />
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
        </>
      )}
    </>
  );
};

export default NavPokemon;
