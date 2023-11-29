import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import career from "../../assest/career/career.jpg";
import flutter from "../../assest/career/flutter.png";
import react from "../../assest/career/react.png";
import dm from "../../assest/career/DM.png";
import { FaAnglesRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApplicationSchema } from "../home/contact-us/Validations";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Career = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [form, setForm] = useState(false);
  function OnShow() {
    setForm(!form);
  }
  return (
    <>
      <Navbar />
      <main>
        <section className="flex">
          <div className="h-[600px] w-full shadow-2xl flex flex-col gap-5 justify-center px-12">
            <h1 className="text-4xl text-primary font-bold">Career</h1>
            <p className="text-litegrey">
              <i>
                Embarking on a career is a journey filled with opportunities,
                challenges, and personal growth. It's a dynamic platform
                designed to empower you on your career journey.
              </i>
            </p>
            <h2 className="text-3xl text-secondary font-semibold">
              Your career success starts here!
            </h2>
            <button className="border-primary w-[200px] font-semibold text-lg border-2 rounded-xl text-primary px-5 py-2 hover:bg-primary hover:text-white">
              Join Our Team
            </button>
          </div>
          <div className="h-[600px] w-full shadow-2xl bg-primary relative max-[550px]:hidden">
            <img
              className="absolute top-1/2 -translate-y-1/2 -left-10 max-w-[500px] w-full max-md:w-500px object-cover"
              src={career}
              alt="not found"
            />
          </div>
        </section>
        <section>
          <h1 className="text-3xl text-primary font-bold text-center my-28">
            Latest Job
          </h1>
          <Job onshow={OnShow} />
          <Internship onshow={OnShow} />
          {form && <Application />}
        </section>
      </main>
      <Footer />
    </>
  );
};

