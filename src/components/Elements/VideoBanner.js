import React, {Component} from 'react';
import Typer from './Typer';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

class VideoBanner extends Component{
    render(){
        var {VideoName, Details, BtnText, Url} = this.props;
        return(
            <section className="hero-area hero-ripples hero-video" id="home">
                <Video autoPlay loop muted
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    onCanPlayThrough={() => {
                    }} id="bgvid">
                    <source src={require('../../assets/image/' + VideoName)} type="video/webm" />
                </Video>
                <div className="container">
                    <div className="hero-content">
                        <div id="typed-strings">
                            <Typer dataText={["Web Developer","Photographer","UI/UX Designer", "Freelancer"]} />
                        </div>
                        <h2 className="hero-title"><span id="typed"></span></h2>
                        <p>{Details}</p>
                        <a href={Url} className="btn hero-btn wow fadeInLeft" data-wow-delay="300ms">{BtnText}</a>
                    </div>
                </div>
            </section>
        )
    }
}
export default VideoBanner;