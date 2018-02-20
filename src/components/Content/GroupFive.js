import React from 'react'

const GroupFive = () => {
  return (
    <div className="parallax__group group_5">
      <div className="parallax__layer parallax__layer--fore">
        <div className="group_5--content">
          <h1 className="content-title">
            <mark>Open Source and Side Projects</mark>
          </h1>
          <p className="content-subtitle">
            <mark>Bridging music, arts and technology.</mark>
          </p>
        </div>
      </div>
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
