import services from "../../../assest/home_services/services.jpg";

export const HomeService = () => {
  return (
    <main className="grid grid-cols-2 my-28 max-[1020px]:grid-cols-1">
      <ServicesDetails />
      <div className="relative max-[1020px]:hidden bg-ashgrey rounded-l-3xl flex justify-center items-center px-20 pb-10">
        <img
          className="object-cover w-full min-w-[300px]"
          src={services}
          alt="not found"
        />
      </div>
    </main>
  );
};

export const ServicesDetails = () => {
  return (
    <section className="max-w-screen-xl w-[95%] ml-8 z-10 max-[1020px]:p-8 max-[1020px]:m-0">
      <h1 className="text-primary text-3xl mb-5 font-semibold relative left-9 max-[1020px]:left-0 max-[1020px]:text-center max-[1020px]:text-3xl max-[1020px]:font-bold max-[1020px]:mb-16">
        Services
      </h1>
      <div className="flex flex-col gap-5">
        {SD.map((value, index) => {
          return (
            <div
              key={index}
              className="border-r-[12px] rounded-2xl bg-white odd:border-primary even:border-secondary relative max-[800px]:text-center max-[900px]:border-l-[12px] max-[900px]:border-r-[0px] max-[800px]:border-t-[12px] max-[800px]:border-l-[0px] -right-10 max-[1020px]:-right-0 last:mb-5"
            >
              <section
                key={index}
                className="relative border-ashgrey border-2 rounded-md p-3"
              >
                <h1 className="text-secondary text-xl font-semibold mb-1">
                  {value.title}
                </h1>
                <p className="text-litegrey text-sm">{value.p}</p>
              </section>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const SD = [
  {
    title: "Digital Marketing",
    p: "Digital marketing is the strategic use of online channels such as social media, search engines, and email to promote products or services, driving brand awareness and customer engagement in the digital realm.",
  },
  {
    title: "Web Development",
    p: "Web development is about building websites and web applications using languages like HTML, CSS, and JavaScript. Front-end work focuses on how things look and feel, while back-end development handles the behind-the-scenes functionality.",
  },
  {
    title: "Mobile Native & Hybrid",
    p: "Mobile native development involves creating apps specifically for a single platform, like iOS or Android, utilizing platform-specific languages and tools for optimal performance.",
  },
  {
    title: "UI/UX Design",
    p: " UI/UX design collaboratively addresses both the look and feel of a product, aiming to optimize user engagement and satisfaction by combining visually appealing interfaces with intuitive and user-friendly experiences.",
  },
  {
    title: "AWS/Azure Cloud",
    p: "AWS (Amazon Web Services) and Azure (Microsoft Azure) are leading cloud computing platforms, providing a vast array of scalable and on-demand computing resources.",
  },
  {
    title: "CI/CD DevOps",
    p: "Continuous Integration/Continuous Deployment (CI/CD) in DevOps is a software development approach that automates the building, testing, and deployment of applications.",
  },
];
