import React from 'react'

import Navbar from './components/Navbar'
import SlideShow from './components/SlideShow'
import Cover from './components/Cover'
import Slide, { Background } from './components/Slide'
import Particles from './components/Particles'

import BayerLogo from './components/Logos/Bayer.svg'
import Bcbsma from './components/Logos/bcbsma.svg'
import Braintree from './components/Logos/Braintree.png'

import Image from './components/Image'
import ImageCluster from './components/ImageCluster'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <SlideShow>
          <Cover />
          <Slide
            background={<Background color="cyan"/>}
            title="Front End Development"
            subtitle="Designing and building user interfaces for startups and bigger corporations."
            parallax={true}>
            <Image
              ratio={1}
              url={BayerLogo}
              alt="Bayer Logo"/>
            <Image
              ratio={1}
              url={Bcbsma}
              alt="Blue Cross Blue Shield"/>
            <Image
              ratio={.6}
              url={Braintree}
              alt="Braintree Logo"/>
          </Slide>
          <Slide
            background={<Background color="magenta"/>}
            title="Venture Design"
            subtitle="Exploring emerging technologies at IDEO COLAB."
            parallax={false}>
            <Carousel>
              <Card
                cardTitle="How might we enable credit thin/invisible individuals to bootstrap financial reputation?"
                cardImage="https://s3-us-west-2.amazonaws.com/mypf/images/ezgif.com-resize.gif"
                cardInfo="Credo is a decentralized data verification platform. Credit invisible users self report their data leveraging cryptography to prove authenticity and bootstrap a new decentralized and portable reputation."
                cardOwner="Credo"
                cardType="Web Of Trust"/>
              <Card
                cardTitle="How might we use AI to create a personalized learning experience?"
                cardImage="https://s3-us-west-2.amazonaws.com/mypf/images/contexta1.jpg"
                cardInfo="Contexta is a virtual homework assistant on Amazon Echo platform. It provides personalized, adaptive, contextualized homework based on location, current events and user input."
                cardOwner="Contexta"
                cardType="Artificial Intelligence"/>
              <Card
                cardTitle="How might we incentivize adoption of electric vehicles?"
                cardImage="https://s3-us-west-2.amazonaws.com/mypf/images/recoin.png"
                cardInfo="For this sprint at IDEO Colab we prototyped what it would be like to mine an Ethereum token through driving electric vehicles as a way to incentivize adoption."
                cardOwner="Recoin"
                cardType="Blockchain"/>
              <Card
                cardTitle="How might we redesign priority in a system of autonomous vehicles?"
                cardImage="https://s3-us-west-2.amazonaws.com/mypf/images/kaitt-2.gif"
                cardInfo="KAITT is a voice controlled virtual assistant designed to handle emergencies in autonomous vehicles systems. It is able to detect, assess and rank the level of emergency of a given situation and obtain priority on the road to drive passengers as fast as possible to their destination."
                cardOwner="Kaitt"
                cardType="Chatbot"/>
              <Card
                cardTitle="How might we recognize changes in public sentiment to optimize city administration?"
                cardImage="https://s3-us-west-2.amazonaws.com/mypf/images/c311po-cover1.jpg"
                cardInfo="C311-PO is a virtual assistant for reporting non emergency issues in the city of Boston, integrated in Facebook Messenger platform."
                cardOwner="c311po"
                cardType="Sentiment Analysis"/>
            </Carousel>
          </Slide>
          <Slide
            background={<Particles />}
            title="Web 3.0"
            subtitle="Building financial tools for the new internet."
            description={
              <p>
                <strong>Game of Loans</strong> is a decentralized lending platform built on top of Ethereum and IPFS. It was awarded the Protocol Labs prize at MIT Bitcoin Hackathon.<br/>
                <strong>Proem</strong> is a decentralized crypto asset portfolio manager built on Blockstack.<br/>
                <strong>Cream</strong> is a trading algorithm with a dashboard using graph theory to automatically shift funds as Poloniex market fluctuates.
              </p>}
            parallax={false}>
            <ImageCluster
              alt="Decentralized apps"
              src="https://s3-us-west-2.amazonaws.com/mypf/images/proem.png"
              before="https://s3-us-west-2.amazonaws.com/mypf/images/gol.png"
              after="https://s3-us-west-2.amazonaws.com/mypf/images/cream.png"/>
          </Slide>
          <Slide
            background={<Background color="yellow"/>}
            title="Open Source and Side Projects"
            subtitle="Launching Squid, a collective of hackers and designers colaborating on consulting and open source development."
            description={
              <p>
                <strong>Squid</strong> started off as a chatbot built during college to inform students of live shows near them based on Spotify listening history.<br/>
                It now is the name of a consulting firm/hacker collective based in London I co-founded.<br/>
                <strong>Sounditure</strong> is an online platform for design and manufacturing of custom furniture based on audio data from your favorite songs. This project was made during a 24h hackathon at MIT and was awarded the Autodesk prize.
              </p>
            }
            parallax={false}>
            <ImageCluster
              alt="Project screenshots"
              src="https://s3-us-west-2.amazonaws.com/mypf/images/sounditure1.jpg"
              before="https://s3-us-west-2.amazonaws.com/mypf/images/squid.gif"
              after="https://s3-us-west-2.amazonaws.com/mypf/images/squid-landing.png"/>
          </Slide>
          <Footer />
        </SlideShow>
      </React.Fragment>
    )
  }
}

export default App
