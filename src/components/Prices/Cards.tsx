import Image from "next/image";
import React from "react";

interface cardProps {
  plan: string;
  price: string;
  t1: string;
  t2: string;
  t3: string;
}

function Cards({ plan, price, t1, t2, t3 }: cardProps) {
  return (
    <article className="bg-gray-100 shadow-2xl py-4 px-6 sm:px-8 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto my-4 sm:mx-4">
      <div className="pt-4">
        <h2 className="font-medium text-xl sm:text-2xl text-[#100927D9]">
          {plan}
        </h2>
        <span className="font-semibold text-2xl sm:text-3xl text-[#291E6D]">
          {price}
        </span>
      </div>

      <ul className="pt-4 space-y-3">
        {[t1, t2, t3].map((text, index) => (
          <li key={index} className="flex items-center gap-2">
            <Image src={"likepricecard.svg"} width={20} height={20} alt="Validação de benefício do plano" />
            <p>{text}</p>
          </li>
        ))}
      </ul>

      <div className="pt-4 pb-4">
        <button className="bg-[#4E80FF] w-full h-12 rounded-xl font-semibold text-xl text-white">
          Comece já
        </button>
      </div>
    </article>
  );
}

export default Cards;
