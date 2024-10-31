import React from "react";
import banner from "../../public/Banner.jpg";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <h1 className="text-3xl font-bold">
            Welcome to your hostel Management System
          </h1>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
