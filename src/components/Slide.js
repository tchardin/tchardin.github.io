import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Slide = ({
  background,
  children,
  description,
  title,
  subtitle,
  images,
  parallax
}) => (
  <Container>
    {background}
    <Content>
      <Side plx={parallax}>
        {children}
      </Side>
      <About plx={parallax}>
        <Title>
          <mark>{title}</mark>
        </Title>
        <Subitle>
          <mark>{subtitle}</mark>
        </Subitle>
        {!!description && (
          <Info>
            {description}
          </Info>
        )}
      </About>
    </Content>
  </Container>
)

Slide.propTypes = {
  background: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  images: PropTypes.array,
  parallax: PropTypes.bool,
}

const Container = styled.div`
  color: #fff;
  height: 100vh;
  position: relative;
  transform-style: preserve-3d;
  &:nth-child(2n) aside {
    order: 0;
  }
  @media screen and (max-width: 399px) {
    height: 120vh;
  }
`
export const Background = styled.div`
  background-color: ${props => props.color};
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`
const Content = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  @media screen and (min-width: 800px) {
    align-items: center;
    justify-content: space-around;
    justify-content: space-evenly;
    padding: 4rem;
  }
  @media screen and (max-width: 799px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }
`
const Side = styled.aside`
  max-height: 100vh;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 4rem;
    order: 2;
    width: 20rem;
  }
  @media screen and (max-width: 799px) {
    margin-bottom: 3rem;
    width: 100%;
  }
  @media screen and (min-width: 40em) {
    @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
      transform: ${props => props.plx ? 'translateZ(100px) scale(.67)' : 'none'};
      transform-origin: ${props => props.plx ? '100% 50%' : 'none'};
    }
  }
`
const About = styled.main`
  max-width: 26rem;
  z-index: 2;
  @media screen and (min-width: 800px) {
    flex-grow: 1;
    flex-shrink: 1;
  }
  @media screen and (min-width: 40em) {
    @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
      transform: ${props => props.plx ? 'translateZ(60px) scale(.8)' : 'none'};
      transform-origin: ${props => props.plx ? '100% 50%' : 'none'};
    }
  }
`
const ImageContainer = styled.figure`
  padding-top: 100%;
  position: relative;
  width: 100%;
`
const Image = styled.img`
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
`
const Title = styled.h1`
  color: #000;
  font-size: 3.25rem;
  font-weight: 600;
  line-height: 1.125;
  margin-bottom: 0.5rem;
`
const Subitle = styled.p`
  color: #000;
  font-size: 1.25rem;
  letter-spacing: 1px;
`
const Info = styled.div`
  background-color: #fff;
  padding: 1.5rem 1rem;
  color: #808080;
  font-size: 0.825rem;
  margin-top: 0.5rem;
  letter-spacing: 1.2px;
  line-height: 1.5;
`

export default Slide
