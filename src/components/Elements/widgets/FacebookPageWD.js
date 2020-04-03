import React, { Component } from "react"
import { FacebookProvider, Page } from "react-facebook"

export default class FacebookPage extends Component {
  render() {
    var {Class, delay} = this.props;

    return (
        <div className={"f-widget subs_widget col-lg-4 col-md-9 " + Class} data-wow-delay={delay}>

      <FacebookProvider appId="539740663412925">
        <Page
        // width="30vw"
        // height={200}
        // style={{width: 600, height: 200}}
        // adaptContainerWidth={true}
          href="https://www.facebook.com/ESailing-Espa%C3%B1a-110093473964194/"
          tabs="timeline"
        />
      </FacebookProvider>
      </div>
    )
  }
}
