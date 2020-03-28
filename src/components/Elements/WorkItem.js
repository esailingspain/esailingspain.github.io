import React, {Component} from 'react';

class WorkItem extends Component{
    render(){
        var {Icon, Title, Details, Class, delay} = this.props;
        return(
            <div className={"col-md-4 work-item " + Class} data-wow-delay={delay}>
                <div className="icon">
                    <span className={Icon}></span>
                </div>
                <h2>{Title}</h2>
                <p>{Details}</p>
            </div>
        )
    }
}
export default WorkItem;