import React, {Component} from 'react';
import FeatureLeftItem from './FeatureLeftItem';
import FeatureRightItem from './FeatureRightItem';

class TopFeature extends Component{
    render(){
        return(
            <section className="features-area" id="features">
                <FeatureLeftItem 
                    Title="Top level featueres"
                    Details="Lorem ipsum dolor sit amet, consectetur adipisicg elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused."
                    BtnText="Learn More"
                    Url="#"
                    Image="pad-img1.png" 
                />
                <FeatureRightItem 
                    Title="Top level featueres"
                    Details="Lorem ipsum dolor sit amet, consectetur adipisicg elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused."
                    BtnText="Learn More"
                    Url="#"
                    Image="pad-img2.png" 
                />
            </section>
        )
    }
}
export default TopFeature;