import React, {Component} from 'react';
import DashTabItem from './DashTabItem';

class DashboardTab extends Component{
    render(){
        return(
        <section className="tab-features-area" id="service">
            <div className="container">
                <div className="nav nav-tabs tab-features" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">01. Dashboard Screen</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">02. Dashboard Screen</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">03. Dashboard Screen</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">04. Dashboard Screen</a>
                </div>
                <div className="tab-content features-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <DashTabItem 
                            Title="01. Dashboard Screen"
                            Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            Image="tab1.jpg"
                        />
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <DashTabItem 
                            Title="02. Dashboard Screen"
                            Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            Image="tab2.jpg"
                        />
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <DashTabItem 
                            Title="03. Dashboard Screen"
                            Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            Image="tab3.jpg"
                        />
                    </div>
                    <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                        <DashTabItem 
                            Title="04. Dashboard Screen"
                            Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            Image="tab4.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default DashboardTab;