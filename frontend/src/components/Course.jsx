import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards";
import {Link} from "react-router-dom"


function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  md:text-4xl'>We're delighted to have you  <span className='text-pink-500'> Here! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error quaerat rem at vero illum ea maiores distinctio hic, aperiam ex molestias illo. Illo voluptates, ab eaque iste explicabo quidem. Ab consequuntur, voluptatibus nemo delectus dolores fugit maxime assumenda possimus consequatur velit corrupti eveniet enim quos perspiciatis nihil, fugiat quo!</p>

          <Link to="/"><button className='mt-6 bg-pink-500 text-white rounded-md py-2 px-4 hover:bg-pink-800 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course;
