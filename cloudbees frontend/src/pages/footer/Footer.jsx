export const Footer = () => {
  return (
    <main className="bg-primary p-14 mt-10 flex justify-center items-center">
      <section className="max-w-screen-xl w-[95%]">
        <h1 className="text-white text-4xl max-sm:text-3xl mb-5 font-semibold">
          CLOUDBEES TECH
        </h1>
        <div className="w-full h-1 bg-mediumgrey mt-2"></div>

        {/* Address details */}

        <section className="text-white font-bold flex flex-wrap justify-between items-center gap-3 mt-8">
          <div>
            <h4 className="mb-2">Contact</h4>
            <p className="mb-2">
              <span>Email ID:</span> hrsupport@b2vtech.com
            </p>
            <p>
              <span>India Contact:</span> +91 -7358760777
            </p>
            <p>
              <span>US Contact:</span> +1 (614) 632-9349
            </p>
          </div>
          <div>
            <h4 className="mb-2">Pondicherry</h4>
            <p>No 1, 3rd main road,</p>
            <p>Chellapappu nagar,</p>
            <p>Reddiyarpalayam,</p>
            <p>Pondicherry 605010</p>
          </div>
          <div>
            <h4 className="mb-2">USA</h4>
            <p>8999, Ellrod way,</p>
            <p>Lewis center,</p>
            <p>Ohio - 43035</p>
          </div>
        </section>
      </section>
    </main>
  );
};
