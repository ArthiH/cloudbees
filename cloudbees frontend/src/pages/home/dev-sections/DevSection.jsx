import { HiMiniComputerDesktop } from "react-icons/hi2";
import { CiMobile3 } from "react-icons/ci";
import { BiBrain } from "react-icons/bi";

export const DevSection = () => {
  return (
    <>
      <main className="relative flex items-center justify-center py-2 mb-8">
        <div className="bg-primary text-third w-full h-20 absolute -z-10"></div>
        {/* Development Section Card */}
        <div className="max-w-screen-xl w-[95%]">
          <DevCard />
        </div>
      </main>
    </>
  );
};

export const DevCard = () => {
  return (
    <main className="flex justify-center items-center flex-wrap w-full gap-6 max-sm:px-10 py-5 z-20">
      {/* Card1 */}
      <div className="flex items-center bg-mediumgrey sm:max-w-sm sm:gap-4 gap-2 py-9 px-5 mx-3 rounded shadow-2xl">
        <HiMiniComputerDesktop className="text-primary text-[12rem]" />
        <article className="max-sm:mx-3">
          <h3 className="text-mediumyellow font-semibold mb-3">
            Web & SAAS Development
          </h3>
          <p className="text-white ">
            Its a recurring revenue model and provides faster deployment time
            than on-premises software
          </p>
        </article>
      </div>

      {/* Card2 */}
      <div className="flex items-center sm:max-w-sm sm:gap-4 gap-2 sm:px-4 p-2 mx-3 rounded shadow-2xl bg-mediumgrey">
        <CiMobile3 className="text-primary text-[15rem]" />
        <article>
          <h3 className="text-mediumyellow font-semibold mb-3">
            Mobile Development
          </h3>
          <p className="text-white">
            Its the trend of the future as mobile devices become more and more
            powerful, and the browser takes an even more dominant role as the
            operating system of the future.
          </p>
        </article>
      </div>

      {/* Card3 */}
      <div className="flex items-center sm:max-w-sm sm:gap-4 gap-2 sm:px-4 p-2 mx-3 rounded shadow-2xl bg-mediumgrey">
        <BiBrain className="text-primary text-[15rem]" />
        <article>
          <h3 className="text-mediumyellow font-semibold mb-3">
            Research & Development
          </h3>
          <p className="text-white">
            R&D is separate from most operational activities performed by a
            corporation. This is typically not performed with the expectation of
            immediate profit.
          </p>
        </article>
      </div>
    </main>
  );
};
