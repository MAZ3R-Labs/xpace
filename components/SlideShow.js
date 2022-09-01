/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Slideshow = () => {
  return (
    <div className="flex-col w-[752px]">
        <div className="carousel w-full h-[268px]">
          <div id="item1" className="carousel-item relative w-full">
            <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item4" className="btn btn-circle">❮</a> 
            <a href="#item2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="item2" className="carousel-item relative w-full">
            <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item1" className="btn btn-circle">❮</a> 
            <a href="#item3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="item3" className="carousel-item relative w-full">
            <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item2" className="btn btn-circle">❮</a> 
            <a href="#item4" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="item4" className="carousel-item relative w-full">
            <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#item3" className="btn btn-circle">❮</a> 
            <a href="#item1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2 ">
          <a href="#item1" className="btn btn-ghost btn-xs">1</a> 
          <a href="#item2" className="btn btn-ghost btn-xs">2</a> 
          <a href="#item3" className="btn btn-ghost btn-xs">3</a> 
          <a href="#item4" className="btn btn-ghost btn-xs">4</a>
        </div>
    </div>
      

  );
};

export default Slideshow;
