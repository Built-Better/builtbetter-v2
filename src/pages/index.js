import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import CTA from "../components/CTA"
import Hero from "../views/landing/Hero"
import Intro from "../views/landing/Intro"
import Work from "../views/landing/Work"
import Services from "../views/landing/Services"
import RecentPosts from "../views/landing/RecentPosts"
import FAQ from "../views/landing/faq/FAQ"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Intro />
      <Work />
      <CTA
        title="We've got more"
        linkText="View More Case Studies"
        linkUrl="/case_studies"
        styles={{ paddingBottom: "0", marginBottom: "0" }}
      />
      <Services />
      <FAQ />
      <RecentPosts />
      <CTA
        title="We Write more"
        linkText="All Blog Posts"
        linkUrl="/blog"
        styles={{ paddingTop: "24px" }}
      />
    </Layout>
  )
}

export default IndexPage
