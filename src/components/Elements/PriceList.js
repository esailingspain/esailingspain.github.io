import React, {Component} from 'react';
import CenterTitle from './CenterTitle';
import PriceItem from './PriceItem';


class PriceList extends Component{
    render(){
        return(
            <section className="pricing-area" id="price">
                <div className="container">
                    <CenterTitle Title="Our Pricing Plan" Subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    <div className="row">
                        <PriceItem Class="wow fadeInLeft" delay="400ms"
                            Icon="lnr lnr-rocket" 
                            Name="Free"
                            list1="Easy Installations"
                            list2="Unlimited support"
                            list3="Uniqe Elements"
                            list4=""
                            price="0"
                        /> 
                        <PriceItem Class="wow fadeInUp" delay="600ms"
                            Icon="lnr lnr-diamond" 
                            Name="Medium"
                            list1="Easy Installations"
                            list2="Unlimited support"
                            list3="Uniqe Elements"
                            list4="Free Forever"
                            price="49"
                        /> 
                        <PriceItem Class="wow fadeInRight" delay="400ms"
                            Icon="lnr lnr-license" 
                            Name="Business"
                            list1="Easy Installations"
                            list2="Unlimited support"
                            list3="Uniqe Elements"
                            list4="Free Forever"
                            price="99"
                        /> 
                    </div>
                </div>
            </section>
        )
    }
}
export default PriceList;