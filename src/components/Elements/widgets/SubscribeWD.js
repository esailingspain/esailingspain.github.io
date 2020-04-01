import React, {Component} from 'react';

class SubscribeWD extends Component{
    render(){
        let WidgetData = this.props.WidgetData;
        var {Class, delay} = this.props;
        return(
            <div className={"f-widget subs_widget col-lg-3 col-md-9 " + Class} data-wow-delay={delay}>
                <h4 className="widget_title">{this.props.Title}</h4>
                {/* <form action="#" className="email-form">
                    <input type="search" className="form-control" placeholder="E-mail" />
                    <button type="submit"><i className="lnr lnr-arrow-right"></i></button>
                </form> */}
                <div className="f-social">
                    {
                        WidgetData.map(item =>{
                            return(
                                <a key={item.id} href={item.url}><i className={item.icon}></i></a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default SubscribeWD;