import { ChangeEvent, useState } from "react";
import { typePokemon } from "@/app/(pokemon)/types/Pokemon";
import Image from "next/image";

function FilterType({ selectedType }: any) {
  const [selectedValue, setSelectedValue] = useState<string>("all");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    selectedType(event.target.value);
  };

  return (
    <div className="mx-auto w-fit rounded bg-base-100 p-4 shadow-md">
      <div className="grid grid-cols-[repeat(7,_30px)] justify-center gap-3 xs:grid-cols-[repeat(9,_30px)] sm:grid-cols-[repeat(10,_30px)]">
        {typePokemon.map((type, i) => (
          <div key={i} className="h-[30px] justify-self-center">
            <label htmlFor={type.name} className="inline-block cursor-pointer">
              <input
                type="radio"
                name="type"
                id={type.name}
                checked={selectedValue === type.name}
                value={type.name}
                onChange={handleChange}
                className="peer hidden"
              />
              
              <Image
                src={require(`@/public/assets/icons/types/${type.name}.png`)}
                alt={`icon-${type.name}`}
                height={30}
                width={30}
                className="grayscale peer-checked:grayscale-0"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterType;
