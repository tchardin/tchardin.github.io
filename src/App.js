import React, { Component } from 'react'
import faceIcon from './face.svg'
import Face from './components/Face'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }
  handleMenuClick() {
    this.setState(prevState => {
      menu: !prevState.menu
    })
  }
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img className="image is-16x16" src="https://s3-us-west-2.amazonaws.com/mypf/images/tc_icon.png" />
                  </a>
                  <span className="navbar-burger burger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="navbar-menu">
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
          </div>
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
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title is-uppercase yellowLine">Detame</p>
              <p className="subtitle">How might we help web users keep track of their digital identities?</p>
              <div className="content">
                <p>Detame is a browser extensions that tracks data recorded during site visits to reconstruct decentralized identities.</p>
                <p>This is part of a research work on portable reputation and decentralized identity.</p>
                <p>More to come on this...</p>
              </div>
              <div className="tags">
                <span className="tag is-danger">Decentralized Identity</span>
                <span className="tag is-danger">Web</span>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://s3-us-west-2.amazonaws.com/mypf/images/ezgif.com-resize.gif" />
              </figure>
              <p className="title is-uppercase blueLine">Credo</p>
              <p className="subtitle">How might we create a decentralized credit score?</p>
              <div className="content">
                <p>Credo is a decentralized data verification platform. Credit invisible individuals self report their data leveraging cryptography to prove authenticity and bootstrap a new decentralized and portable reputation.</p>
                <p>This app was built throughout the summer for IDEO Colab.</p>
              </div>
              <div className="tags">
                <span className="tag is-danger">Decentralized Identity</span>
                <span className="tag is-danger">Cryptography</span>
                <span className="tag is-danger">iOS</span>
              </div>
            </article>
          </div>
        </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://s3-us-west-2.amazonaws.com/mypf/images/recoin.png" />
                  </figure>
                  <p className="title is-uppercase blueLine">RECoin</p>
                  <p className="subtitle">How might we incentivize adoption of electric vehicles?</p>
                  <div className="content">
                    <p>For this sprint at IDEO Colab we prototyped what it would be like to mine a token built on Ethereum when driving electric vehicles as a way to incentivize adoption.</p>
                  </div>
                  <span className="tag is-danger">Blockchain</span>
                </article>
              </div>
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <p className="title is-uppercase blueLine">C311po</p>
                    <p className="subtitle">How might we recognize changes in public sentiment to optimize city administration?</p>
                    <div className="content">
                      <p>C311-PO is a virtual assistant for reporting non emergency issues in the city of Boston, integrated in Facebook Messenger platform.</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Machine Learning</span>
                      <span className="tag is-danger">Chat Bot</span>
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
                    </div>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="https://s3-us-west-2.amazonaws.com/mypf/images/kaitt-2.gif" />
                    </figure>
                    <p className="title is-uppercase blueLine">KAITT</p>
                    <p className="subtitle">How might we redesign priority in a system of autonomous vehicles?</p>
                    <div className="content">
                      <p>KAITT is a voice controlled virtual assistant designed to handle emergencies in autonomous vehicles systems. It is able to detect, assess and rank the level of emergency of a given situation and gain priority on the road to drive passengers as fast as possible to their destination.</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Machine Learning</span>
                      <span className="tag is-danger">Chat Bot</span>
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
                    <p>This project developed over a 5 months period with financial support from an angel investor and Berklee ICE. When the Facebook Messenger platform opened and after frustrating personal experiences with ticket purchases, we saw the opportunity of simplifying ticket discovery and purchase via a chat interface. In fact, current ticketing platforms such as Ticketmaster or Axs are slow and complicated without great mobile first experiences forcing third party apps such as Songkick and Bandsintown to appear. A seamless experience would require a complete redesign.</p>
                    <p>We leveraged Messenger platform functionalities such as location, quick replies, template cards and integrated payment system to create a fluid experience. We first build a small script to identify the users’ favorite artists playing in their geographic area. We also implemented an integrated ticket query via Ticketmaster followed by the option to finish the purchase. As our friends started using it we gradually added features such as concert recommendations based on influent music publications and search of similar artists etc.</p>
                  </div>
                </div>
                <div className="tags">
                  <span className="tag is-danger">Chat Bot</span>
                  <span className="tag is-danger">Web App</span>
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
                </div>
              </article>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered is-size-7">
              <p>
              All the work presented is my own in colaboration with team members. Please contact me for any questions!
              </p>
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
