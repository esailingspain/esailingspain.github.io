import React, {Component} from 'react';
import {Link} from 'react-scroll';

class MainMenu extends Component{
    constructor(){
      super();
      this.state= {
        scrolled: false,
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100;
        if (isTop !== true) {
          this.setState({scrolled: true});
        } else {
          this.setState({scrolled: false});
        }
      });
    }

    componentWillUnmount() {
      window.removeEventListener('scroll');
    }

    render(){
        return(
          <header className={this.state.scrolled ? 'main_menu scrollled' : 'main_menu'}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light header-area">
          <a className="navbar-brand" href="index.html"><img src={require("../../assets/image/logo/esailing_logo.svg")} alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto menu">
              <li>
                <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
              </li>
              <li>
                <Link className="nav-link" activeClass="active" to="how-work" spy={true} smooth={true} offset={0} duration={500}>Como</Link>
              </li>
              <li>
                <Link className="nav-link" activeClass="active" to="features" spy={true} smooth={true} offset={0} duration={500}>Servicios</Link>
              </li>
               <li>
                <Link className="nav-link" activeClass="active" to="service" spy={true} smooth={true} offset={0} duration={500}>Logros</Link>
              </li> 
              <li>
                <Link className="nav-link" activeClass="active" to="testimonial" spy={true} smooth={true} offset={0} duration={500}>Colaboradores</Link>
              </li>
              {/* <li>
                <Link className="nav-link" activeClass="active" to="price" spy={true} smooth={true} offset={0} duration={500}>Pricing</Link>
              </li>
              <li>
                <Link className="nav-link" activeClass="active" to="Subscribe" spy={true} smooth={true} offset={0} duration={500}>Subscribe</Link>
              </li> */}
            </ul>
          </div>
        </nav>
        </header>
        )
    }
}
export default MainMenu;