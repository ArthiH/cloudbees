//connecting for server and client side
import axios from "axios";

// form validation
import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
// React icon
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { RequestSchema } from "./Validations";

export const RequestQuotes = (props) => {
  // closing icons
  const [isHovering, setIsHovered] = useState(true);
  const onMouseEnter = () => setIsHovered(false);
  const onMouseLeave = () => setIsHovered(true);
  //validation methods
  const methods = useForm({ resolver: yupResolver(RequestSchema) });
  const { register, errors, handleSubmit, reset } = methods; // Destructure the necessary methods

  // closing clear from
  const [showclearform, setShowClearForm] = useState(false);
  //onsubmit button
  const OnSubmit = handleSubmit((data) => {
    const storeRequestData = data;
    createRequestForm(storeRequestData);
    reset({
      customername: "",
      phone: "",
      email: "",
      choice: [],
      feature: [],
      backendlist: [],
      language: [],
      backend: "",
      payment: "",
    });
  });

  // server connection section

  function createRequestForm(data) {
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/requestdata/post",
        data: data,
      });
    } catch (error) {
      console.log(("error", error));
    }
  }
  return (
    <FormProvider {...methods}>
      <main className="fixed w-full min-h-screen top-0 z-50 left-0 bg-black bg-opacity-40 ">
        <div className="max-w-[750px] w-[95%] absolute grid top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white pb-10 px-16 rounded-xl h-[90%] overflow-auto scrollbar-hide">
          <section className="sticky top-0 w-full bg-white z-40 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-primary mb-3">
              Request Quotes Form :
            </h1>
            {/* closing Tag */}
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {isHovering ? (
                <span
                  className="text-4xl text-primary m-10"
                  onClick={props.onclose}
                >
                  <AiOutlineClose />
                </span>
              ) : (
                <span
                  className="text-4xl text-primary m-10"
                  onClick={props.onclose}
                >
                  <AiOutlineMinus />
                </span>
              )}
            </div>
          </section>

          {/* form started */}
          <section className="flex flex-col gap-5">
            {/* import inputform */}
            <InputForm />

            {/* import choice */}
            <Choice />

            {/* import Features */}
            <Features />

            {/* import Languages */}
            <Languages />

            {/* Backend required */}
            <div className="border-mediumyellow border p-5 w-full rounded-xl">
              <h3 className="text-lg mb-7 text-secondary">
                Backend <sup className="text-xl top-[0] text-star">*</sup>
              </h3>
              <section className="flex flex-col gap-2">
                {["API", "Cloud"].map((option) => (
                  <div key={option} className="gap-2 flex items-center">
                    <input
                      className="h-[20px] w-[20px]"
                      type="radio"
                      id={option}
                      name="backend"
                      value={option}
                      {...register("backend")}
                    />
                    <label className="text-litegrey text-lg" htmlFor={option}>
                      {option}
                    </label>
                  </div>
                ))}
                <ErrorMessage
                  errors={errors}
                  name="backend"
                  render={({ message }) => (
                    <p className="text-star mb-2">{message}</p>
                  )}
                />
              </section>
            </div>

            {/*Import BackendList */}
            <BackendList />

            {/* Payment Gateway  */}
            <div className="border-mediumyellow border p-5 w-full rounded-xl">
              <h3 className="text-lg mb-7 text-secondary">Payment Gateway</h3>
              <section className="flex flex-col gap-2">
                {["Stripe", "Square"].map((option) => (
                  <div key={option} className="gap-2 flex items-center">
                    <input
                      className="h-[20px] w-[20px]"
                      type="radio"
                      id={option}
                      name="payment"
                      value={option}
                      {...register("payment")}
                    />
                    <label className="text-litegrey text-lg" htmlFor={option}>
                      {option}
                    </label>
                  </div>
                ))}
              </section>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                className="text-white bg-secondary px-3 py-[7px] rounded-md hover:scale-x-110 hover:ring-1 hover:ring-primary"
                type="submit"
                onClick={OnSubmit}
              >
                Submit
              </button>
              <button
                className="text-mediumgrey text-lg"
                onClick={() => setShowClearForm(true)}
              >
                Clear form
              </button>
            </div>
          </section>
        </div>

        {/* Adding clear page */}
        {showclearform && (
          <ClearForm
            // clearform={handleClearForm}
            onclose={() => {
              setShowClearForm(false);
            }}
          />
        )}
      </main>
    </FormProvider>
  );
};

export const InputForm = () => {
  // destructuring methods
  const { register, errors } = useFormContext(); // Call useFormContext() to obtain the register function

  const inputDetails = [
    {
      type: "text",
      label: "Customer Name",
      placeholder: "Your answer",
      name: "customername",
    },
    {
      type: "tel",
      label: "Phone Number",
      placeholder: "Your answer",
      name: "phone",
    },
    {
      type: "email",
      label: "Email",
      placeholder: "Your answer",
      name: "email",
    },
  ];

  return (
    <>
      {inputDetails.map((items, i) => {
        return (
          <main
            className="border-mediumyellow border p-5 w-full rounded-xl"
            key={i}
          >
            <h1 className="text-lg mb-8 text-mediumgrey">
              {items.label} <sup className="text-xl top-[0] text-star">*</sup>
            </h1>
            <input
              className="border-b mb-2 border-litegrey outline-none bg-[transparent] placeholder-litegrey"
              type={items.type}
              placeholder={items.placeholder}
              {...register(items.name)} // Use register to associate input with form state
            />
            <ErrorMessage
              errors={errors}
              name={items.name}
              render={({ message }) => <p className="text-star">{message}</p>}
            />
          </main>
        );
      })}
    </>
  );
};

