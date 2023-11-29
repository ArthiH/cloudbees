import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export const Footer = () => {
  return (
    <main className=" bg-secondary bg-custom-background bg-no-repeat bg-cover bg-center py-10 mt-10 flex justify-center items-center">
      <section className="max-w-screen-xl w-[95%]">
        <h1 className="text-secondary text-6xl max-[600px]:text-[40px] mb-5 font-semibold font-[Gabriela]">
          CloudBees Tech
        </h1>
        <div className="w-full h-1 bg-secondary mt-2"></div>
        {/* Address details */}
        <section className="text-white px-10  max-[620px]:text-center font-medium grid grid-cols-3 max-[750px]:grid-cols-2 max-[620px]:grid-cols-1 gap-10  mt-8">
          <div>
            <h4 className="mb-2 text-black font-bold">CONTACT</h4>
            <article className="flex gap-2 items-center max-[620px]:justify-center">
              <span className="">
                <MdEmail className="text-secondary text-xl" />
              </span>
              <p className="">hrsupport@b2vtech.com</p>
            </article>
            <article className="flex gap-2 mt-3 max-[620px]:justify-center">
              <p>
                <FaPhone className="text-secondary text-lg" />
              </p>
              <article className="flex flex-col gap-1">
                <span>(India) +91 -7358760777</span>
                <span>(USA) +1 (614) 632-9349</span>
              </article>
            </article>
          </div>
          <div>
            <h4 className="mb-2 text-black font-bold">PONDICHERRY</h4>
            <p>#1,III main road,</p>
            <p>Chellapappu nagar,</p>
            <p>Reddiyarpalayam,</p>
            <p>Pondicherry - 605010</p>
          </div>
          <div>
            <h4 className="mb-2 text-black font-bold">USA</h4>
            <p>#8999, Ellrod way,</p>
            <p>Lewis center,</p>
            <p>Ohio - 43035</p>
          </div>
        </section>
      </section>
    </main>
  );
};
