import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

import portfolio from "../../assest/portfolio/portfolio_1.jpg";
import hotel from "../../assest/portfolio/hotel.jpg";
import tourism from "../../assest/portfolio/tourism.jpg";
import education from "../../assest/portfolio/education.jpg";
import sports from "../../assest/portfolio/sports.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Portfolio = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* resuable navbar */}
      <Navbar />
      {/* portfolio start */}
      <main>
        <div className="relative">
          <img
            className="object-cover w-full h-[350px]"
            src={portfolio}
            alt="not found"
          />
          <div className="w-full h-[350px] absolute bg-black top-0 right-0 opacity-50 "></div>
          <h1 className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-mediumyellow text-7xl font-bold">
            Portfolio
          </h1>
        </div>
        <Payment />
        <Hotel />
        <RealEstate />
        <Tourism />
        <Education />
        <Sports />
      </main>

      {/* resuable footer */}
      <Footer />
    </>
  );
};

export const Payment = () => {
  return (
    <section className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[450px] bg-no-repeat bg-payment  bg-cover -z-20 relative my-16">
      <div className="w-full h-[350px] max-[550px]:h-[450px] absolute bg-primary top-0 opacity-50 -z-10"></div>
      <div>
        <h1 className="text-2xl font-bold text-white bg-primary flex justify-end py-2 px-3">
          Payment Integration
        </h1>
        <p className="my-7 text-white font-semibold mx-20 w-[80%] float-right max-[750px]:mt-10 mt-20 max-[580px]:w-[80%] max-[580px]:text-center max-[550px]:mx-10">
          Implement seamless payment integration into your website, enabling
          secure transactions through various payment gateways. Enhance user
          experience and trust by providing a convenient and reliable way for
          customers to make purchases online.
        </p>
      </div>
    </section>
  );
};

export const Hotel = () => {
  return (
    <main className="flex justify-center my-16">
      <div className="max-w-screen-2xl w-[95%]">
        <div className="h-2 w-full bg-primary rounded-full"></div>
        <section className="grid grid-cols-2 max-[600px]:grid-cols-1 justify-items-center items-center">
          <article className="mx-5 my-16 max-[600px]:my-10">
            <h1 className="text-2xl text-primary">Hotel & Restaurants</h1>
            <p className="text-mediumgrey my-2 text-lg">
              <i>
                Elevate hospitality with a dynamic online presence for your
                hotel or restaurant. Showcase your amenities or menu, and
                enhance customer engagement by allowing easy reservations or
                orders through an intuitively designed website.
              </i>
            </p>
          </article>
          <img
            className="object-cover w-full max-w-[400px]"
            src={hotel}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};

export const RealEstate = () => {
  return (
    <main className="bg-estate h-96 max-[550px]:h-full bg-cover bg-no-repeat flex justify-center items-center">
      <div className="bg-primary opacity-90 w-[50%] max-[550px]:w-[90%] my-10 mx-5 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-5 ">RealEstate </h1>
        <p className="font-semibold">
          <i>
            Transform real estate experiences with a visually appealing website
            that seamlessly showcases property listings,offering prospective
            buyers and renters an immersive view of available homes or
            commercial spaces.
          </i>
        </p>
      </div>
    </main>
  );
};

export const Tourism = () => {
  return (
    <main className="flex justify-center my-16">
      <div className="max-w-screen-2xl w-[95%]">
        <div className="h-2 w-full bg-primary rounded-full"></div>
        <section className="grid grid-cols-2 max-[600px]:grid-cols-1  justify-items-center items-center">
          <article className="mx-5 my-16 max-[600px]:my-10">
            <h1 className="text-2xl text-primary">Tourism</h1>
            <p className="text-mediumgrey my-2 text-lg">
              <i>
                Ignite wanderlust with a captivating tourism website, featuring
                stunning visuals, detailed itineraries, and user-friendly
                navigation to inspire and assist travelers in planning memorable
                journeys.
              </i>
            </p>
          </article>
          <img
            className="object-cover w-full mt-5"
            src={tourism}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};

export const Education = () => {
  return (
    <section className="relative">
      <div className="flex justify-end relative  h-[350px] max-[550px]:h-[500px] overflow-hidden">
        <img
          className="object-cover w-[80%] max-[550px]:w-full h-full"
          src={education}
          alt="not found"
        />
        <div className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[500px] absolute bg-primary top-0 right-0 opacity-50 "></div>
      </div>
      <div>
        <h1 className="absolute top-0 w-[80%] max-[550px]:w-full right-0 text-2xl font-bold text-white bg-primary opacity-90 py-2 px-3">
          Education
        </h1>
        <p className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 my-5 text-white font-semibold">
          Empower learning through an innovative education website, offering a
          user-friendly interface that facilitates seamless access to courses,
          resources, and interactive content.
        </p>
      </div>
    </section>
  );
};

export const Sports = () => {
  return (
    <main className="flex justify-center my-16">
      <div className="max-w-screen-2xl w-[95%]">
        <div className="h-2 w-full bg-primary rounded-full"></div>
        <section className="grid grid-cols-2 max-[600px]:grid-cols-1  justify-items-center items-center">
          <article className="mx-5 my-16 max-[600px]:my-10">
            <h1 className="text-2xl text-primary">Sports</h1>
            <p className="text-mediumgrey my-2 text-lg">
              <i>
                Fuel the excitement of sports enthusiasts with a dynamic website
                that delivers real-time updates, player statistics, and engaging
                multimedia content.
              </i>
            </p>
          </article>
          <img
            className="object-cover max-w-[350px] w-full mt-5"
            src={sports}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};
