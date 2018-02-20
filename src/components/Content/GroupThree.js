import React from 'react'
import ProjectCard from './ProjectCard'

const GroupThree = () => {
  return (
    <div className="parallax__group group_3">
      <aside className="parallax__layer parallax__layer--fore">
        <ProjectCard
          position="is-left"
          name="Contexta"
          hmw="How might we use artificial intelligence to create a personalized learning experience?"
          description="Contexta is a virtual homework assistant on Amazon Echo platform. It provides personalized, adaptive, contextualized homework based on location, current events and user input."
          image="https://s3-us-west-2.amazonaws.com/mypf/images/contexta1.jpg"/>
        <ProjectCard
          position="is-top"
          name="recoin"
          hmw="How might we incentivize adoption of electric vehicles?"
          description="For this sprint at IDEO Colab we prototyped what it would be like to mine a token built on Ethereum through driving electric vehicles as a way to incentivize adoption."
          image="https://s3-us-west-2.amazonaws.com/mypf/images/recoin.png"/>
       <ProjectCard
          position="is-bottom"
          name="kaitt"
          hmw="How might we redesign priority in a system of autonomous vehicles?"
          description="KAITT is a voice controlled virtual assistant designed to handle emergencies in autonomous vehicles systems. It is able to detect, assess and rank the level of emergency of a given situation and obtain priority on the road to drive passengers as fast as possible to their destination."
          image="https://s3-us-west-2.amazonaws.com/mypf/images/kaitt-2.gif"/>
        <ProjectCard
          position="is-right"
          name="c311po"
          hmw="How might we recognize changes in public sentiment to optimize city administration?"
          description="C311-PO is a virtual assistant for reporting non emergency issues in the city of Boston, integrated in Facebook Messenger platform."
          image="https://s3-us-west-2.amazonaws.com/mypf/images/c311po-cover1.jpg"/>
      </aside>
      <main className="parallax__layer parallax__layer--base is-magenta">
        <div className="group_3--content">
          <h1 className="content-title">
            <mark>Venture Design</mark>
          </h1>
          <p className="content-subtitle">
            <mark>Exploring emerging technologies at IDEO COLAB.</mark>
          </p>
        </div>
      </main>
    </div>
  )
}

export default GroupThree
