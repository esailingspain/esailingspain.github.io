import React, {Component} from 'react';



class DashItem extends Component{
    render(){
        var {Icon, Title, Details, Url, Class, delay} = this.props;
        return(
            <div className={"media powerful-item " + Class} data-wow-delay={delay}>
                <div className="media-left">
                    <i className={Icon}></i>
                </div>
                <div className="media-body">
                    <a href={Url}><h2>{Title}</h2></a>
                    <p>{Details}</p>
                </div>
            </div>
        )
    }
}
export default DashItem;