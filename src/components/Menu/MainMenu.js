import React, { Component } from "react"
// import { Link } from "react-scroll"
import { AnchorLink  as GLink } from "gatsby-plugin-anchor-links"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const menuStyles = css`
  .nav-link:focus {
    color:#fff !important;
  }
`

class MainMenu extends Component {
  constructor(props) {
    super()
    this.state = {
      scrolled: props.scrollTrigger === 0 ? true : false,
      scrollTopTrigger: props.hasOwnProperty("scrollTrigger")
        ? props.scrollTrigger
        : 100,
    }
    this.scrollFn = this.handleScrollEventListener.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFn)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFn)
  }

  handleScrollEventListener() {
    const isTop = window.scrollY < this.state.scrollTopTrigger
    if (isTop !== true) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    return (
      <header
        className={this.state.scrolled ? "main_menu scrollled" : "main_menu"}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light header-area">
          <a className="navbar-brand" href="/">
            <img
              src={require("../../assets/image/logo/esailing_logo.svg")}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto menu" css={menuStyles}>
              <li>
                <GLink to="/#home" activeClassName="active" className="nav-link">Home</GLink>
              </li>
              <li>
                <GLink to="/#how-work" activeClassName="active" className="nav-link">Como</GLink>
              </li>
              <li>
                <GLink to="/#features" activeClassName="active" className="nav-link">Servicios</GLink>
              </li>
              <li>
                <GLink to="/#service" activeClassName="active" className="nav-link">Logros</GLink>
              </li>
              <li>
                <GLink to="/#testimonial" activeClassName="active" className="nav-link">Colaboradores</GLink>
              </li>
              {/* <li>
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
              </li> */}
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
export default MainMenu
