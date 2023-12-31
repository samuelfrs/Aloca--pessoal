import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="lg:flex justify-around mt-20 pb-20 grid gap-4">
      <div className="lg:w-1/3 items-center flex flex-col gap-4 text-center lg:text-left">
        <Image src="logo.svg" width={125} height={41} alt="Logo Alocaí" />
        <p className="text-lg text-[#100927B2]">
          Lorem ipsum dolor sit amet, consetetur sadip
        </p>
        <ul className="flex gap-3">
          <li>
            <a
              href="https://www.instagram.com/nossanavegti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="instagram.svg"
                width={30}
                height={30}
                alt="Link para Instagram"
                className="cursor-pointer"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/gti-engenharia-jr-/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="linkedin.svg"
                width={30}
                height={30}
                alt="Link para LinkedIn"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/gti.ufc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="facebook.svg"
                width={30}
                height={30}
                alt="Link para Facebook"
              />
            </a>
          </li>
          <li>
            <a href="mailto:gtijrmkt@gmail.com">
              <Image
                src="email.svg"
                width={30}
                height={30}
                alt="Link para Email"
              />
            </a>
          </li>
        </ul>
      </div>

      <nav className="lg:w-1/6 flex flex-col gap-2 text-center lg:text-left">
        <h2 className="font-medium text-xl text-[#100927F2]">Contatos</h2>
        <p className="font-medium text-lg text-[#100927B2]">
          Telefone: +55 85 912312312
        </p>
        <p className="font-medium text-lg text-[#100927B2]">
          Email: gtijrmkt@gmail.com
        </p>
      </nav>

      <nav className="lg:w-1/6 flex flex-col gap-2 text-center lg:text-left">
        <h2 className="font-medium text-xl text-[#100927F2]">Contatos</h2>
        <p className="font-medium text-lg text-[#100927B2]">
          Telefone: +55 85 912312312
        </p>
        <p className="font-medium text-lg text-[#100927B2]">
          Email: gtijrmkt@gmail.com
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
