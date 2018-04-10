import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.figure`
  position: relative;
  @media screen and (max-width: 799px) {
    width: 50%;
    padding-top: ${props => (props.ratio*100)/2}%;
  }
  @media screen and (min-width: 800px) {
    width: 100%;
    padding-top: ${props => props.ratio*100}%;
    margin-bottom: 1rem;
  }
`
const Img = styled.img`
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
`

const Image  = ({
  url,
  alt,
  ratio
}) => (
  <Container ratio={ratio}>
    <Img
      src={url}
      alt={alt}/>
  </Container>
)

export default Image
