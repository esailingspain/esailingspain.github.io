import React, {Component} from 'react';

class MockupBanner extends Component{
    render(){
        var {Title, Details, BtnText, Url, Image} = this.props;
        return(
            <section className="hero-area hero-area2" id="home">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">{Title}</h1>
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
export default MockupBanner;