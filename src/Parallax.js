/**
 * TODO: Add black footer. Personal projects should be yellow.
 * Add media queries or max-width for wide screens.
 */
import React, {PureComponent} from 'react'
import './Parallax.css'

import Face from './components/Face'
import {
  GroupOne,
  GroupTwo,
  GroupThree,
  GroupFour,
  GroupFive
} from './components/Content'

class Parallax extends PureComponent {
  render() {
    return (
      <div className="parallax">
        <GroupOne />
        <GroupTwo />
        <GroupThree />
        <GroupFour />
        <GroupFive />
        <div className="parallax__group group_6">
          <div className="parallax__layer parallax__layer--back is-black">
          </div>
          <div className="parallax__layer parallax__layer--base">
          </div>
        </div>
      </div>
    )
  }
}

export default Parallax
