import { HiMiniComputerDesktop } from "react-icons/hi2";
import { CiMobile3 } from "react-icons/ci";
import { BiBrain } from "react-icons/bi";

export const DevSection = () => {
  return (
    <main>
      {/* <h4 className="text-primary text-4xl font-semibold text-center mt-20 mb-3">
        SERVICES
      </h4>
      <h1 className="sm:text-4xl text-3xl mx-3 text-center font-medium mt-5 mb-16">
        Provide Awesome Services To You
      </h1> */}
      <section className="relative flex items-center justify-center py-2 mb-8">
        <div className="bg-primary text-third w-full h-20 absolute -z-10"></div>
        {/* Development Section Card */}
        <div className="max-w-screen-xl w-[95%]">
          <DevCard />
        </div>
      </section>
    </main>
  );
};

export const DevCard = () => {
  return (
    <main className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1 w-full gap-6 max-sm:px-10 py-5 z-20">
      {DevCardDetails.map((value, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-xl w-full sm:gap-4 gap-2 sm:px-4 p-2 mx-3 bg-secondary"
          >
            <article className="text-primary text-[5rem]">
              {value.icons}
            </article>

            <article>
              <h3 className="text-mediumyellow font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-white mb-2">{value.p}</p>
            </article>
          </div>
        );
      })}
    </main>
  );
};

export const DevCardDetails = [
  {
    icons: <HiMiniComputerDesktop />,
    title: "Digital Marketing",
    p: "Digital marketing the bridge between ideas and engagement.Elevate your brand in the digital space, where impressions become connections.",
  },
  {
    icons: <HiMiniComputerDesktop />,
    title: "Web & SAAS Development",
    p: "Its a recurring revenue model and provides faster deployment time than on-premises software",
  },
  {
    icons: <CiMobile3 />,
    title: "Mobile Development",
    p: "Its the trend of the future as mobile devices become more and more powerful, and the browser takes an even more dominant role as the operating system of the future.",
  },
  {
    icons: <BiBrain />,
    title: "Research & Development",
    p: "R&D is separate from most operational activities performed by a corporation. This is typically not performed with the expectation of immediate profit.",
  },
];
