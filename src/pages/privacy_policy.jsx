import React from "react"
import VisibilitySensor from "../components/VisibilityCensor"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

const PrivacyPage = props => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about">
        <section className="default-header">
          <div
            className="middle pl pr"
            style={{ display: "flex", alignItems: "center" }}
          >
            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <div className="content">
                  <h1
                    className={
                      isVisible ? "slideUp enter common" : "slideUp common"
                    }
                  >
                    Privacy Policy
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <section className="pl pr">
          <h2>Privacy Policy</h2>
          <p>
            This privacy notice discloses the privacy practices for ursasol.ca.
            This privacy notice applies solely to information collected by this
            website. It will notify you of the following:
          </p>
          <ul>
            <li>
              What personally identifiable information is collected from you
              through the website, how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ul>
          <h4>Information Collection, Use, and Sharing</h4>
          <p>
            We are the sole owners of the information collected on this site.
            Some of this information is used to track analytical data trends. We
            will not sell, distribute or rent this information to anyone ever.
            We will use your information to respond to you, regarding the reason
            you contacted us. We will not share your information with any third
            party outside of our organization.
          </p>
          <h4>Your Access to and Control Over Information</h4>
          <p>
            You may opt out of any future contacts from us at any time. You can
            do the following at any time by contacting us via the email address
            or phone number given on our website:
          </p>
          <ul>
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ul>
          <h4>Security</h4>
          <p>
            We take precautions to protect your information. When you submit
            sensitive information via the website, your information is protected
            both online and offline. Wherever we collect sensitive information,
            that information is encrypted and transmitted to us in a secure way.
            You can verify this by looking for a lock icon in the address bar
            and looking for "https" at the beginning of the address of the Web
            page. While we use encryption to protect sensitive information
            transmitted online, we also protect your information offline. Only
            employees who need the information to perform a specific job (for
            example, billing or customer service) are granted access to
            personally identifiable information. The computers/servers in which
            we store personally identifiable information are kept in a secure
            environment.
          </p>
          <h6
            className="contact"
            style={{ textAlign: "center", paddingTop: "72px" }}
          >
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at <br />
            <a href="tel:+62896706255135"> + 1 (250) 588 6941 </a>
            or via email:
            <a href="mailto:info@builtbetter.tech"> info@builtbetter.tech</a>
          </h6>
        </section>
      </div>
    </Layout>
  )
}

export default PrivacyPage
