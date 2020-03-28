import React, {Component} from 'react';


class PriceItem extends Component{
    render(){
        var {Icon, Name, list1, list2, list3, list4, price, Class, delay} = this.props;
        return(
            <div className={"col-md-4 price " + Class} data-wow-delay={delay}>
                <div className="pricing-box">
                    <div className="pricing-header">
                        <i className={Icon}></i>
                        <h2>{Name}</h2>
                    </div>
                    <ul className="list-unstyled plan-lists">
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                        <li>{list4}</li>
                    </ul>
                    <h3 className="packeg_p"><span>$</span>{price}<small>/Month</small></h3>
                    <a href=".#" className="purchase-btn">Purchase</a>
                </div>
            </div>
        )
    }
}
export default PriceItem;