import React, {Component} from 'react';

class FeatureLeftItem extends Component{
    render(){
        var {Title, Details, BtnText, Url, Image} = this.props;
        return(
            <div className="features-item f-br">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="f-content">
                                <h2>{Title}</h2>
                                <p>{Details}</p>
                                <a href={Url} className="btn feature-btn">{BtnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-image">
                    <img src={require("../../assets/image/" + Image)} alt="" />
                </div>
            </div>
        )
    }
}
export default FeatureLeftItem;