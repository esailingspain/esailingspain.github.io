import React, {Component} from 'react';

class DashTabItem extends Component{
    render(){
        var {Title, Details, Image} = this.props;
        return(
            <div className="Item">
                <div className="sec-title">
                    <h2>{Title}</h2>
                    <p>{Details}</p>
                </div>
                <div className="tab-img">
                    <img src={require('../../assets/image/tab/' + Image)} alt="" />
                </div>
            </div>
        )
    }
}
export default DashTabItem;