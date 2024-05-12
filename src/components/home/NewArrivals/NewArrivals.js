import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="JUDY FLOORS AND SURFACES"
            price="10.00"
            color=""
            badge={true}
            des="Judy Floors and surfaces is available in seven fragrances: rose, lemon, floral, lavender, apple, household soap and breeze."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="JUDY FLOORS AND SURFACES"
            price="10.00"
            color=""
            badge={true}
            des="Judy Floors and surfaces is available in seven fragrances: rose, lemon, floral, lavender, apple, household soap and breeze."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="JUDY FLOORS AND SURFACES"
            price="10"
            color=""
            badge={true}
            des="Judy Floors and surfaces is available in seven fragrances: rose, lemon, floral, lavender, apple, household soap and breeze."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="JUDY FLOORS AND SURFACES"
            price="10.00"
            color=""
            badge={false}
            des="Judy Floors and surfaces is available in seven fragrances: rose, lemon, floral, lavender, apple, household soap and breeze."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="JUDY FLOORS AND SURFACES"
            price="10.00"
            color=""
            badge={false}
            des="Judy Floors and surfaces is available in seven fragrances: rose, lemon, floral, lavender, apple, household soap and breeze."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
