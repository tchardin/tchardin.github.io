import React, { Component } from 'react'
import Face from './components/Face'
import Detame from './Detame'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
  }
  _toggleMenu() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }))
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar is-white is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img className="image is-16x16" src="https://s3-us-west-2.amazonaws.com/mypf/images/tc_icon.png" />
              </a>
              <span
                className={this.state.menu ? "navbar-burger burger is-active" : "navbar-burger burger"}
                onClick={() => this._toggleMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div className={this.state.menu ? "navbar-menu is-active" : "navbar-menu"}>
              <div className="navbar-end">
                <a className="navbar-item has-text-weight-bold"
                  href="https://www.linkedin.com/in/tchardin" target="_blank">
                  LinkedIn
                </a>
                <a className="navbar-item has-text-weight-bold"
                  href="https://github.com/tchardin" target="_blank">
                  Github
                </a>
                <a className="navbar-item has-text-weight-bold"
                  href="mailto:tdotchardin@gmail.com">
                  Email
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <Face />
              <h1 className="title is-uppercase is-size-1">
                Projects
              </h1>
            </div>
          </div>
        </section>
        <div className="container is-widescreen space-around">
        <div className="tile is-ancestor">
          <Detame />
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image is-16by9">
                <img src="https://s3-us-west-2.amazonaws.com/mypf/images/vinyl.png" />
              </figure>
              <p className="title is-uppercase yellowLine">Vinyl Dreams</p>
              <p className="subtitle">How might we enable non musicians to create and share their own music?</p>
              <div className="content">
                <p>Vinyl Dreams is a mobile app for music creation.</p>
                <p>My contribution for this project is solely on the graphics and UX front.</p>
              </div>
              <div className="tags">
                <span className="tag is-danger">UI/UX</span>
                <span className="tag is-danger">iOS</span>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image is-16by9">
                <img src="https://s3-us-west-2.amazonaws.com/mypf/images/proem.png" />
              </figure>
              <p className="title is-uppercase yellowLine">Proem</p>
              <p className="subtitle">How might we design a secure and decentralized cryptocurrency portfolio manager?</p>
              <div className="content">
                <p>Proem is a decentralized portfolio management platform built on Blockstack. It enables users to visualize their assets with metrics from multiple markets and blockchains with data encrypted on their own controlled storage.</p>
                <p>I am currently working on developing trading algorithms and a mobile app to monitor them.</p>
              </div>
              <div className="tags">
                <span className="tag is-danger">Web</span>
                <span className="tag is-danger">React</span>
                <span className="tag is-danger">Crypto</span>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://s3-us-west-2.amazonaws.com/mypf/images/ezgif.com-resize.gif" />
              </figure>
              <p className="title is-uppercase blueLine">Credo</p>
              <p className="subtitle">How might we enable credit thin/invisible individuals to bootstrap financial reputation?</p>
              <div className="content">
                <p>Credo is a decentralized data verification platform. Credit invisible users self report their data leveraging cryptography to prove authenticity and bootstrap a new decentralized and portable reputation.</p>
                <p>This app was built throughout the summer for IDEO Colab.</p>
              </div>
              <div className="tags">
                <span className="tag is-danger">Decentralized Identity</span>
                <span className="tag is-danger">Cryptography</span>
                <span className="tag is-danger">iOS</span>
                <span className="tag is-danger">React Native</span>
              </div>
            </article>
          </div>
        </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <figure className="image">
                      <img src="https://s3-us-west-2.amazonaws.com/mypf/images/c311po-cover1.jpg" />
                    </figure>
                    <p className="title is-uppercase blueLine">C311po</p>
                    <p className="subtitle">How might we recognize changes in public sentiment to optimize city administration?</p>
                    <div className="content">
                      <p>C311-PO is a virtual assistant for reporting non emergency issues in the city of Boston, integrated in Facebook Messenger platform.</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Machine Learning</span>
                      <span className="tag is-danger">Chat Bot</span>
                      <span className="tag is-danger">Node JS</span>
                    </div>
                  </article>
                  <article className="tile is-child box">
                    <figure className="image is-16by9">
                      <img src="https://s3-us-west-2.amazonaws.com/mypf/images/contexta1.jpg" />
                    </figure>
                    <p className="title is-uppercase blueLine">Contexta</p>
                    <p className="subtitle">How might we use artificial intelligence to create a personalized learning experience?</p>
                    <div className="content">
                      <p>Contexta is a virtual homework assistant on Amazon Echo platform. It provides personalized, adaptive, contextualized homework based on location, current events and user input.</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Chat Bot</span>
                      <span className="tag is-danger">Node JS</span>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <figure className="image">
                      <img src="https://s3-us-west-2.amazonaws.com/mypf/images/recoin.png" />
                    </figure>
                    <p className="title is-uppercase blueLine">RECoin</p>
                    <p className="subtitle">How might we incentivize adoption of electric vehicles?</p>
                    <div className="content">
                      <p>For this sprint at IDEO Colab we prototyped what it would be like to mine a token built on Ethereum through driving electric vehicles as a way to incentivize adoption.</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Blockchain</span>
                      <span className="tag is-danger">Vue JS</span>
                    </div>
                  </article>
                  <article className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="https://s3-us-west-2.amazonaws.com/mypf/images/kaitt-2.gif" />
                    </figure>
                    <p className="title is-uppercase blueLine">KAITT</p>
                    <p className="subtitle">How might we redesign priority in a system of autonomous vehicles?</p>
                    <div className="content">
                      <p>KAITT is a voice controlled virtual assistant designed to handle emergencies in autonomous vehicles systems. It is able to detect, assess and rank the level of emergency of a given situation and obtain priority on the road to drive passengers as fast as possible to their destination.</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Machine Learning</span>
                      <span className="tag is-danger">Chat Bot</span>
                      <span className="tag is-danger">Node JS</span>
                      <span className="tag is-danger">Processing</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">
                  <figure className="image">
                    <img src="https://s3-us-west-2.amazonaws.com/mypf/images/squid.gif" />
                  </figure>
                  <p className="title is-uppercase blueLine">Squid</p>
                  <p className="subtitle">How might we design a seamless concert ticketing experience?</p>
                  <div className="content">
                    <p>This project developed over a 5 months period with financial support from an angel investor and Berklee ICE. When the Facebook Messenger platform opened and after frustrating personal experiences with ticket purchases, we saw the opportunity of simplifying ticket discovery and purchase via a chat interface.</p>
                    <p>The app leverages Messenger platform functionalities such as location, quick replies, template cards and integrated payment system to create a fluid experience. With a small script it identifies the users’ favorite artists playing in their geographic area.</p>
                    <p>This showed the caveats of depending on 3rd parties platforms and pushed me to explore decentralized architectures.</p>
                  </div>
                </div>
                <div className="tags">
                  <span className="tag is-danger">Chat Bot</span>
                  <span className="tag is-danger">Web App</span>
                  <span className="tag is-danger">Node JS</span>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <figure className="image is-16by9">
                  <img src="https://s3-us-west-2.amazonaws.com/mypf/images/sounditure1.jpg" />
                </figure>
                <p className="title is-uppercase blueLine">Sounditure</p>
                <p className="subtitle">How might we generate physical representation of sound?</p>
                <div className="content">
                  <p>Sounditure is an online platform for design and manufacturing of custom furniture based on audio data from your favorite songs. This project was made during a 24h hackathon at MIT and was awarded the Autodesk prize.</p>
                </div>
                <div className="tags">
                  <span className="tag is-danger">3D Modeling</span>
                  <span className="tag is-danger">Web App</span>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <figure className="image is-16by9">
                  <img src="https://s3-us-west-2.amazonaws.com/mypf/images/openmusic.jpg" />
                </figure>
                <p className="title is-uppercase yellowLine">Open Music</p>
                <p className="subtitle">How might we identify owners of creative works and verify their identity?</p>
                <div className="content">
                  <p>The Open Music Initiative is an academic and open source project to help musicians get compensated more fairly by increasing interoperability between all the parties of the music industry.  I am contributor of the Identity, Security & Audit Services group.</p>
                </div>
                <span className="tag is-danger">Blockchain</span>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <figure className="image is-16by9">
                  <img src="https://s3-us-west-2.amazonaws.com/mypf/images/bandpass.jpg" />
                </figure>
                <p className="title is-uppercase blueLine">Bandpass</p>
                <p className="subtitle">How might we design an interactive concert experience?</p>
                <div className="content">
                  <p>Bandpass originally started as an app to create interactive (audience controlled) visuals for live concerts using biometric data and wearable technology. It then pivoted towards a small ecommerce platform for real time merch sales during concerts.</p>
                </div>
                <div className="tags">
                  <span className="tag is-danger">Biometrics</span>
                  <span className="tag is-danger">Data Visualization</span>
                  <span className="tag is-danger">Processing</span>
                </div>
              </article>
            </div>
          </div>
        </div>
        <hr />
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">In progress</p>
              <p className="title">4</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Past</p>
              <p className="title">8</p>
            </div>
          </div>
        </nav>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered is-size-7">
              <p>
              All the work presented is my own in colaboration with team members. Please contact me for any questions!
              </p>
              <p>My role for each project is software developer unless noted otherwise.</p>
              <p>
              2017 - <strong>Thomas Chardin</strong>
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
