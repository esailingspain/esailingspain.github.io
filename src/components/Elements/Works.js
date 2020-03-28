import React, {Component} from 'react';
import CenterTitle from './CenterTitle';
import WorkItem from './WorkItem';



class Works extends Component{
    render(){
        return(
            <section className={"how-work-area " + this.props.AddClass}>
                <div className="container">
                    <CenterTitle Title="How It Works?" Subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    <div className="row">
                        <WorkItem Class=" wow fadeIn" delay="0.5s"
                            Icon="lnr lnr-cloud-sync"
                            Title="DATA ANALYTICS"
                            Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et laborused."
                        />
                        
                        <WorkItem Class=" wow fadeIn" delay="1s"
                            Icon="lnr lnr-pie-chart"
                            Title="PRODUCT GROWTH"
                            Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et laborused."
                        />
                        <WorkItem Class=" wow fadeIn" delay="1.3s"
                            Icon="lnr lnr-earth"
                            Title="SEO"
                            Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et laborused."
                        />
                    </div>
                </div>
            </section>
        )
    }
}
export default Works;