import React, {Component} from 'react';
import FeatureLeftItem from './FeatureLeftItem';
import FeatureRightItem from './FeatureRightItem';

class TopFeature extends Component{
    render(){
        return(
            <section className="features-area" id="features">
                <FeatureLeftItem 
                    Title="¿Dónde verlo?"
                    Details="En eSailingTV, el principal canal de streaming para Virtual Regatta Inshore."
                    BtnText="Visitar"
                    Url="https://www.esailing.tv/"
                    Image="esailingTV.png" 
                />
                <FeatureRightItem 
                    Title="¿A qué esperas?"
                    Details="Únete ya y pasa a formar parte de la mayor comunidad de eSailing en español."
                    BtnText="Entrar"
                    Url="https://discord.gg/8PfD8pu"
                    Image="vregattaHome.png" 
                />
            </section>
        )
    }
}
export default TopFeature;