import React, {Component} from 'react';

class CenterTitle extends Component{
    render(){
        var {Title, Subtitle} = this.props;
        return(
            <div className="sec-title">
                <h2>{Title}</h2>
                <p>{Subtitle}</p>
            </div>
        )
    }
}
export default CenterTitle;