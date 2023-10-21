"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'; // Importe o componente Image

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    return (
      <div className="text-center px-20">
        <h2 className="text-center mb-10 mt-10">Alguns dos nossos parceiros</h2>
        <Slider {...settings}>
          <div className="mx-auto">
            <Image src="/logoejudi.svg" alt="logo Ejudi" width={128} height={128} /> 
          </div>
          <div className="mx-auto">
            <Image src="/logoaccont.svg" alt="logo Accont" width={128} height={128} />
          </div>
          <div className="mx-auto mt-5">
            <Image src="/logo59mil.svg" alt="logo 59Mil" width={128} height={128} />
          </div>
          <div className="mx-auto">
            <Image src="/logocefet.svg" alt="logo CEFET" width={128} height={128} />
          </div>
          <div className="mx-auto">
            <Image src="/logopublicae.svg" alt="logo Publicae" width={128} height={128} />
          </div>
          <div className="mx-auto">
            <Image src="/logopublicae.svg" alt="logo Publicae" width={128} height={128} />
          </div>
          <div className="mx-auto">
            <Image src="/logopublicae.svg" alt="logo Publicae" width={128} height={128} />
          </div>
          <div className="mx-auto">
            <Image src="/logopublicae.svg" alt="logo Publicae" width={128} height={128} />
          </div>
        </Slider>
      </div>
    );
  }
}
