import React, {Component} from 'react';

class AboutWD extends Component{
    render(){
        var {Logo, Details, Class, delay} = this.props;
        return(
            <div className={"f-widget logo_widget col-lg-3 col-md-6 " + Class} data-wow-delay={delay}>
                <a href="index.html" className="logo">
                    <img src={require("../../../assets/image/logo/" + Logo)} alt="f-logo" />
                </a>
                <p>{Details}</p>
            </div>
        )
    }
}
export default AboutWD;