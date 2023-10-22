"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  title: string;
  desc: string;
  img: string;
  name: string;
  company: string;
  alt: string;
}

export default class MultipleItems extends Component {
  testimonials: Testimonial[] = [
    {
      title: "Sistema incrível!",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
      img: "johndoe.svg",
      name: "John Doe",
      company: "Empresa 1",
      alt: "John Doe",
    },
    {
      title: "Sistema incrível!",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
      img: "robertosilva.svg",
      name: "Roberto Silva",
      company: "Empresa 2",
      alt: "Roberto Silva",
    },
    {
      title: "Sistema incrível!",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
      img: "robertosilva.svg",
      name: "Roberto Silva",
      company: "Empresa 2",
      alt: "Roberto Silva",
    },
    {
      title: "Sistema incrível!",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
      img: "robertosilva.svg",
      name: "Roberto Silva",
      company: "Empresa 2",
      alt: "Roberto Silva",
    },

  ];

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, // Número de slides a serem exibidos em telas grandes
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // Número de slides a serem exibidos em telas médias
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1, // Número de slides a serem exibidos em telas pequenas
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="px-20 py-10 bg-[#7951F91A]">
        <h2 className="font-medium text-4xl w-1/3">
          <span className="relative">
          <span className="relative z-10">Depoimentos </span>
          <span className="absolute w-48 rounded-lg inset-0 bg-[#7951F91A] z-0 transform"></span>
          </span>
          dos nossos clientes
        </h2>
        <Slider {...settings} className="pt-12">
          {this.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              desc={testimonial.desc}
              img={testimonial.img}
              name={testimonial.name}
              company={testimonial.company}
              alt={testimonial.alt}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
