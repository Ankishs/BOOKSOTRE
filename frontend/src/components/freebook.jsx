import React from 'react';
import list from '../../public/list.json';
import Slider from 'react-slick'; 
import Cards from '../components/Cards';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {
  const filterData = React.useMemo(() => list.filter((data) => data.category === "free"), [list]);

  const settings = React.useMemo(() => ({
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }), []);

  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
        <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti nemo fuga quos commodi laborum eaque animi in blanditiis! Rerum!</p>
      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Freebook;
