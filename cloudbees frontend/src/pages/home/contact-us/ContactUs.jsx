import { useState } from "react";

// resuable component
import { RequestQuotes } from "./RequestForm";
// api
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactSchema } from "./Validations";

export const ContactUs = () => {
  return (
    <main id="contact">
      <h1 className="text-center w-full text-4xl text-primary font-semibold mb-16 mt-16">
        Contact Us
      </h1>
      <div className="flex justify-center items-center">
        <section className="max-w-screen-xl w-[95%] grid md:grid-cols-2 overflow-hidden grid-cols-1 sm:p-4">
          {/* Map linked */}
          <iframe
            className="w-full h-full max-md:h-[450px]"
            src="https://www.google.com/maps/d/embed?mid=1YFYwl_GTfy-R_78RRN-JpIQfLKHYDPM&ehbc=2E312F" 
            sallowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>

          <div className="lg:ml-5 bg-white w-full">
            <h4 className="text-2xl text-secondary font-medium sm:mb-5 max-md:mt-6 pl-3">
              Send a Message
            </h4>
            {/* Adding the Form */}
            <Form />
          </div>
        </section>
      </div>
    </main>
  );
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(ContactSchema) });

  const [requestForm, setRequestForm] = useState(false);

  const onSubmit = handleSubmit((data) => {
    let storeContactData = data;
    createStudentFunc(storeContactData);
    reset({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  });

  // server connections
  function createStudentFunc(data) {
    try {
      axios({
        method: "post",
        url: "localhost:5000/contactinfo/add",

        data: data,
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <main className="w-full sm:px-2 mt-5">
      <section className="grid sm:my-3 sm:grid-cols-2 grid-cols-1 w-full sm:space-x-6">
        <section>
          <div className="border-b max-sm:my-3 border-primary3">
            <input
              className="w-full outline-none py-5 px-3"
              type="text"
              placeholder="First Name"
              {...register("firstname")}
            />
          </div>

          <p className="text-star mt-2">{errors.firstname?.message}</p>
        </section>
        <section>
          <div className="border-b max-sm:my-3 border-primary3">
            <input
              className="w-full outline-none py-5 px-3"
              type="text"
              placeholder="Last Name"
              {...register("lastname")}
            />
          </div>
        </section>
      </section>
      <section className="grid sm:my-3 sm:grid-cols-2 grid-cols-1 w-full sm:space-x-6">
        <section>
          <div className="border-b max-sm:my-3 border-primary3">
            <input
              className="w-full outline-none py-5 px-3"
              type="email"
              placeholder="Email ID"
              {...register("email")}
            />
          </div>

          <p className="text-star mt-2">{errors.email?.message}</p>
        </section>
        <section>
          <div className="border-b max-sm:my-3 border-primary3">
            <input
              className="w-full outline-none py-5 px-3"
              type="tel"
              placeholder="Mobile Number"
              {...register("phone")}
            />
          </div>
        </section>
      </section>
      {/* Textarea */}
      <div className="border-b border-primary3 w-full mb-8">
        <textarea
          rows="4"
          className="w-full resize-none outline-none py-5 px-3"
          placeholder="Write your message here..."
          {...register("message")}
        ></textarea>
      </div>
      {/* Button */}
      <section className="flex items-center justify-between flex-wrap w-full mt-10 gap-2">
        <div
          className="border-0 px-8 py-2 bg-primary text-secondary text-xl rounded-full hover:ring-2 hover:ring-mediumgrey"
          onClick={onSubmit}
        >
          <button type="submit">Send</button>
        </div>
        <div className="border-0 px-8 py-2 max-sm:mt-2 bg-primary text-secondary text-xl rounded-full hover:ring-2 hover:ring-mediumgrey">
          <button onClick={() => setRequestForm(true)}>
            Request for Quotes
          </button>
        </div>
      </section>

      {/* adding request form */}
      {requestForm && <RequestQuotes onclose={() => setRequestForm(false)} />}
    </main>
  );
};

// !--------End Contact Form-----------------------------!
