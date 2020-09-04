import React, { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Form.scss"
import Arrow from "../../images/assets/arrow.svg"

export default function Form(props) {
  // Netlify stuff
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const { register, handleSubmit, errors, getValues, reset } = useForm()

  const [active, setActive] = useState({
    name: false,
    company: false,
    email: false,
    message: false,
  })

  const nameRef = useRef()
  const companyRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleFieldClick = name => {
    if (name === "name") nameRef.current.focus()
    if (name === "company") companyRef.current.focus()
    if (name === "email") emailRef.current.focus()
    if (name === "message") messageRef.current.focus()

    const new_state = {}

    Object.keys(active).forEach(field => {
      if (name === field || getValues(field).length) new_state[field] = true
      else {
        new_state[field] = false
      }
    })
    setActive(new_state)
  }

  const handleFieldClickOff = field => {
    if (!getValues(field).length) setActive({ ...active, [field]: false })
  }

  const resetForm = () => {
    reset()
    setActive({
      name: false,
      company: false,
      email: false,
      message: false,
    })
  }

  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        resetForm()
        toast.success(
          "YOUR MESSAGE WAS SENT! \n ⏱️ We'll get to you as soon as we can!"
        )
      })
      .catch(error => alert(error))
  }

  return (
    <section className="contact-form pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Contact Us
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              Have a project or idea? <br /> Let’s talk!
            </h2>
          </>
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <div className="form-layout">
            <div className="form-container">
              <form
                id="contact"
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                method="post"
                className={isVisible ? "slideUp enter" : "slideUp"}
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div
                  className="form-entry"
                  onClick={() => handleFieldClick("name")}
                  onBlur={() => handleFieldClickOff("name")}
                  data-error={errors.name ? "true" : "false"}
                >
                  <label
                    htmlFor="name"
                    data-active={active.name ? "true" : "false"}
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    ref={e => {
                      register(e, { required: true })
                      nameRef.current = e
                    }}
                  />
                  <span className="error">
                    <span className="symbol">!</span>
                  </span>
                </div>
                <div
                  className="form-entry"
                  onClick={() => handleFieldClick("company")}
                  onBlur={() => handleFieldClickOff("company")}
                >
                  <label
                    htmlFor="company"
                    data-active={active.company ? "true" : "false"}
                  >
                    Company Name
                  </label>
                  <input
                    name="company"
                    ref={e => {
                      register(e)
                      companyRef.current = e
                    }}
                  />
                  <span className="error">
                    <span className="symbol">!</span>
                  </span>
                </div>
                <div
                  className="form-entry"
                  onClick={e => handleFieldClick("email")}
                  onBlur={() => handleFieldClickOff("email")}
                  data-error={errors.email ? "true" : "false"}
                >
                  <label
                    htmlFor="name"
                    data-active={active.email ? "true" : "false"}
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    ref={e => {
                      register(e, { required: true })
                      emailRef.current = e
                    }}
                  />
                  <span className="error">
                    <span className="symbol">!</span>
                  </span>
                </div>
                <div
                  className="form-entry textarea-entry"
                  onClick={e => handleFieldClick("message")}
                  onBlur={() => handleFieldClickOff("message")}
                  data-error={errors.message ? "true" : "false"}
                >
                  <label
                    htmlFor="message"
                    data-active={active.message ? "true" : "false"}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    ref={e => {
                      register(e, { required: true })
                      messageRef.current = e
                    }}
                    rows="10"
                  ></textarea>
                  <span className="error">
                    <span className="symbol">!</span>
                  </span>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <button type="submit">
                  <p>Contact Us</p>
                  <Arrow />
                </button>
              </form>
            </div>

            <div
              className={
                isVisible
                  ? "slideUp enter contact-info"
                  : "slideUp contact-info"
              }
            >
              <h5>Email</h5>
              <a href="mailto:info@builtbetter.tech">
                <p>info@builtbetter.tech</p>
              </a>
              <h5>Phone</h5>
              <a href="tel:12505886941">
                <p>250.588.6941</p>
              </a>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  )
}
