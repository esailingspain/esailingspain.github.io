import React, {Component} from 'react';
import CenterTitle from './CenterTitle';

class Subscribe extends Component{
    render(){
        return(
            <section className="subscribe-area" id="Subscribe">
                <div className="container">
                    <CenterTitle Title="Subscribe for More Features" Subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    <form className="mailchimp" method="post">
                        <div className="subcribe">
                            <input type="email" name="EMAIL" id="reg_email" className="form-control memail" placeholder="Enter your email..." />
                            <label>
                                <button className="btn sub_btn" type="submit">subscribe</button>
                            </label>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default Subscribe;