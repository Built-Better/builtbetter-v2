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
      {/* <Intro /> */}
      <Work />
      <CTA
        title="We've got more"
        linkText="View All Work"
        linkUrl="/our_work"
        styles={{ paddingBottom: "0", marginBottom: "0" }}
        classes="pb-md"
      />
      <Services />
      <FAQ />
      <RecentPosts />
      <CTA
        title="We Write more"
        linkText="All Blog Posts"
        linkUrl="/blog"
        styles={{ paddingTop: "24px" }}
        classes="pt-md"
      />
    </Layout>
  )
}

export default IndexPage
