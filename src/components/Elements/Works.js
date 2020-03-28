import React, {Component} from 'react';
import CenterTitle from './CenterTitle';
import WorkItem from './WorkItem';



class Works extends Component{
    render(){
        return(
            <section className={"how-work-area " + this.props.AddClass}>
                <div className="container">
                    <CenterTitle Title="¿Cómo funciona?" Subtitle="Es muy sencillo." />
                    <div className="row">
                        <WorkItem Class=" wow fadeIn" delay="0.5s"
                            Icon="lnr lnr-cloud-sync"
                            Title="Virtual Regatta"
                            Details="Virtual Regatta INSHORE: El juego oficial de la World Sailing."
                        />
                        
                        <WorkItem Class=" wow fadeIn" delay="1s"
                            Icon="lnr lnr-pie-chart"
                            Title="Comunidad"
                            Details="Únete a nuestro discord. La mayor comunidad de e-sailing del mundo."
                        />
                        <WorkItem Class=" wow fadeIn" delay="1.3s"
                            Icon="lnr lnr-earth"
                            Title="SailRanks"
                            Details="La aplicación web para gestión de regatas de e-sailing."
                        />
                    </div>
                </div>
            </section>
        )
    }
}
export default Works;