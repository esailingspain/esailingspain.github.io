import React, {Component} from 'react';
import Typer from './Typer';

class HomeBanner extends Component{
    render(){
        var{Image, Details, BtnText, Url} = this.props;
        return(
            <section className="hero-area" id="home">
                <div className="container">
                    <div className="hero-content">
                        <div id="typed-strings">
                            <Typer dataText={["Web Developer","Photographer","UI/UX Designer", "Freelancer"]} />
                        </div>
                        <h2 className="hero-title"><span id="typed"></span></h2>
                        <p>{Details}</p>
                        <a href={Url} className="btn hero-btn wow fadeInLeft" data-wow-delay="300ms">{BtnText}</a>
                    </div>
                    <div className="hero-img">
                        <img src={require("../../assets/image/baner/" + Image)} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}
export default HomeBanner;