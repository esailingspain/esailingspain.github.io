import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import MainMenu from "../components/Menu/MainMenu"
import Works from "../components/Elements/Works"
import TopFeature from "../components/Elements/TopFeature"
import Dashboard from "../components/Elements/Dashboard"
import DashboardTab from "../components/Elements/DashboardTab"
// import CustomerSlider from "../components/Elements/CutomerSlider"
// import PriceList from "../components/Elements/PriceList"
// import Subscribe from "../components/Elements/Subscribe"
import Footer from "../components/Elements/Footer"
import WidgetData from "../components/Elements/widgets/WidgetData"
import RippleBanner from "../components/Elements/RippleBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="body_wrapper">
      <MainMenu Logo="esailing_logo.svg" />
      <RippleBanner
        Details="Comunidad española de eSailing."
        BtnText="Únete"
        Url="https://discord.gg/8PfD8pu"
        Image="Navegando2.png"
      />
      <Works AddClass="how-work2" />
      <TopFeature />
      <Dashboard LeftTitle="Nuestros Logros" RightTitle="Nuestras expectativas" />
      {/* <DashboardTab /> */}
      {/* <CustomerSlider /> */}
      {/* <PriceList /> */}
      {/* <Subscribe /> */}
      <Footer WidgetData={WidgetData} />
    </div>
  </Layout>
)

export default IndexPage