export const Job = (props) => {
  const { onshow } = props;
  const FullTimeJob = [
    {
      img: flutter,
      title: "Flutter Developer",
    },
  ];
  return (
    <main className="flex justify-center">
      <section className="max-w-screen-xl w-full">
        <h1 className="text-2xl text-mediumgrey font-semibold mx-5 ">Jobs</h1>
        <div className="flex justify-center items-center">
          {FullTimeJob.map((value, index) => {
            return (
              <div
                key={index}
                className="border-primary bg-secondary gap-2 border-2 rounded-xl max-sm:max-w-[270px] my-10 mx-3 max-w-xs w-full flex flex-col justify-center items-center"
              >
                <div className="bg-white w-full flex justify-center rounded-t-lg">
                  <img
                    className="max-w-[200px] w-full object-cover p-10"
                    src={value.img}
                    alt="not found"
                  />
                </div>
                <h1 className="text-2xl text-primary font-semibold">
                  {value.title}
                </h1>
                <p className="text-lg text-white">Experience : 1-2 years</p>
                <p className="text-lg text-white">Location : Pondicherry</p>
                <button
                  className="border-primary animate-bounce shadow-md shadow-primary hover:animate-none mb-5 mt-3 border-2 text-xl text-primary flex items-center gap-2 px-5 py-2 rounded-xl"
                  onClick={onshow}
                >
                  Apply Now
                  <span className="text-2xl ">
                    <FaAnglesRight />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export const Internship = (props) => {
  const { onshow } = props;
  const InternJob = [
    {
      img: flutter,
      title: "Flutter",
    },
    {
      img: react,
      title: "React/React Native",
    },
    {
      img: dm,
      title: "Digital Marketing",
    },
  ];

  return (
    <main className="flex justify-center">
      <section className="max-w-screen-xl w-full mt-5">
        <h1 className="text-2xl text-mediumgrey font-semibold mx-5">
          Internship
        </h1>
        <div className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 justify-items-center items-center px-5">
          {InternJob.map((value, index) => {
            return (
              <div
                key={index}
                className="border-primary gap-2 border-2 bg-secondary rounded-xl my-10 mx-3 max-w-xs w-full flex flex-col justify-center items-center"
              >
                <div className="bg-white w-full flex justify-center rounded-t-lg">
                  <img
                    className="max-w-[200px] w-full object-cover p-10"
                    src={value.img}
                    alt="not found"
                  />
                </div>
                <h1 className="text-2xl text-primary font-semibold">
                  {value.title}
                </h1>
                <p className="text-lg text-white">Experience : Fresher</p>
                <p className="text-lg text-white px-1 text-center">
                  Year of Passed Out : 2022,2023
                </p>
                <p className="text-lg text-white">Location : Pondicherry</p>
                <button
                  className="border-primary animate-bounce shadow-md shadow-primary hover:animate-none mb-5 mt-3 border-2 text-xl text-primary flex items-center gap-2 px-5 py-2 rounded-xl"
                  onClick={onshow}
                >
                  Apply Now
                  <span className="text-2xl">
                    <FaAnglesRight />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export const Application = () => {
  const [complete, setComplete] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(ApplicationSchema) });

  // const createApplicationForm = (data) => {
  //   try {
  //     axios({
  //       method: "post",
  //       url: "http://localhost:5000/formdata/add",
  //       data: data,
  //     });
  //   } catch (error) {
  //     console.log(("error", error));
  //   }
  // };

  const createApplicationForm = async (data) => {
    try {
      const formData = new FormData();
      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);

      formData.append("resume", data.resume[0]);
      const response = await axios.post(
        "http://localhost:5000/formdata/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const OnSubmit = handleSubmit((data) => {
    const storeFormData = data;
    createApplicationForm(storeFormData);
    setComplete(true);
  });

  return (
    <main className="fixed h-screen w-full flex justify-center bg-liteblack z-50 top-0">
      <div className="max-w-[600px] w-full mt-8 mb-2 bg-white rounded-xl px-5">
        <h1 className="text-center text-primary my-5 text-2xl font-semibold">
          Application form
        </h1>
        <section className="flex flex-col items-center mt-3">
          {form.map((field, index) => {
            return (
              <section key={index} className="w-[90%]">
                <label className="text-lg text-secondary" htmlFor={field.label}>
                  {field.label}{" "}
                  <sup className="text-xl top-[0] text-star">*</sup>
                </label>

                <div className="flex items-center mt-3 rounded-lg group border-2 w-[80%] focus-within:border-mediumyellow focus-within:shadow-lg focus-within:scale-100  border-mediumgrey">
                  <span className="text-xl py-[6px] px-3 text-primary border-mediumgrey group-focus-within:text-mediumgrey group-focus-within:border-primary">
                    {field.icon}
                  </span>
                  <input
                    id={field.label}
                    className="outline-none py-2 w-[80%]"
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name)}
                  />
                </div>
                <p className="text-star mt-2">{errors[field.name]?.message}</p>
              </section>
            );
          })}
        </section>
        <div className="mt-5 ml-7">
          <label className="text-lg text-secondary" htmlFor="resume">
            Attach Resume
          </label>
          <br />
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            {...register("resume")}
          />
          {errors.resume && (
            <p className="text-star mt-2">{errors.resume.message}</p>
          )}
        </div>

        <button
          className="border px-5 py-2 ml-7 my-5 rounded-lg bg-primary text-white font-bold"
          onClick={OnSubmit}
        >
          Sumbit
        </button>
        <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
          {complete && (
            <section className="bg-white shadow-2xl p-10 rounded-xl">
              <p>Your application is sumbited successfully.</p>
              <button
                className="bg-primary rounded-lg px-7 py-2 text-white font-bold mt-5"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Okay
              </button>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export const form = [
  {
    label: "FirstName",
    placeholder: "FirstName",
    name: "firstname",
    type: "text",
    icon: <IoPersonSharp />,
  },
  {
    label: "LastName",
    placeholder: "LastName",
    type: "text",
    icon: <IoPersonSharp />,
    name: "lastname",
  },
  {
    label: "Email",
    placeholder: "Email",
    type: "email",
    name: "email",
    icon: <MdEmail />,
  },
  {
    label: "PhoneNumber",
    placeholder: "PhoneNumber",
    type: "tel",
    icon: <FaPhoneAlt />,
    name: "phone",
  },
];
