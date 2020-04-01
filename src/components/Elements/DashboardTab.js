import React, {Component} from 'react';
import DashTabItem from './DashTabItem';

class DashboardTab extends Component{
    render(){
        return(
        <section className="tab-features-area" id="service">
            <div className="container">
                <div className="nav nav-tabs tab-features" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">01. Ranking eSailing España</a>
{/*                     <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">02. Regatas a medida</a>
 */}                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">02. A tu disposición</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">03. Colaboramos con la RFEV</a>
                </div>
                <div className="tab-content features-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <DashTabItem 
                            Title="01. Ranking eSailing España"                
                            Details="Más de 300 participantes. Una regata semanal de máximo dos horas. Los mejores jugadores nacionales. Diversión asegurada. "
                            Image="tab11.jpg"
                        />
                    </div>
                    {/* <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <DashTabItem 
                            Title="02. Regatas a medida"
                            Details="Organizamos tus regatas a medida. Con las mejores herramientas para eSailing. Olvídate de quebraderos de cabeza y trabajo extra"
                            Image="tab2.jpg"
                        />
                    </div> */}
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <DashTabItem 
                            Title="02. A tu disposición"
                            Details="Puedes consultarnos cualquier duda en el Discord de la Comunidad Española de eSailing"
                            Image="tab22.jpg"
                        />
                    </div>
                    <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                        <DashTabItem 
                            Title="03. Colaboramos con la RFEV"
                            Details="La comunidad española de eSailing colabora con la RFEV en la organización del Campeonato y la Copa de España"
                            Image="tab44.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default DashboardTab;