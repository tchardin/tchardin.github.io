import React from 'react'

const GroupSix = () => {
  return (
    <div className="parallax__group group_6">
      <div className="parallax__layer parallax__layer--back is-black">
        <main className="group_6--content">
          <h1 className="content-title">
            <mark>Get In Touch</mark>
          </h1>
          <ul>
            <li><mark className="is-cyan">Boston</mark></li>
            <li><mark className="is-magenta">New York</mark></li>
            <li><mark className="is-yellow">London</mark></li>
            <li><mark className="is-black">Remote...</mark></li>
          </ul>
          <hr />
          <p className="label is-center">
            2018 - Thomas Chardin
          </p>
        </main>
      </div>
      <div className="parallax__layer parallax__layer--base">
      </div>
    </div>
  )
}

export default GroupSix
