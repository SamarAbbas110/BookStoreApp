import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/list.json";
import axios from "axios";
import Cards from "./Cards";
import { useState, useEffect } from "react";

function Freebook() {
  const [book, setbook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res= await axios.get("http://localhost:4001/book")
        console.log(res.data);
        const data = List.filter((data) => data.category === "free");
        setbook(data);
      } catch (error) {
        console.log("Error:" , error);
      }
    }
    getBook();
  }, [])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-3">We Offered Free Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            libero.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} /> // Check if `item` is defined
            ))}
          </Slider>

        </div>
      </div>
    </>
  );
}

export default Freebook;
