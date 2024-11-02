import "./Form.css";

import { useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { TbUser } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  console.log("errors", errors);

  const form = useRef();

  const sendEmail = (data) => {
    console.log("Form Data:", data);
    emailjs
      .sendForm(
        "service_k3uizrx",
        "template_gblnv4p",
        form.current,
        "w7diBVP61T4VeETEw"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} autoComplete="off" onSubmit={handleSubmit(sendEmail)}>
        <h1 className="title text-center mb-4">Talk to Us</h1>

        <div className="form-group position-relative ">
          <label className="d-block">
            <i className="icon">
              <TbUser />
            </i>
          </label>
          <input
            {...register("user_name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be atleast 3 characters long",
              },
              maxLength: {
                value: 30,
                message: "Name must be atmosst 30 characters long",
              },
            })}
            type="text"
            name="user_name"
            className="form-control form-control-lg thick "
            placeholder="Name"
          />
          <p className="validation">{errors.user_name?.message}</p>
        </div>

        <div className="form-group position-relative">
          <label className="d-block">
            <i className="icon" data-feather="mail">
              <MdOutlineEmail />
            </i>
          </label>
          <input
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email must be valid",
              },
            })}
            type="email"
            name="user_email"
            className="form-control form-control-lg thick"
            placeholder="E-mail"
          />
          <p className="validation">{errors.user_email?.message}</p>
        </div>

        <div className="form-group message">
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long",
              },
            })}
            name="message"
            className="form-control form-control-lg"
            rows="7"
            placeholder="Mensagem"
          ></textarea>
		  <p className="validation">{errors.message?.message}</p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            value="Send"
            className="btn btn-primary"
            tabIndex="-1"
          >
            Send message
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
