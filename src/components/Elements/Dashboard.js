import React, {Component} from 'react';
import DashItem from './DashItem';

import Background from '../../assets/image/powerful-bg.jpg';

var Image = {
    background: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

class Dashboard extends Component{ 
    render(){
        var {LeftTitle, RightTitle} = this.props;
        return(
            <section className="powerful-features" style={ Image }>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 powerful-items power-item-l">
                            <h2 className="po-title">{LeftTitle}</h2>
                            <DashItem Class="wow fadeInUp" delay="200ms"
                                Icon="lnr lnr-laptop-phone"
                                Url="https://discord.gg/8PfD8pu"
                                Title="La comunidad más numerosa"
                                Details="Gestionamos la Comunidad Nacional mejor valorada y con más usuarios del mundo. El ejemplo a seguir!!"
                            />
                            <DashItem Class="wow fadeInUp" delay="600ms"
                                Icon="lnr lnr-diamond"
                                Title="Usuarios expertos"
                                Details="Tenemos una amplia experiencia en la organización de regatas de eSailing: De flota, rankings, Team Racing, Match Race..."
                            />
                            <DashItem Class="wow fadeInUp" delay="900ms"
                                Icon="lnr lnr-rocket"
                                Title="Colaboramos con los mejores"
                                Details="Tenemos una estrecha colaboración con la Comunidad Internacional, eSailingtv y SailRanks. Y nuestro objetivo es continuar colaborando"
                            />
                        </div>
                        <div className="col-md-6 powerful-items power-item-r">
                            <div className="vs-icon">
                                vs
                            </div>
                            <h2 className="po-title">{RightTitle}</h2>
                            <DashItem Class="wow fadeInUp" delay="400ms"
                                Icon="lnr lnr-database"
                                Title="Mejorar nuestras competiciones"
                                Details="Seguiremos explorando formatos, sistemas y mejoras para llegar a la excelencia en la organización de eventos"
                            />
                            <DashItem Class="wow fadeInUp" delay="800ms"
                                Icon="lnr lnr-license" 
                                Title="Llegar al mayor número de usuarios"
                                Details="Realización de campeonatos para todos los públicos, desde alto nivel hasta los primeros pasos"
                            />
                            <DashItem Class="wow fadeInUp" delay="1s"
                                Icon="lnr lnr-chart-bars"
                                Title="Comunidad en contínuo crecimiento"
                                Details="Facilitar el acceso a todas las personas sean de la edad que sean"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Dashboard;