export const Choice = () => {
  // destructuring methods
  const { register, errors } = useFormContext();

  const checkboxOptions = [
    { value: "mobile", label: "Mobile" },
    { value: "web", label: "Web" },
  ];

  return (
    <div className="border-mediumyellow border p-5 w-full rounded-xl">
      <h3 className="text-lg mb-7 text-secondary">
        Kindly select your choice{" "}
        <sup className="text-xl top-[0] text-star">*</sup>
      </h3>
      <section className="flex flex-col gap-2">
        {checkboxOptions.map((option) => (
          <div key={option.value} className="gap-2 flex items-center">
            <input
              className="h-[20px] w-[20px]"
              type="checkbox"
              id={option.value}
              name="choice"
              value={option.value}
              {...register("choice", {
                required: true,
              })} /* Add required validation */
            />
            <label className="text-litegrey  text-lg" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
        <ErrorMessage
          errors={errors}
          name="choice"
          render={() => (
            <p className="text-star mt-2">
              Please select at least one checkbox
            </p>
          )}
        />
      </section>
    </div>
  );
};

export const Features = () => {
  const { register, errors } = useFormContext();
  const feature = [
    "Auth",
    "Dashboard",
    "Settings",
    "Profile",
    "Notification",
    "Chat",
    "File upload",
    "Video player",
    "Image Viewers",
    "Connections",
    "Other:",
  ];

  return (
    <div className="border-mediumyellow border p-5 w-full rounded-xl">
      <h3 className="text-lg mb-7 text-secondary">
        UI Features <sup className="text-xl top-[0] text-star">*</sup>
      </h3>

      <section>
        {feature.map((value, index) => (
          <section className="flex items-center gap-2" key={index}>
            <input
              className="h-[20px] w-[20px]"
              type="checkbox"
              id={index}
              name="feature"
              value={value}
              {...register("feature")}
            />
            <label className="text-litegrey text-lg" htmlFor={index}>
              {value}
            </label>
          </section>
        ))}
        <ErrorMessage
          errors={errors}
          name={"feature"}
          render={() => (
            <p className="text-star mt-2">Please select at least one feature</p>
          )}
        />
      </section>
    </div>
  );
};

export const Languages = () => {
  const { register, errors } = useFormContext();
  const languages = [
    "Swift/SwiftUI (Native ios)",
    "Kotlin/Java (Native Android)",
    "Flutter/Dart (Hybrid)",
    "React/React Native (Hybrid)",
    "PHP/JS/CSS",
  ];
  return (
    <div className="border-mediumyellow border p-5 w-full rounded-xl">
      <h3 className="text-lg mb-5 text-secondary">
        Languages <sup className="text-xl top-[0] text-star">*</sup>
      </h3>

      <section>
        {languages.map((value) => (
          <section className="flex items-center gap-2" key={value}>
            <input
              className="h-[20px] w-[20px]"
              type="checkbox"
              id={value}
              name="language"
              value={value}
              {...register("language")}
            />
            <label className="text-litegrey text-lg" htmlFor={value}>
              {value}
            </label>
          </section>
        ))}

        <ErrorMessage
          errors={errors}
          name={"language"}
          render={() => (
            <p className="text-star mt-2">
              Please select at least one language
            </p>
          )}
        />
      </section>
    </div>
  );
};

export const BackendList = () => {
  const { register } = useFormContext();
  const backendtype = ["Micro Services", "AWS", "Firebase", "Mango DB", "SQL"];

  return (
    <div className="border-mediumyellow border p-5 w-full rounded-xl">
      <h3 className="text-lg mb-5 text-secondary">Backend</h3>
      <section>
        {backendtype.map((value) => (
          <section className="flex items-center gap-2" key={value}>
            <input
              className="h-[20px] w-[20px]"
              type="checkbox"
              id={value}
              name="backendlist"
              value={value}
              {...register("backendlist", { required: false })}
            />
            <label className="text-litegrey text-lg" htmlFor={value}>
              {value}
            </label>
          </section>
        ))}
      </section>
    </div>
  );
};

export const ClearForm = (props) => {
  const { clearform, onclose } = props;
  return (
    <div
      className="fixed w-full min-h-screen top-0 left-0 flex flex-col justify-center items-center bg-black bg-opacity-40"
      onClick={onclose}
    >
      <section className="bg-white p-4 pl-6 max-w-[450px] rounded-xl">
        <h1 className="text-3xl py-3"> Clear form ?</h1>
        <p className="mb-2">
          This will remove your answers from all questions, and cannot be
          undone.
        </p>
        <article className="flex justify-end gap-3">
          <button
            className="hover:bg-secondary hover:text-white px-2"
            onClick={onclose}
          >
            Cancel
          </button>
          <button
            className="hover:bg-secondary hover:text-white px-2"
            onClick={clearform}
          >
            Clear form
          </button>
        </article>
      </section>
    </div>
  );
};
