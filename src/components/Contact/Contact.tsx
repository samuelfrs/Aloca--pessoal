// https://www.youtube.com/watch?v=GTiuAm6S-OU

"use client";
import React, { useState } from "react";

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    console.log("Dados do formulário:", formData);
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-3 bg-[#7951F930] rounded-xl py-10 px-10">
        <div className="flex flex-col justify-around text-center gap-3 h-fit w-fit">
          <h1 className="font-medium text-4xl sm:text-5xl text-[#291E6D]">
            Comece agora a utilizar o{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Alocaí</span>
              <span className="absolute inset-0 bg-[#5420fd1a] z-0 transform w-36 rounded-lg"></span>
            </span>
            !
          </h1>
          <span className="text-xl text-[#100927F2]">
            Tem alguma dúvida? Contate-nos!
          </span>
        </div>
        <div className="w-1/2 mx-auto">
          <form onSubmit={sendEmail} className="flex flex-col gap-3">
            <input
              className="input rounded-xl text-center h-8"
              type="text"
              placeholder="Digite seu nome"
              name="name"
              onChange={handleChange}
              value={name}
              required
            />

            <input
              className="input rounded-xl text-center h-8"
              type="email"
              placeholder="Digite seu email"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />

            <textarea
              className="input rounded-xl text-center h-36" // Ajusta a altura
              placeholder="Digite sua mensagem..."
              name="message"
              onChange={handleChange}
              value={message}
              required
            />

            <div className="text-center">
              <input
                className="button rounded-xl bg-[#7951F9] w-28 h-11 text-gray-100 mx-auto font-semibold text-xl"
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
