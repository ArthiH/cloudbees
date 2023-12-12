import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import about from "../../assest/about/about_1.jpg";
import mission from "../../assest/about/mission.jpg";
import T1 from "../../assest/about/US_T1.jpg";
import T2 from "../../assest/about/US_T2.jpg";
import IND_T3 from "../../assest/about/IND_T3.jpg";
import IND_T4 from "../../assest/about/IND_T4.jpg";
import IND_T5 from "../../assest/about/IND_T5.jpg";
import T7 from "../../assest/about/t5.avif";
import IND_T1 from "../../assest/about/IND_T1.jpeg";
import IND_T6 from "../../assest/about/IND_T8.jpg";
import IND_T7 from "../../assest/about/IND_T9.jpeg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <div className="max-w-screen-xl w-full">
          <h1 className="text-center my-16 text-4xl text-primary font-bold">
            About Us
          </h1>
          <section className="grid grid-cols-2 max-[1020px]:grid-cols-1 max-[1120px]:justify-items-center items-center">
            <div className="h-[400px] w-[400px] rounded-full relative bg-primary ml-20 max-sm:mr-10 -z-10 max-md:h-72  max-md:w-72">
              <img
                className=" w-full object-cover rounded-full absolute -left-[10%] top-[15%] shadow-lg"
                src={about}
                alt="not found"
              />
            </div>
            <div className="max-[1120px]:mt-28 text-center text-mediumgrey px-2 max-[1020px]:px-10">
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
      <UsaTeam />
      <IndiaTeam />
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

