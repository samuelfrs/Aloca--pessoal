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
    <div className="bg-white shadow-2xl py-4 sm:px-8 sm:py-6 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto my-4 sm:mx-4 sm:my-0">
      <div className="pt-4">
        <h1 className="font-medium text-xl text-[#100927D9]">
          {plan}
        </h1>
        <span className="font-semibold text-2xl text-[#291E6D]">
          {price}
        </span>
      </div>

      <div className="pt-4 space-y-3">
        <div className="flex items-center gap-2">
          <Image src={"likepricecard.svg"} width={20} height={20} alt="Validação de benefício do plano" />
          <p>{t1}</p>
        </div>

        <div className="flex items-center gap-2">
          <Image src={"likepricecard.svg"} width={20} height={20} alt="Validação de benefício do plano" />
          <p>{t2}</p>
        </div>

        <div className="flex items-center gap-2">
          <Image src={"likepricecard.svg"} width={20} height={20} alt="Validação de benefício do plano" />
          <p>{t3}</p>
        </div>
      </div>

      <div className="pt-4 pb-4">
        <button className="bg-[#4E80FF] w-full h-12 rounded-xl font-semibold text-xl text-white">
          Comece já
        </button>
      </div>
    </div>
  );
}

export default Cards;
