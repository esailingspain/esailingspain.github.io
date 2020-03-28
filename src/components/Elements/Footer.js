import React, {Component} from 'react';
import AboutWD from './widgets/AboutWD';
import LinkWD from './widgets/LinkWD';
import WorkWD from './widgets/WorkWD';
import WidgetData from './widgets/WidgetData';
import LegalWD from './widgets/LegalWD';
import SubscribeWD from './widgets/SubscribeWD';

class Footer extends Component{
    render(){
        return(
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <AboutWD Logo="footer-logo.png" Details="Lorem ipsum dolor sit ameteli doe xquabore et d olore mag- nam aliquam quaerat volup- tatem magnam aliquam quaerat voluptatem." />
                            <LinkWD Title="About" WidgetData={WidgetData} Class="wow fadeInUp" delay="200ms" />
                            <WorkWD Title="Work" WidgetData={WidgetData} Class="wow fadeInUp" delay="400ms" />
                            <LegalWD Title="Legal" WidgetData={WidgetData} Class="wow fadeInUp" delay="600ms" />
                            <SubscribeWD Title="Subscribe" WidgetData={WidgetData} Class="wow fadeInUp" delay="800ms" />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Copyright © {(new Date().getFullYear())} datasaas.com, Design by <a href=".#">Rocky Ahammed</a></p>
                            </div>
                            <div className="col-md-6">
                                <ul className="b-lists">
                                    {
                                        WidgetData.PageList.map(item =>{
                                            return(
                                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;