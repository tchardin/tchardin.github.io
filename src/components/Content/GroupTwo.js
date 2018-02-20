import React from 'react'
import './Content.css'
import BayerLogo from './Bayer.svg'
import BraintreeLogo from './Braintree.png'
import BlueCrossLogo from './bcbsma.svg'

const GroupTwo = () => {
  return (
    <div className="parallax__group group_2">
      <aside className="parallax__layer parallax__layer--base">
        <figure className="group_2--media">
          <span className="label">clients</span>
          <img id="pictureImage" className="image"
            src={BayerLogo}
            alt="Bayer Logo"
            width="220"
            height="220" />
          <img id="pictureImage" className="image"
            src={BraintreeLogo}
            alt="Braintree Logo"
            width="220"/>
          <img id="pictureImage" className="image"
            src={BlueCrossLogo}
            alt="Blue Cross Logo"
            width="220"
            height="100"/>
        </figure>
      </aside>
      <main className="parallax__layer parallax__layer--back is-cyan">
        <div className="group_2--content">
          <h1 className="content-title">
            <mark>Front End Development</mark>
          </h1>
          <p className="content-subtitle">
            <mark>Designing and building user interfaces for startups and bigger corporations.</mark>
          </p>
        </div>
      </main>
    </div>
  )
}

export default GroupTwo
