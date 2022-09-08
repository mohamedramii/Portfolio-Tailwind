import React from "react";

const About = () => {
  return (
    <div
      name='about'
      className=' bg-[#0a192f] w-full h-screen border-2 border-sky-500 text-gray-300'>
      <div className='border-2 border-sky-100 flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold '>
              <p>Hi,I'm Niceto meet to you please take a look around</p>
            </div>
            <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore voluptates quam illo facere illum voluptatum quae itaque? Eos laborum mollitia obcaecati enim, quasi dolores facere odio quidem, beatae est commodi.
            </p>

            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
