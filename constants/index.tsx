import Image from "next/image";
import Link from "next/link";

export const techList = [
  {
    id: 0,
    name: "HTML",
    image: (
      <Image src="/assets/logos/html.png" height={150} width={150} alt="hmtl" />
    ),
  },
  {
    id: 1,
    name: "CSS",
    image: (
      <Image src="/assets/logos/css.png" height={150} width={150} alt="css" />
    ),
  },
  {
    id: 2,
    name: "Javascript",
    image: (
      <Image
        src="/assets/logos/javascript.png"
        height={105}
        width={105}
        alt="javascript"
      />
    ),
  },
  {
    id: 3,
    name: "React",
    image: (
      <Image
        src="/assets/logos/react_logo.svg"
        height={105}
        width={105}
        alt="react"
      />
    ),
  },
  {
    id: 4,
    name: "NextJs",
    image: (
      <Image
        src="/assets/logos/next_logo.svg"
        height={105}
        width={105}
        alt="next"
      />
    ),
  },
  {
    id: 5,
    name: "TailwindCSS",
    image: (
      <Image
        src="/assets/logos/tailwind.png"
        height={175}
        width={287}
        alt="tailwind"
      />
    ),
  },
  {
    id: 6,
    name: "ExpressJs",
    image: (
      <Image
        src="/assets/logos/expressjs.png"
        height={150}
        width={150}
        alt="express"
      />
    ),
  },
  {
    id: 7,
    name: "MongoDB",
    image: (
      <Image
        src="/assets/logos/mongodb.png"
        height={640}
        width={480}
        alt="mongodb"
      />
    ),
  },
  {
    id: 8,
    name: "MySQL",
    image: (
      <Image
        src="/assets/logos/mysql.svg"
        height={150}
        width={150}
        alt="mysql"
      />
    ),
  },
  {
    id: 9,
    name: "Git",
    image: (
      <Image src="/assets/logos/git.png" height={150} width={150} alt="git" />
    ),
  },
];

export const appItems = [
  {
    name: "3 Calculator Apps",
    description: (
      <span>
        This is very first idea inspired me to learn programming language. There
        are Comparison App, Interest Calculator, Bill Sharing App.
      </span>
    ),

    demo: "https://nadesh52.github.io/calculator-app",
    sourceCode: "https://github.com/nadesh52/calculator-app",
    image: (
      <Image
        src="/assets/thumbnails/p1.png"
        width={528}
        height={430}
        alt="tmb"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    name: "Pokedex - Pokemon Cyclopedia",
    description: (
      <span>
        A Responsive landing page. javascript fetch/promises technique practice.
        All API data from{" "}
        <span className="font-medium text-red hover:underline">
          <Link href="https://pokeapi.co/">pokeapi.co</Link>
        </span>
        .
      </span>
    ),
    demo: "/pokedex",
    sourceCode:
      "https://github.com/nadesh52/nadesh52.github.io/tree/main/app/(pokemon)",
    image: (
      <Image
        src="/assets/thumbnails/p3.png"
        width={528}
        height={430}
        alt="tmb"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    name: "Ragnarok Landverse Marketplace (Clone)",
    description: (
      <span>
        A clone responsive design from realworld website. The original website
        is:
        <span className="font-medium text-red hover:underline">
          <Link href="https://apps.maxion.gg/roverse-th">
            apps.maxion.gg/roverse-th
          </Link>
        </span>
        .
      </span>
    ),
    demo: "/ro-market",
    sourceCode: "https://github.com/nadesh52/ro-market",
    image: (
      <Image
        src="/assets/thumbnails/ro-market.jpg"
        width={528}
        height={430}
        alt="tmb"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    name: "Online shopping fee calculator",
    description: (
      <span>
        Calculator for seller to calculate fee and profit from each platform
        before selling.
      </span>
    ),
    demo: "/how-to-price/shopee",
    sourceCode: "https://github.com/nadesh52/how-to-price",
    image: (
      <Image
        src="/assets/thumbnails/price.png"
        width={528}
        height={430}
        alt="tmb"
        className="w-full h-full object-cover"
      />
    ),
  },
];
