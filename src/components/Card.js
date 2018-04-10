import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  display: inline-block;
  line-height: 1.2rem;
  position: relative;
  width: 100%;
  outline: none;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
const Image = styled.div`
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding-top: 50%;
  width: 100%;
`
const Content = styled.div`
  padding: 1rem;
  height: 260px;
  position: relative;
`
const Subtitle = styled.p`
  color: #737373;
  font-size: 0.725em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`
const Title = styled.p`
  word-wrap: break-word;
  font-weight: 600;
  color: #404040;
  margin-bottom: 0.5em;
  @media screen and (max-width: 799px) {
    font-size: 1em;
  }
  @media screen and (min-width: 800px) {
    font-size: 1.2em;
  }
`
const Info = styled.p`
  height: 98px;
  color: #4a4a4a;
  font-size: 0.825em;
  overflow: hidden;
  word-wrap: break-word;
  @media screen and (max-width: 799px) {
    display: none;
  }
`
const Label = styled.span`
  color: #737373;
  font-size: 0.725em;
  margin-top: 0.5rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
`

class Card extends React.PureComponent {
  static propTypes = {
    cardImage: PropTypes.string,
    cardTitle: PropTypes.string,
    cardInfo: PropTypes.string,
    cardOwner: PropTypes.string,
    cardType: PropTypes.string,
    tabIndex: PropTypes.number,
  }
  static defaultProps = {
    tabIndex: 0
  }
  render() {
    const {
      cardImage,
      cardTitle,
      cardInfo,
      cardOwner,
      cardType,
      tabIndex
    } = this.props
    return (
      <Container tabIndex={tabIndex}>
        <Image
          role="img"
          arial-label={cardTitle}
          imgUrl={cardImage}/>
        <Content>
          <Subtitle>
            {cardOwner}
          </Subtitle>
          <Title>
            {cardTitle}
          </Title>
          <Info>
            {cardInfo}
          </Info>
          <Label>
            {cardType}
          </Label>
        </Content>
      </Container>
    )
  }
}

export default Card
