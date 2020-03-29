import React, {Component} from 'react';
import CenterTitle from './CenterTitle';
import WorkItem from './WorkItem';
import { InshoreIcon } from "./icons/InshoreIcon"
import { DiscordIcon } from "./icons/DiscordIcon"
import { SailranksIcon } from "./icons/SailranksIcon"


class Works extends Component{
    render(){
        return(
            <section className={"how-work-area " + this.props.AddClass} id="how-work">
                <div className="container">
                    <CenterTitle Title="¿Cómo funciona?" Subtitle="Es muy sencillo." />
                    <div className="row">
                        <WorkItem Class=" wow fadeIn" delay="0.5s"
                            component={(props) => <InshoreIcon {...props}/>}
                            Image="INSHORE.svg"
                            Icon="lnr lnr-cloud-sync"
                            Title="Virtual Regatta"
                            Details="Virtual Regatta INSHORE: El juego oficial de la World Sailing."
                        />
                        
                        <WorkItem Class=" wow fadeIn" delay="1s"
                            component={(props) => <DiscordIcon {...props}/>}
                            link="https://discord.gg/8PfD8pu"
                            Image="Discord.svg"
                            Icon="lnr lnr-pie-chart"
                            Title="Comunidad"
                            Details="Únete a nuestro discord. La mayor comunidad de eSailing del mundo."
                        />
                        <WorkItem Class=" wow fadeIn" delay="1.3s"
                            component={(props) => <SailranksIcon {...props}/>}
                            Image="SAILRANKS_BLACK.svg"
                            Icon="lnr lnr-earth"
                            Title="SailRanks"
                            Details="La aplicación web para gestión de regatas de eSailing."
                        />
                    </div>
                </div>
            </section>
        )
    }
}
export default Works;

