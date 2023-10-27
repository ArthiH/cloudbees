// Image
import illustration from "../../assest/home-cover-img/home.png";

// hooks
import { useEffect } from "react";

// Components
import { AboutUs } from "./about-us/AboutUs";
import { DevSection } from "./dev-sections/DevSection";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { HomeService } from "./home-service/HomeService";
import { ContactUs } from "./contact-us/ContactUs";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* Navbar import */}
      <Navbar />
      <main className="flex items-center justify-center w-full py-20">
        <section className="max-w-screen-xl flex flex-wrap md:justify-between justify-center items-center lg:pl-8 w-[95%]">
          <div>
            <h1 className="md:text-3xl text-xl font-semibold text-mediumgrey mb-8">
              WE LAUNCH YOUR IDEAS !
            </h1>
            <h1 className="text-4xl max-md:text-3xl font-bold text-secondary mb-1">
              Build business Mobile and <br />{" "}
              <span className="mb-3">web app with our</span>
            </h1>
            <h1 className="text-4xl max-md:text-3xl font-bold text-primary mt-5 mb-8">
              Techies support
            </h1>
            <button className="bg-secondary font-medium  hover:scale-110 hover:delay-200 hover:ring-2 hover:ring-primary text-white py-2 px-9 rounded-lg border">
              Read more
            </button>
          </div>

          {/* image */}
          <div>
            <img
              className="bg-cover bg-no-repeat max-w-[400px] max-lg:w-[270px] block max-md:hidden"
              src={illustration}
              alt="not found"
            />
          </div>
        </section>
      </main>

      {/* Development section */}
      <DevSection />

      {/* About Us */}
      <AboutUs />

      {/* Services */}
      <HomeService />

      {/* Contact us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </>
  );
};
