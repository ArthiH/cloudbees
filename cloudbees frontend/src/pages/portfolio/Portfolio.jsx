import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

import portfolio from "../../assest/portfolio/portfolio.jpg";
import hotel from "../../assest/portfolio/hotel.jpg";
import tourism from "../../assest/portfolio/tourism.jpg";
import education from "../../assest/portfolio/education.jpg";
import sports from "../../assest/portfolio/sports.jpg";
import sector from "../../assest/portfolio/public-sector.jpg";
import retail from "../../assest/portfolio/retail.jpg";
import hospitality from "../../assest/portfolio/hospitality.jpg";
import insurance from "../../assest/portfolio/insurance.jpg";
import health from "../../assest/portfolio/healthcare.jpg";
import fleet from "../../assest/portfolio/fleet.jpg";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Portfolio = () => {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
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
        <FinancialServices />
        <PublicSector />
        <Insurance />
        <Retail />
        <Manufacturing />
        <Hospitality />
        <HealthCare />
        <FleetManage />
      </main>

      {/* resuable footer */}
      <Footer />
    </>
  );
};

export const Payment = () => {
  return (
    <section className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[450px] bg-no-repeat bg-payment  bg-cover -z-20 relative my-16">
      <div className="w-full h-[350px] max-[550px]:h-[450px] absolute bg-liteblack top-0 -z-10"></div>
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
      <div className="bg-liteblack w-[50%] max-[550px]:w-[90%] my-10 mx-5 rounded-xl p-8 text-white">
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
        <div className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[500px] absolute bg-liteblack top-0 right-0"></div>
      </div>
      <div>
        <h1 className="absolute top-0 w-[80%] max-[550px]:w-full right-0 text-2xl font-bold text-white bg-primary py-2 px-3">
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

export const FinancialServices = () => {
  return (
    <section className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[450px] bg-no-repeat bg-finance  bg-cover -z-20 relative my-16">
      <div className="w-full h-[350px] max-[550px]:h-[450px] absolute bg-black opacity-50 top-0 -z-10"></div>
      <div>
        <h1 className="text-2xl font-bold text-white bg-primary flex justify-end py-2 px-3">
          Financial Services
        </h1>
        <p className="my-10 text-white font-semibold mx-20 w-[80%] float-right max-[750px]:mt-10 mt-20 max-[580px]:w-[80%] max-[580px]:text-center max-[550px]:mx-10">
          As a trusted financial partner, we deliver tailored services,
          including wealth management, lending, and risk mitigation, empowering
          clients to navigate their financial journey with confidence and
          success.
        </p>
      </div>
    </section>
  );
};

export const PublicSector = () => {
  return (
    <main className="flex justify-center my-16">
      <div className="max-w-screen-2xl w-[95%]">
        <div className="h-2 w-full bg-primary rounded-full"></div>
        <section className="grid grid-cols-2 max-[600px]:grid-cols-1  justify-items-center ">
          <article className="mx-5 my-16 max-[600px]:my-10">
            <h1 className="text-2xl text-primary">Public Sector</h1>
            <p className="text-mediumgrey my-2 text-lg">
              <i>
                Facilitating governmental functions, our public sector services
                focus on efficient governance, policy implementation, and
                citizen welfare, fostering a responsive and accountable public
                administration.
              </i>
            </p>
          </article>
          <img
            className="object-cover max-w-[350px] w-full mt-5"
            src={sector}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};
export const Insurance = () => {
  return (
    <main className="bg-finance h-96 max-[550px]:h-full bg-cover bg-no-repeat flex justify-center -z-30 items-center">
      <div className="w-[50%] max-[550px]:w-[90%] my-10 mx-5 rounded-xl p-8 text-white relative">
        <div className=" h-[200px] w-full rounded-xl absolute bg-[#ff0000] top-0 left-0 -z-[-1]"></div>
        <h1 className="text-3xl font-bold text-center mb-5 text-primary z-[9999]">
          Insurance{" "}
        </h1>
        <p className="font-semibold text-center">
          <i>
            Transform real estate experiences with a visually appealing website
            that seamlessly showcases property listings,offering prospective11
            buyers and renters an immersive view of available homes or
            commercial spaces.
          </i>
        </p>
      </div>
    </main>
  );
};

// export const Insurance = () => {
//   return (
//     <section className="relative">
//       <div className="flex justify-end relative  h-[350px] max-[550px]:h-[500px] overflow-hidden">
//         <img
//           className="object-cover w-[80%] max-[550px]:w-full h-full"
//           src={insurance}
//           alt="not found"
//         />
//         <div className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[500px] absolute bg-black opacity-70 top-0 right-0"></div>
//       </div>
//       <div>
//         <h1 className="absolute top-0 w-[80%] max-[550px]:w-full right-0 text-2xl font-bold text-white bg-primary py-2 px-3">
//           Insurance
//         </h1>
//         <p className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 my-5 text-white font-semibold">
//           As a leading insurer, we offer comprehensive coverage and risk
//           management solutions, providing individuals and businesses with peace
//           of mind and financial protection against unforeseen events.
//         </p>
//       </div>
//     </section>
//   );
// };

export const Retail = () => {
  return (
    <main className="flex justify-center my-16">
      <div className="max-w-screen-2xl w-[95%]">
        <div className="h-2 w-full bg-primary rounded-full"></div>
        <section className="grid grid-cols-2 max-[600px]:grid-cols-1  justify-items-center">
          <article className="mx-5 my-16 max-[600px]:my-10">
            <h1 className="text-2xl text-primary"> Retail</h1>
            <p className="text-mediumgrey my-2 text-lg">
              <i>
                At the forefront of retail innovation, we offer a dynamic
                shopping environment, blending cutting-edge technology,
                personalized services, and a curated selection of products to
                enhance the customer journey and redefine the retail experience.
              </i>
            </p>
          </article>
          <img
            className="object-cover max-w-[400px] w-full mt-5"
            src={retail}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};

export const Manufacturing = () => {
  return (
    <section className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[450px] bg-no-repeat bg-manufacturing bg-cover -z-20 relative my-16">
      <div className="w-full h-[350px] max-[550px]:h-[450px] absolute bg-liteblack top-0 -z-10"></div>
      <div>
        <h1 className="text-2xl font-bold text-white bg-primary flex justify-end py-2 px-3">
          Manufacturing
        </h1>
        <p className="my-7 text-white font-semibold mx-20 w-[80%] float-right max-[750px]:mt-10 mt-20 max-[580px]:w-[80%] max-[580px]:text-center max-[550px]:mx-10">
          As a leading manufacturing enterprise, we specialize in precision
          engineering and scalable production, delivering high-quality products
          that meet industry standards while driving innovation and efficiency
          in the manufacturing sector.
        </p>
      </div>
    </section>
  );
};

export const Hospitality = () => {
  return (
    <main className="flex justify-center my-16">
      <div className="max-w-screen-2xl w-[95%]">
        <div className="h-2 w-full bg-primary rounded-full"></div>
        <section className="grid grid-cols-2 max-[600px]:grid-cols-1  justify-items-center ">
          <article className="mx-5 my-16 max-[600px]:my-10">
            <h1 className="text-2xl text-primary">Hospitality</h1>
            <p className="text-mediumgrey my-2 text-lg">
              <i>
                As a hospitality leader, we create memorable experiences with
                exceptional service, offering luxurious accommodations and
                immersive amenities to cater to the diverse needs of our guests,
                ensuring unparalleled comfort and satisfaction.
              </i>
            </p>
          </article>
          <img
            className="object-cover max-w-[300px] w-full mt-5"
            src={hospitality}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};

export const HealthCare = () => {
  return (
    <section className="relative">
      <div className="flex justify-end relative  h-[350px] max-[550px]:h-[500px] overflow-hidden">
        <img
          className="object-cover w-[80%] max-[550px]:w-full h-full"
          src={health}
          alt="not found"
        />
        <div className="w-[80%] h-[350px] max-[550px]:w-full max-[550px]:h-[500px] absolute bg-liteblack top-0 right-0"></div>
      </div>
      <div>
        <h1 className="absolute top-0 w-[80%] max-[550px]:w-full right-0 text-2xl font-bold text-white bg-primary py-2 px-3">
          Health Care
        </h1>
        <p className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 my-5 text-white font-semibold">
          Dedicated to health and wellness, our healthcare services emphasize
          patient-centric care, leveraging cutting-edge technology and
          compassionate expertise to ensure optimal well-being and peace of
          mind.
        </p>
      </div>
    </section>
  );
};

export const FleetManage = () => {
  return (
    <main className="flex justify-center my-16">
      <div className="max-w-screen-2xl w-[95%]">
        <div className="h-2 w-full bg-primary rounded-full"></div>
        <section className="grid grid-cols-2 max-[600px]:grid-cols-1  justify-items-center">
          <article className="mx-5 my-16 max-[600px]:my-10">
            <h1 className="text-2xl text-primary">Fleet Managements</h1>
            <p className="text-mediumgrey my-2 text-lg">
              <i>
                As specialists in fleet management, we optimize vehicle
                operations with tailored solutions, maximizing efficiency,
                reducing costs, and ensuring a streamlined and reliable
                transportation ecosystem for our clients.
              </i>
            </p>
          </article>
          <img
            className="object-cover w-full mt-5 max-w-[450px] min-w-[300px]"
            src={fleet}
            alt="not found"
          />
        </section>
      </div>
    </main>
  );
};
