import React, {Component} from 'react';

class LinkWD extends Component{
    render(){
        let WidgetData = this.props.WidgetData;
        var {Class, delay} = this.props;
        return(
            <div className={"f-widget about_widget col-lg-2 col-md-3 col-sm-4 " + Class} data-wow-delay={delay}>
                <h4 className="widget_title">{this.props.Title}</h4>
                <div className="widget_inner row m0">
                    <ul>
                        {
                            WidgetData.PageLink.map(item =>{
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
export default LinkWD;