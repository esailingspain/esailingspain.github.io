import React, { Component } from "react"
import AboutWD from "./widgets/AboutWD"
import LinkWD from "./widgets/LinkWD"
//import WorkWD from "./widgets/WorkWD"
import WidgetData from "./widgets/WidgetData"
import LegalWD from "./widgets/LegalWD"
import SubscribeWD from "./widgets/SubscribeWD"
import FacebookPage from "./widgets/FacebookPageWD"

class Footer extends Component {
  render() {
    const footerLinks = [
          {
           id: 1,
           name: "Política de privacidad",
           url: "/privacidad",
         },/*
         {
           id: 2,
           name: "About",
           url: "#",
         },
         {
           id: 3,
           name: "FAQ",
           url: "#",
         },
         {
           id: 4,
           name: "Contact Support",
           url: "#",
         }, */
    ]
    return (
      <footer className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
                <AboutWD Logo="logo-trans-mini.png" Details="Actualmente la mayor comunidad de e-sailing del mundo." />
                {/* <LinkWD Title="About" WidgetData={WidgetData.PageLink} Class="wow fadeInUp" delay="200ms" />
                <WorkWD Title="Work" WidgetData={WidgetData.Work} Class="wow fadeInUp" delay="400ms" />*/}
                <LegalWD Title="Legal" WidgetData={WidgetData.Legal} Class="wow fadeInUp" delay="600ms" /> 
              <SubscribeWD Title="Redes Sociales" WidgetData={WidgetData.Social} Class="wow fadeInUp" delay="800ms" />
              <FacebookPage Class="wow fadeInUp" delay="800ms" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>Copyright © {new Date().getFullYear()} esailing.es</p>
              </div>
              <div className="col-md-6">
                <ul className="b-lists">
                  {footerLinks.map(item => {
                    return (
                      <li key={item.id}>
                        <a href={item.url}>{item.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
