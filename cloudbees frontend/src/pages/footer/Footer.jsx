import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export const Footer = () => {
  return (
    <main className="py-10 mt-10 flex justify-center items-center bg-my-footer w-full relative overflow-hidden">
      <section className="max-w-screen-2xl w-[95%]">
        <h1 className="text-secondary text-6xl max-[330px]:text-[25px] max-[600px]:text-[40px] mb-5 font-semibold font-[Gabriela]">
          CloudBees <span className="text-white">Tech</span>
        </h1>
        <div className="w-full h-1 bg-secondary mt-2"></div>
        {/* Address details */}
        <section className="text-white px-2 max-[620px]:text-center font-medium grid grid-cols-4 items-center max-[1040px]:grid-cols-2 max-[620px]:grid-cols-1 gap-5  mt-8">
          <div>
            <h4 className="mb-2 text-black font-bold">CONTACT</h4>
            <article className="flex gap-2 items-center max-[620px]:justify-center">
              <span>
                <MdEmail className="text-secondary text-xl" />
              </span>
              <p>hr@cloudbeestech.com</p>
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
            <p className="flex items-center max-[620px]:justify-center">
              <span className="text-secondary text-xl">
                <MdLocationPin />
              </span>
              #1,III main road,
            </p>
            <p>Chellampappu nagar,</p>
            <p>Reddiyarpalayam,</p>
            <p>Pondicherry - 605010</p>
          </div>
          <div>
            <h4 className="mb-2 text-black font-bold">USA</h4>
            <p className="flex items-center max-[620px]:justify-center">
              {" "}
              <span className="text-secondary text-xl">
                <MdLocationPin />
              </span>
              #8999, Ellrod way,
            </p>
            <p>Lewis center,</p>
            <p>Ohio - 43035</p>
          </div>
          <div>
            <h4 className="mb-2 text-black font-bold">CHENNAI</h4>
            <p className="flex items-center max-[620px]:justify-center">
              <span className="text-secondary text-xl">
                <MdLocationPin />
              </span>
              #68,r k shanmugam salai,
            </p>
            <p>Opposite to double tank.</p>
            <p>KK nagar Chennai - 600078</p>
          </div>
        </section>
      </section>
    </main>
  );
};
