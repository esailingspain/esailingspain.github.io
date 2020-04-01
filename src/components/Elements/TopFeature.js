import React, {Component} from 'react';
import FeatureLeftItem from './FeatureLeftItem';
import FeatureRightItem from './FeatureRightItem';

class TopFeature extends Component{
    render(){
        return(
            <section className="features-area" id="features">
                <FeatureLeftItem 
                     Title="¿Gestiona tus regatas?"
                     Details="Únete a la plataforma de gestión de resultados de eSailing: SAILRANKS"
                     BtnText="Entrar"
                     Url="https://sailranks.com"
                     Image="sailRankshome2.png" 
                />
                <FeatureRightItem 
                                       Title="¿Dónde verlo?"
                    Details="En eSailingTV, el principal canal de streaming para Virtual Regatta Inshore."
                    BtnText="Visitar"
                    Url="https://www.esailing.tv/"
                    Image="esailingTV_2.png" 
                />
            </section>
        )
    }
}
export default TopFeature;