export const UsaTeam = () => {
  return (
    <main className="mt-16">
      <div className="h-2 w-full bg-secondary relative">
        <h1 className="absolute left-[20%] max-[500px]:left-2/4 max-[500px]:-translate-x-1/2  top-2/4 -translate-y-1/2 bg-white px-4 text-2xl text-primary font-bold">
          USA Frontiers
        </h1>
      </div>
      <section className="max-w-screen-xl w-[95%] mx-auto">
        <div className="grid grid-cols-2 justify-items-center max-[730px]:grid-cols-1 gap-14 my-20">
          {Team.slice(0, 2).map((value, index) => {
            return (
              <section
                key={index}
                className="border-2 border-primary min-w-[300px] w-[300px] rounded-tr-[50px] rounded-tl-[50px]"
              >
                <div className="h-24 rounded-tr-[50px] rounded-tl-[50px] bg-gradient-to-r from-mediumgrey  to-mediumyellow relative">
                  <div className="absolute -bottom-10 left-2/4 -translate-x-1/2 border-4 border-primary max-w-[100px]  rounded-full">
                    <img
                      className="object-fit w-full rounded-full"
                      src={value.img}
                      alt="not found"
                    />
                  </div>
                </div>

                <article className="text-center mt-16">
                  <h1 className="text-xl text-primary font-bold">{value.h1}</h1>
                  <h2 className="text-lg text-mediumgrey font-semibold pt-2">
                    {value.h2}
                  </h2>
                  <p className="text-sm text-litegrey my-4 h-12 px-5">
                    {" "}
                    <span className="text-secondary font-semibold font-serif">
                      Skills : &nbsp;
                    </span>
                    {value.p}
                  </p>
                  <div className="flex gap-10 justify-center mb-5 bg-gradient-to-r from-primary to-mediumgrey items-end text-xl text-white py-2">
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </article>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export const IndiaTeam = () => {
  return (
    <main>
      <div className="h-2 w-full bg-secondary relative">
        <h1 className="absolute  left-[20%] max-[500px]:left-2/4 max-[500px]:-translate-x-1/2  top-2/4 -translate-y-1/2 bg-white px-4 max-sm:px-2 text-2xl text-primary font-bold">
          India Frontiers
        </h1>
      </div>
      <section className="max-w-screen-xl w-[95%] mx-auto">
        <div className="mt-20 grid grid-cols-4 gap-14 justify-items-center max-[730px]:grid-cols-1 max-[1190px]:grid-cols-2 p-10">
          {Team.slice(2, 6).map((value, index) => {
            return (
              <section
                key={index}
                className="border-2 border-primary bg-white min-w-[300px] w-[300px] rounded-tr-[50px] rounded-tl-[50px]"
              >
                <div className="h-28 rounded-tr-[50px]  rounded-tl-[50px] bg-gradient-to-r from-mediumgrey  to-primary relative">
                  <div className="absolute -bottom-10 left-2/4 -translate-x-1/2 border-4 border-primary max-w-[120px]  rounded-full">
                    <img
                      className="object-fit w-full rounded-full"
                      src={value.img}
                      alt="not found"
                    />
                  </div>
                </div>

                <article className="text-center mt-16">
                  <h1 className="text-xl text-primary font-bold">{value.h1}</h1>
                  <h2 className="text-lg text-mediumgrey font-semibold py-2">
                    {value.h2}
                  </h2>
                  <p className="text-sm text-litegrey mb-5 px-3 h-16 ">
                    <span className="text-secondary font-semibold font-serif">
                      Skills : &nbsp;
                    </span>
                    {value.p}
                  </p>
                  <div className="flex gap-10 justify-center mb-5 bg-gradient-to-r from-primary to-mediumgrey items-end text-xl text-white py-2">
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </article>
              </section>
            );
          })}
        </div>
        <div className="mb-20 grid grid-cols-3 gap-4 max-[1190px]:gap-14 justify-items-center max-[730px]:grid-cols-1  max-[1190px]:grid-cols-2 p-10">
          {Team.slice(6).map((value, index) => {
            return (
              <section
                key={index}
                className="border-2 border-primary bg-white min-w-[300px] w-[350px] max-[1190px]:w-[300px] rounded-tr-[50px] rounded-tl-[50px]"
              >
                <div className="h-28 rounded-tr-[50px]  rounded-tl-[50px] bg-gradient-to-r from-mediumgrey  to-primary relative">
                  <div className="absolute -bottom-10 left-2/4 -translate-x-1/2 border-4 border-primary max-w-[120px]  rounded-full">
                    <img
                      className="object-fit w-full rounded-full"
                      src={value.img}
                      alt="not found"
                    />
                  </div>
                </div>

                <article className="text-center mt-16">
                  <h1 className="text-xl text-primary font-bold">{value.h1}</h1>
                  <h2 className="text-lg text-mediumgrey font-semibold py-2">
                    {value.h2}
                  </h2>
                  <p className="text-sm text-litegrey mb-5 px-3 h-16 ">
                    <span className="text-secondary font-semibold font-serif">
                      Skills : &nbsp;
                    </span>
                    {value.p}
                  </p>
                  <div className="flex gap-10 justify-center mb-5 bg-gradient-to-r from-primary to-mediumgrey items-end text-xl text-white py-2">
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </article>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export const Team = [
  {
    img: T1,
    h1: "BALABASKARAN",
    h2: "CTO",
    p: " Web, Mobile, Native/Hybrid, AWS - Certified Cloud Practitioner",
  },
  {
    img: T2,
    h1: "LEEMAVIDHYA",
    h2: "Delivery/QA Head",
    p: "Automation - Web/Mobile",
  },
  {
    img: IND_T1,
    h1: "KARTHIK",
    h2: "Senior Consultant",
    p: "Collaboration,Communication Skills,Apex, Triggers, Apex Data Loader",
  },
  {
    img: T7,
    h1: "BALACHANDER",
    h2: "Architect",
    p: "IOS SDK,Objective-C,swift,Flutter,Dart,AWS Amplify,Jira,MVVM,MVC",
  },
  {
    img: IND_T3,
    h1: "MOHAMED IJASS",
    h2: "UI/UX Lead",
    p: "Adobe XD,Figma,Web design,Flutter,Interaction design ",
  },
  {
    img: IND_T4,
    h1: "ARTHI",
    h2: "Web Developer",
    p: "Javascript,React,Node,Express",
  },
  {
    img: IND_T5,
    h1: "SHUNMUGAM RAJA",
    h2: "Mobile Developer",
    p: "Javascript,React,React Native,Flutter",
  },
  {
    img: IND_T6,
    h1: "VEDAMBIGAI",
    h2: "Digital Marketing",
    p: "Analytics,Social media marketing",
  },
  {
    img: IND_T7,
    h1: "SHERINE",
    h2: "Business Dev",
    p: "Marketing skills,Business intelligence skills",
  },
];
