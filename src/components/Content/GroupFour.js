import React from 'react'
import Particles from '../Particles'

const GroupFour = (props) => {
  return (
    <div className="parallax__group group_4">
      <main className="parallax__layer parallax__layer--base">
        <div className="group_4--content">
          <h1 className="content-title">
            <mark>Blockchain and Decentralized Identity</mark>
          </h1>
          <p className="content-subtitle">
            <mark>Building the WEB 3.0</mark>
          </p>
        </div>
      </main>
      <aside className="parallax__layer parallax__layer--back">
        <figure className="group_4--media">
          <img className="image"
            src="https://s3-us-west-2.amazonaws.com/mypf/images/ezgif.com-resize.gif"
            alt="credo animation"
            height="300"/>
        </figure>
      </aside>
      <div className="parallax__layer parallax__layer--deep is-yellow">
        <Particles {...props}/>
      </div>
    </div>
  )
}

export default GroupFour
