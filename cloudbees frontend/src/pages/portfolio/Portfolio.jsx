import { Navbar } from "../navbar/Navbar";

// Lottie animation icons
import Lottie from "lottie-react";
import web from "../../assest/services/web/animation_lmvoues1.json";
import ecommerce from "../../assest/services/commerce/animation_lmvt1imx.json";
import mobile from "../../assest/services/mobile/animation_lmvqockp.json";
import cloud from "../../assest/services/cloud/animation_lmvp5at5.json";
import consulting from "../../assest/services/consulting/animation_lmvt9klx.json";
import { Footer } from "../footer/Footer";
import { ServicesCardContent } from "../services/Services";

export const Portfolio = () => {
  return (
    <>
    {/* resuable navbar */}
      <Navbar />
{/* portfolio start */}
      <main className="flex justify-center">
        <div className="max-w-screen-2xl w-[95%]">
          <h1 className="text-3xl font-semibold text-primary text-center mt-12">
            PORTFOLIO
          </h1>

{/* our achivement */}
{/* <section>
    <h1 className=" text-info text-4xl py-10 font-semibold text-center">Our Achivement</h1>
</section> */}

{/* our project */}
          <section>
            <h3 className="text-info text-4xl py-10 font-semibold text-center">
              Our Project
            </h3>
            <div>
              <section className="flex items-center gap-4">
                <span>
                  {" "}
                  <Lottie animationData={web} loop={true} />
                </span>
                <article className="ml-20">
                  <h1 className="text-primary text-3xl mb-3">Web Design & Development</h1>
                  <p>
                    With our years of website production and design experience,
                    we are able to deliver the ideal web design and development
                    solutions to you.
                  </p>
                </article>
              </section>
              <section className="flex items-center">
                <article>
                  <h1 className="text-primary text-3xl mb-3">E-Commerce Development</h1>
                  <p>
                    Enabling businesses to reach a wider customer base with our
                    ecommerce website development services.
                  </p>
                </article>
                <span className=" flex justify-end w-[60%]">
                  {" "}
                  <Lottie animationData={ecommerce} loop={true} className="max-w-[70%]"/>
                </span>
              </section>
              <section className="flex items-center">
                <span className="w-[60%]">
                  <Lottie animationData={mobile} loop={true} className="max-w-[70%]"/>
                </span>
                <article>
                  <h1 className="text-primary text-3xl mb-3">Mobile Application Development</h1>
                  <p>
                    Our experience ranges from membership dashboards development
                    to custom eCommerce integration and business process
                    applications.
                  </p>
                </article>
              </section>
              <section className="flex items-center">
                <article>
                  <h1 className="text-primary text-3xl mb-3">Cloud Managed Solution</h1>
                  <p>
                    We maintain oversight and administrative control of cloud
                    computing products and services, whether deployed in public,
                    private, or hybrid cloud environments.
                  </p>
                </article>
                <span className="w-[60%]">
                  <Lottie animationData={cloud} loop={true} />
                </span>
              </section>
              <section className="flex items-center mb-10">
                <span className="w-[60%]">
                  {" "}
                  <Lottie animationData={consulting} loop={true} className="max-w-[70%]"/>
                </span>
                <article>
                  <h1 className="text-primary text-3xl mb-3">IT Consulting</h1>
                  <p>
                    We can help you develop and execute a clear and strategic IT
                    roadmap with priorities that are closely linked to business
                    goals.
                  </p>
                </article>
              </section>
            </div>
          </section>
        </div>
      </main>
      {/* resuable footer */}
      <Footer />
    </>
  );
};
