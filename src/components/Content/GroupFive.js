import React from 'react'
import OmiLogo from './openmusic.png'

const GroupFive = () => {
  return (
    <div className="parallax__group group_5">
      <main className="parallax__layer parallax__layer--high">
        <div className="group_5--content">
          <h1 className="content-title">
            <mark>Open Source and Side Projects</mark>
          </h1>
          <p className="content-subtitle">
            <mark>Bridging music, arts and technology.</mark>
          </p>
        </div>
      </main>
      <aside className="parallax__layer parallax__layer--fore">
        <figure className="group_5--media_2">
          <img className="image"
            src={OmiLogo}
            width="200px"
            alt="Open Music logo"/>
        </figure>
        <figure className="group_5--media">
          <img className="image"
            src="https://s3-us-west-2.amazonaws.com/mypf/images/squid.gif"
            width="250px"
            alt="Chatbot animation"/>
        </figure>
      </aside>
      <div className="parallax__layer parallax__layer--base is-yellow">
        <div className="title is-clear">
          <img className="image"
            src="https://s3-us-west-2.amazonaws.com/mypf/images/openmusic.jpg"
            alt="Open Music Cover"
            height="500"/>
        </div>
      </div>
    </div>
  )
}

export default GroupFive
