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
  GroupFive,
  GroupSix
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
        <GroupSix />
      </div>
    )
  }
}

export default Parallax
