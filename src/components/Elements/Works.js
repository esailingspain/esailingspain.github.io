import React, { Component } from "react"
import CenterTitle from "./CenterTitle"
import WorkItem from "./WorkItem"
import { InshoreIcon } from "./icons/InshoreIcon"
import { RFEVIcon } from "./icons/RFEVIcon"
import { DiscordIcon } from "./icons/DiscordIcon"
//import { SailranksIcon } from "./icons/SailranksIcon"

class Works extends Component {
  render() {
    return (
      <section className={"how-work-area " + this.props.AddClass} id="how-work">
        <div className="container">
          <CenterTitle Title="¿Cómo funciona?" Subtitle="Es muy sencillo." />
          <div className="row">
            <WorkItem
              Class=" wow fadeIn"
              delay="0.5s"
              component={props => <InshoreIcon {...props} />}
              link="https://www.virtualregatta.com/en/inshore-game"
              Title="Virtual Regatta"
              Details="Virtual Regatta Inshore: El juego oficial de la World Sailing."
            />
            <WorkItem
              Class=" wow fadeIn"
              delay="1s"
              component={props => <DiscordIcon {...props} />}
              link="https://discord.gg/8PfD8pu"
              Title="eSailing España"
              Details="Únete a nuestro discord. La mayor comunidad de eSailing del mundo."
            />
            <WorkItem
              Class=" wow fadeIn"
              delay="1s"
              component={props => <RFEVIcon {...props} />}
              link="/register"
              Title="Copa de España"
              Details="Inscríbete en la Copa de España de eSailing "
            />

            {/* <WorkItem
              Class=" wow fadeIn"
              delay="1.3s"
              link="https://sailranks.com"
              component={props => <SailranksIcon {...props} />}
              Title="SailRanks."
              Details="La aplicación web para gestión de regatas de eSailing."
            /> */}
          </div>
        </div>
      </section>
    )
  }
}
export default Works
