import { HiMiniComputerDesktop } from "react-icons/hi2";
import { CiMobile3 } from "react-icons/ci";
import { BiBrain } from "react-icons/bi";

export const HomeService = () => {
  return (
    <main className="flex flex-col items-center">
      <h4 className="text-primary text-4xl font-semibold mt-20 mb-3">
        SERVICES
      </h4>
      <h1 className="sm:text-4xl text-3xl mx-3 text-center font-medium mt-5 mb-16">
        Provide Awesome Services To You
      </h1>

      <section className="w-full relative flex items-center justify-center">
        <div className="bg-primary w-full h-20 absolute"></div>
        {/* Service Card */}
        <div className="max-w-screen-xl w-[95%]">
          <ServicesCard />
        </div>
      </section>
    </main>
  );
};

export const ServicesCard = () => {
  return (
    <main className="relative flex justify-center items-center flex-wrap w-full gap-6 sm:m-4 z-20 px-4">
      {/* Card1 */}
      <div className="flex flex-col justify-center items-center sm:max-w-sm gap-4 lg:p-4 py-3 rounded overflow-hidden shadow-2xl bg-mediumgrey">
        <article>
          <HiMiniComputerDesktop className="text-primary lg:text-9xl text-5xl" />
        </article>
        <article className="flex flex-col items-center px-4">
          <h3 className="text-mediumyellow text-xl  font-semibold mb-3">
            Strategy & Research
          </h3>
          <p className="text-white text-center">
            It is separate from most operational activities performed by a
            corporation. The research and/or development is typically not
            performed with the expectation of immediate profit.
          </p>
        </article>
      </div>

      {/* Card2 */}
      <div className="flex flex-col items-center gap-4 lg:p-4 py-3 sm:max-w-sm rounded overflow-hidden shadow-2xl bg-mediumgrey">
        <CiMobile3 className="text-primary lg:text-[8rem] text-5xl " />
        <article className="flex flex-col items-center px-4">
          <h3 className="text-mediumyellow text-xl  font-semibold mb-3">
            Web Development
          </h3>
          <p className="text-white text-center">
            It is separate from most operational activities performed by a
            corporation. The research and/or development is typically not
            performed with the expectation of immediate profit.
          </p>
        </article>
      </div>

      {/* Card3 */}
      <div className="flex flex-col items-center gap-4 lg:p-4 py-3 sm:max-w-sm rounded overflow-hidden shadow-2xl bg-mediumgrey">
        <BiBrain className="text-primary lg:text-[8rem] text-5xl" />
        <article className="flex flex-col items-center px-4">
          <h3 className="text-mediumyellow text-xl  font-semibold mb-3">
            Web Solution
          </h3>
          <p className="text-white text-center">
            It is separate from most operational activities performed by a
            corporation. The research and/or development is typically not
            performed with the expectation of immediate profit.
          </p>
        </article>
      </div>
    </main>
  );
};
