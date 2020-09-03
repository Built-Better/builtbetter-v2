import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { toast } from "react-toastify"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Subscribe.scss"
import Spinner from "../../components/Spinner"

export default function Subscribe() {
  const [sendingSignUp, setSendingSignUp] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    setSendingSignUp(true)
    const result = await addToMailchimp(email)
    setSendingSignUp(false)
    setEmail("")
    if (result.result === "success")
      toast.success(
        "❤️🤗 Thanks for subscribing! Check your email for your confirmation, and happy reading!"
      )
    else
      toast.error(
        "🤔 Hmmm something went wrong... Are you sure this email isn't already subscribed?"
      )
  }

  return (
    <section>
      <div className="blog-subscribe">
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              <span style={{ backgroundColor: "white" }}>Subscribe</span>
            </h2>
          )}
        </VisibilitySensor>

        <div className="content">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <p className={isVisible ? "slideUp enter" : "slideUp"}>
                Like what you see and want more?
                <br />
                Subscribe today and we’ll keep you up to date.
              </p>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <form
                id="subscribe-form"
                onSubmit={handleSubmit}
                className={isVisible ? "slideUp enter" : "slideUp"}
              >
                <span className="submit">
                  <input
                    type="email"
                    required
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button className={sendingSignUp ? "loading" : ""}>
                    {sendingSignUp ? <Spinner /> : "SUBMIT"}
                  </button>
                </span>
              </form>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  )
}
