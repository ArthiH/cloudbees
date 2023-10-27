// images
import colleagues from "../../../assest/aboutus/aboutus.jpg";
// React icons
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaRocket, FaAward } from "react-icons/fa";
import { RiShakeHandsFill } from "react-icons/ri";

export const AboutUs = () => {
  return (
    <>
      <main className="flex justify-center items-center mt-16">
        <section className="max-w-screen-xl w-[95%] grid grid-cols-2 max-lg:grid-cols-1">
          {/* left side image */}
          <img
            className="h-full object-cover w-full"
            src={colleagues}
            alt="not found"
          />

          {/* Right side content */}
          <div className="p-9 py-2">
            <h4 className="text-2xl font-semibold text-secondary mb-4">ABOUT US</h4>
            <h2 className="text-3xl font-semibold mb-3">
              WE CAN FIND YOU THE RIGHT
            </h2>
            <h3 className="text-3xl font-semibold text-primary mb-3">
              TECHIES
            </h3>
            <p className="text-litegrey">
              In today's fast-paced business landscape, technology is the
              driving force behind innovation, efficiency, and growth. From
              cloud computing and data analytics to artificial intelligence and
              automation, businesses are increasingly relying on technology to
              streamline operations, gain valuable insights, and stay
              competitive. Embracing these tech-driven solutions isn't just an
              option; it's a necessity for businesses looking to adapt, thrive,
              and deliver superior value to their customers in the digital age.
            </p>
            <section className="mt-8">
              <h4 className="text-secondary font-bold mb-2">SKILLED EMPLOYEE</h4>
              <div className="mb-4 w-10/12 justify-end py-1 px-4 rounded-3xl flex bg-mediumyellow text-white">
                <span className="text-secondary">93%</span>
              </div>
              <h4 className="text-secondary font-bold mb-2">PROJECT COMPLETED</h4>
              <div className="mb-4 w-9/12 justify-end py-1 px-4 rounded-3xl flex bg-mediumyellow text-white">
                <span className="text-secondary">88%</span>
              </div>
              <h4 className="text-secondary font-bold mb-2">QUALITY SERVICES</h4>
              <div className="mb-4 w-7/12 justify-end py-1 px-4 rounded-3xl flex bg-mediumyellow text-white">
                <span className="text-secondary">75%</span>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* About Us child */}
      <AboutUsChild />
    </>
  );
};

export const AboutUsChild = () => {
  return (
    <main className="h-48 max-md:h-auto flex justify-center items-center bg-[url('https://media.istockphoto.com/id/1424873695/photo/office-interior-with-coworking-zone-and-pc-computers-panoramic-window.webp?b=1&s=612x612&w=0&k=20&c=W_-FHa_20CzzyuO2JXAeHH73LWI_J-uen8FOIDMEdo0=')]">
      <div className="max-w-screen-xl w-[95%] flex flex-wrap gap-3 p-4 max-sm:justify-center justify-between items-center">
        <section className="flex flex-col items-center px-9 py-2 rounded shadow-lg bg-primary">
          <span className="text-4xl text-black mb-2">
            <RiShakeHandsFill />
          </span>
          <h4 className="font-extrabold text-xl">15+</h4>
          <p className="text-fifth">Happy Client</p>
        </section>
        <section className="flex flex-col items-center px-3 py-2 rounded shadow-lg bg-primary">
          <span className="text-4xl text-black mb-2">
            <FaAward />
          </span>
          <h4 className="font-extrabold text-xl">50+</h4>
          <p className="text-fifth">Project Completed</p>
        </section>
        <section className="flex flex-col items-center px-5 py-2 rounded shadow-lg bg-primary">
          <span className="text-4xl text-black mb-2">
            <FaRocket />
          </span>
          <h4 className="font-extrabold text-xl">20+</h4>
          <p className="text-fifth">Project Launched</p>
        </section>
        <section className="flex flex-col items-center px-5 py-2 rounded shadow-lg bg-primary">
          <span className="text-4xl text-black mb-2">
            <HiMiniUserGroup />
          </span>
          <h4 className="font-extrabold text-xl">14+</h4>
          <p className="text-fifth">Years Completed</p>
        </section>
      </div>
    </main>
  );
};
