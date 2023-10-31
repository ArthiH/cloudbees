import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import about from "../../assest/about/about.png";
import mission from "../../assest/about/mission.jpg";
import T1 from "../../assest/about/T111.avif";
import T2 from "../../assest/about/T2.jpg";
import T3 from "../../assest/about/T3.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <div className="max-w-screen-xl w-full">
          <h1 className="text-center my-16 text-4xl text-primary font-bold">
            About Us
          </h1>
          <section className="grid grid-cols-2 ml-20 max-[1020px]:grid-cols-1 mx-10 max-[1120px]:justify-items-center items-center">
            <div className="h-[500px] w-[500px] rounded-full relative bg-primary -z-10 max-md:h-72  max-md:w-72">
              <img
                className=" w-full object-cover rounded-full absolute -left-[10%] top-[15%]"
                src={about}
                alt="not found"
              />
            </div>
            <div className="max-[1120px]:my-28 text-center text-mediumgrey px-8">
              <p className="leading-loose">
                We're the bridge that connects businesses. Clients bring their
                projects to us, and we deliver the solutions. We offer a
                multitude of benefits, making your success our priority. They're
                forging a partnership with a team that's dedicated to their
                growth. Our reputation is built on the bedrock of trust,
                excellence, and reliability. Our clients have witnessed the
                impact of our collaborative efforts, and we're proud to have
                played a role in their success stories. We understand the
                intricacies of your industry, and we're constantly evolving to
                stay ahead of the curve.
              </p>
              <button className="border bg-secondary text-white px-5 py-2 rounded-lg mt-10 hover:scale-105 hover:ring-2 hover:ring-primary">
                Know More
              </button>
            </div>
          </section>
        </div>
      </main>
      <Mission />
      <Team />
      <Footer />
    </>
  );
};

export const Mission = () => {
  return (
    <main className="flex justify-center">
      <div className="max-w-screen-xl w-full my-20 max-[1015px]:my-2">
        <h1 className="text-center my-20 text-4xl text-primary font-bold">
          Our Mission
        </h1>
        <section className="grid grid-cols-2 gap-5 px-5 max-[990px]:grid-cols-1">
          <div className="my-2 max-[990px]:text-center">
            <h1 className="text-3xl text-mediumyellow">
              We will bring you ideas to life
            </h1>
            <div className="text-center my-5">
              <p className="text-mediumgrey">
                "The way to success is a winding path, often marked by
                determination, innovation, and resilience. It's about setting
                clear goals, forging a relentless commitment, and adapting to
                challenges as opportunities. Success thrives on learning from
                failures, seeking continuous improvement, and embracing change.
                It's a journey where passion fuels progress, and every step
                forward brings you closer to your definition of triumph."
              </p>
              <button className="border bg-secondary text-white px-5 py-2 rounded-lg mt-10 hover:scale-105 hover:ring-2 hover:ring-primary">
                Know More
              </button>
            </div>
          </div>
          <div>
            <img
              className="h-full w-full object-cover"
              src={mission}
              alt="not found"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export const Team = () => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center my-20 text-4xl text-primary font-bold">
        Our Technologists
      </h1>
      <section className="w-full relative flex items-center justify-center my-10 mb-20 px-5">
        <div className="bg-primary w-full h-20 absolute -z-20"></div>
        {/* Service Card */}
        <div className="max-w-screen-xl w-full relative flex justify-between flex-wrap px-5 gap-5 max-[850px]:justify-center items-center">
          {/* Card1*/}
          <div className="shadow-lg  bg-white relative -top-5 max-[1060px]:top-0">
            <img
              className="max-w-xs w-full object-cover"
              src={T1}
              alt="not found"
            />
            <h1 className="text-mediumyellow pl-3 font-semibold text-2xl pt-2">
              Sophia
            </h1>
            <p className="text-sm text-mediumgrey pl-3 pb-2">Project Manager</p>
            <article className="flex gap-2 text-primary pl-3 font-semibold text-lg mb-3">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
            </article>
          </div>
          {/* Card2 */}
          <div className="shadow-lg bg-white relative top-12 max-[1060px]:top-0">
            <img
              className="max-w-xs w-full object-cover"
              src={T2}
              alt="not found"
            />
            <h1 className="text-mediumyellow pl-3 font-semibold text-2xl pt-2">
              Malika
            </h1>
            <p className="text-sm text-mediumgrey pl-3 pb-2">Team Leader</p>
            <article className="flex gap-2 text-primary pl-3 font-semibold text-lg mb-3">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
            </article>
          </div>
          {/* Card3*/}
          <div className="shadow-lg bg-white relative top-20 max-[760px]:top-0 max-[1060px]:mx-auto">
            <img
              className="max-w-xs w-full object-cover"
              src={T3}
              alt="not found"
            />
            <h1 className="text-mediumyellow pl-3 font-semibold text-2xl pt-2">
              Ajai
            </h1>
            <p className="text-sm text-mediumgrey pl-3 pb-2">
              Assistance Leader
            </p>
            <article className="flex gap-2 text-primary pl-3 font-semibold text-lg mb-3">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};
