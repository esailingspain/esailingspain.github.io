import React, {Component} from 'react';

class WorkWD extends Component{
    render(){
        let WidgetData = this.props.WidgetData;
        var {Class, delay} = this.props;
        return(
            <div className={"f-widget work_widget col-lg-2 col-md-3 col-sm-4 " + Class} data-wow-delay={delay}>
                <h4 className="widget_title">{this.props.Title}</h4>
                <div className="widget_inner row m0">
                    <ul>
                        {
                            WidgetData.map(item =>{
                                return(
                                    <li key={item.id}><a href={item.url}>{item.name}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default WorkWD;