import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.figure`
  position: relative;
  display: block;
  @media screen and (min-width: 500px) {
    width: 700px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.before});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    top: -50%;
    left: 50%;
    transform-style: preserve-3d;
    @media screen and (min-width: 500px) {
      transform: translateZ(20px) scale(0.72);
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.after});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    top: 50%;
    right: 10%;
    transform-style: preserve-3d;
    @media screen and (min-width: 500px) {
      transform: translateZ(55px) scale(0.6);
    }
  }
`
const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  -webkit-user-drag: none;
`

const ImageCluster = ({
  before,
  after,
  ...other
}) => (
  <Container
    before={before}
    after={after}>
    <Img
      {...other}/>
  </Container>
)

ImageCluster.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
}

export default ImageCluster
