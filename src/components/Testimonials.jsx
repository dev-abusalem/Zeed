import React from "react";
import Slider from "react-slick";
import Wrapper from "../layouts/Wrapper";
import avt1 from "../assets/images/avt1.jpg"
import avt2 from "../assets/images/avt2.jpg"
import {FaQuoteRight} from "react-icons/fa"
export default function Testimonials() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <section className="py-10 md:py-16 md:mt-6">
    <Wrapper>
        <div>
            <div className="text-center mb-16">
                    <h1 className='text-3xl md:leading-[3.5rem] font-semibold md:text-5xl '>
                        What 
                    <span className='text-colthree font-bold'> Clients Say ?</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, commodi?</p>
            </div>
            <Slider {...settings}>
               <div>
                <div className="flex relative justify-start items-center gap-3 w-full md:w-[800px] mx-auto">
                    <div className="">
                        <img src={avt1} alt="avt1" className="w-[70%] md:w-[50%] h-auto border-2" />
                        <h2 className="md:text-xl font-bold mt-3">JOHN DOE</h2>
                        <h3 className="md:text-lg font-semibold py-1">CEO</h3>
                        <p>Facebook</p>
                    </div>
                    <div className="text-left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque assumenda quia inventore quae. Quo, id delectus! Incidunt atque aut, voluptatum neque iure architecto, deserunt minima nemo ullam odit vitae.</p>
                    
                        <FaQuoteRight className="md:text-4xl font-semibold absolute top-10 right-1 opacity-40 transform -translate-x-1 -translate-y-10"/>
                    </div>

                </div>
               </div>

               <div>
                <div className="flex relative justify-start items-center gap-3 md:gap-8 w-full md:w-[800px] mx-auto">
                    <div className="">
                        <img src={avt2} alt="avt2" className="w-[70%] md:w-[50%] h-auto border-2" />
                        <h2 className="md:text-xl font-bold mt-3">JOHN DOE</h2>
                        <h3 className="md:text-lg font-semibold py-1">CEO</h3>
                        <p>Facebook</p>
                    </div>
                    <div className="text-left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque assumenda quia inventore quae. Quo, id delectus! Incidunt atque aut, voluptatum neque iure architecto, deserunt minima nemo ullam odit vitae.</p>
                    
                        <FaQuoteRight className="md:text-4xl font-semibold absolute top-10 right-1 opacity-40 transform -translate-x-1 -translate-y-10"/>
                    </div>

                </div>
               </div>
                
            </Slider>
        </div>
    </Wrapper>
   </section>
  );
}