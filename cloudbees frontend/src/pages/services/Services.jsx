// resuable component

import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

// image
import feature from "../../assest/features/feature.avif";

// Lottie animation icons
import Lottie from "lottie-react";
import web from "../../assest/services/web/animation_lmvoues1.json";
import ecommerce from "../../assest/services/commerce/animation_lmvt1imx.json";
import mobile from "../../assest/services/mobile/animation_lmvqockp.json";
import cloud from "../../assest/services/cloud/animation_lmvp5at5.json";
import consulting from "../../assest/services/consulting/animation_lmvt9klx.json";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Service = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Adding navbar */}
      <Navbar />
      {/* started service page */}
      <main className="flex items-center justify-center">
        <div className="max-w-screen-2xl w-[95%]">
          <h2 className="text-3xl font-semibold text-primary flex flex-col items-center justify-center my-12">
            Services <br />{" "}
            <span className="font-semibold  text-[transparent] bg-secondary bg-clip-text text-4xl my-5 text-center">
              Provide Awesome Features & Services To You
            </span>
          </h2>

          {/* our feature start */}
          <section>
            <h3 className="uppercase text-primary text-4xl py-5 pb-10 font-semibold text-center">
              Our Best Features
            </h3>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 w-full">
              <img className="w-full  my-auto" src={feature} />
              <div className="px-5">
                <h1 className="text-3xl font-medium my-5">
                  Helping you grow at every Step
                </h1>
                <p className="text-litegrey mb-10">
                  We access your business, process, and technology and make
                  recommendations to make the same better in a very competitive
                  business model that benefits your business. Whether it be
                  Business Specific Application Development, CMS & e-commerce
                  Applications, Mobile Applications, Business Intelligence
                  Applications, or Block Chain Applications; Nitche experts
                  provide invaluable customer satisfaction to your business.
                </p>
                <button className="bg-gradient-to-r from-info to-primary font-medium  hover:scale-110 hover:delay-200 hover:ring-2 hover:ring-primary text-white py-2 px-9 rounded-lg border">
                  Learn more
                </button>
              </div>
            </div>
          </section>

          {/* our service start */}
          <section className=" mt-10 ">
            <h3 className="uppercase text-primary text-4xl py-10 font-semibold text-center">
              Our Best Services
            </h3>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:p-4 py-3 rounded my-5 mb-14">
              {ServicesCardContent.map((items, index) => {
                return (
                  <div
                    className=" bg-mediumgrey rounded-xl shadow-xl sm:last:col-span-2 lg:last:col-span-1"
                    key={index}
                  >
                    <span className="flex items-start max-md:w-[50%] mx-auto">
                      {" "}
                      {items.icons}
                    </span>
                    <h1 className="font-medium text-xl text-primary text-center my-3 px-1">
                      {items.h1}
                    </h1>
                    <p className="italic text-center text-white mx-5 mb-4 max-md:mb-10 ">
                      {items.p}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      {/* adding footer */}
      <Footer />
    </>
  );
};

// making array for mapping the service cards
export const ServicesCardContent = [
  {
    icons: (
      <Lottie
        animationData={web}
        loop={true}
        className="lg:max-w-[200px] mx-auto"
      />
    ),
    h1: "Web Design & Development",
    p: "With our years of website production and design experience, we are able to deliver the ideal web design and development solutions to you.",
  },
  {
    icons: (
      <Lottie
        animationData={ecommerce}
        loop={true}
        className="mb-3 max-lg:mb-10"
      />
    ),
    h1: "E-Commerce Development",
    p: "Enabling businesses to reach a wider customer base with our ecommerce website development services.",
  },
  {
    icons: <Lottie animationData={mobile} loop={true} />,
    h1: "Mobile Application Development",
    p: "Our experience ranges from membership dashboards development to custom eCommerce integration and business process applications.",
  },
  {
    icons: <Lottie animationData={cloud} loop={true} />,
    h1: "Cloud Managed Solution",
    p: "We maintain oversight and administrative control of cloud computing products and services, whether deployed in public, private, or hybrid cloud environments.",
  },
  {
    icons: (
      <Lottie
        animationData={consulting}
        loop={true}
        className="lg:max-w-[210px]  mx-auto"
      />
    ),
    h1: "IT Consulting",
    p: "We can help you develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals.",
  },
];
