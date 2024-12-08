import React from "react";
import "./ContactStyles.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <div className="contact-main-div">
      <h2>Get promotions & updates!</h2>
      <p>
        Seamlessly empower fully researched growth strategies and interoperable
        internal or “organic” sources credibly innovate granular internal .
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="subscribe-form"
      >
        <input
          {...register("email", { required: true })}
          type="email"
          className="subscribe-input"
          placeholder="Enter your email"
        />
        
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
      {errors?.email && <span style={{color: "white"}}>This field is required</span>}
    </div>
  );
};

export default Contact;
