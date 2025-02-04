import Image from "next/image";
import { capitalize } from "@/app/(home)/interest/utils/capitalize";

const Card = ({ pokemon }: any) => {
  return (
    <div className="group flex flex-col items-center justify-center rounded-md bg-base-100 p-2 shadow-md transition hover:scale-105 hover:shadow-xl">
      <Image
        src={pokemon.sprite}
        alt="sprite"
        width={100}
        height={100}
        className="delay-75 duration-100 group-hover:scale-125"
      />
      <p className="z-40 bg-base-100 bg-opacity-40 font-josefin font-medium text-primary transition">
        {capitalize(pokemon.name)}
      </p>
    </div>
  );
};

export default Card;
