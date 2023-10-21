"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
            <img src="logoejudi.svg" alt="logo Ejudi" className="w-32 h-32" />
          </div>
          <div className="mx-auto">
            <img src="logoaccont.svg" alt="" className="w-32 h-32" />
          </div>
          <div className="mx-auto mt-5">
            <img src="logo59mil.svg" alt="" className="w-32 h-32" />
          </div>
          <div className="mx-auto">
            <img src="logocefet.svg" alt="" className="w-32 h-32" />
          </div>
          <div className="mx-auto">
            <img src="logopublicae.svg" alt="" className="w-32 h-32" />
          </div>
          <div className="mx-auto">
            <img src="logopublicae.svg" alt="" className="w-32 h-32" />
          </div>
          <div className="mx-auto">
            <img src="logopublicae.svg" alt="" className="w-32 h-32" />
          </div>
          <div className="mx-auto">
            <img src="logopublicae.svg" alt="" className="w-32 h-32" />
          </div>
        </Slider>
      </div>
    );
  }
}
