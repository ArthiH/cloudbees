import { useEffect } from "react";
import { Footer } from "../footer/Footer";
import { ContactUs } from "../home/contact-us/ContactUs";
import { Navbar } from "../navbar/Navbar";
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
};
