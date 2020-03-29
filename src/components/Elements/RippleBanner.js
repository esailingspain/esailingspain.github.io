import React, {Component} from 'react';
// import Typer from './Typer';
// import WaterWave from 'react-water-wave';
import WaterWave from './WaterEffect'

class RippleBanner extends Component{
    render(){
        var {Details, BtnText, Url, Image} = this.props;
        return(
            
            <section className="hero-area hero-ripples ripples" id="home">
                <WaterWave strength={500} className="water_wave" style={{ width: '100%', height: '100%', backgroundSize: 'cover' }} imageUrl={require ("../../assets/image/baner/" + Image)}>
                        {({ getRootProps}) => (
                <div className="container">
                    <div className="hero-content">
                        <div id="typed-strings">
                            {/* <Typer dataText={["Web Developer","Photographer","UI/UX Designer", "Freelancer"]} /> */}
                            {/* <Typer dataText={["eSailing España"]} /> */}
                        </div>
                        <h2 className="hero-title" style={{textTransform: 'none'}}><span id="typed">eSailing España</span></h2>
                        <p>{Details}</p>
                        <a href={Url} className="btn hero-btn wow fadeInLeft" data-wow-delay="300ms">{BtnText}</a>
                    </div>
                </div>
                )}
                </WaterWave>
            </section>
        )
    }
}
export default RippleBanner;