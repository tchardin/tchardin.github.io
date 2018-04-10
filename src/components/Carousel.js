import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`
  cursor: pointer;
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`
const RightBtn = Btn.extend`
  top: 50%;
  transform: translateY(-50%);
  &:active {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(calc(-50% + 1px)) scale(0.98);
  }
  @media screen and (max-width: 799px) {
    right: 0;
  }
  @media screen and (min-width: 800px) {
    right: -25px;
  }
`
const LeftBtn = Btn.extend`
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  &:active {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(calc(-50% + 1px)) scale(0.98) rotate(180deg);
  }
  @media screen and (max-width: 799px) {
    left: 0;
  }
  @media screen and (min-width: 800px) {
    left: -25px;
  }
`
const Tick = styled.span`
  height: 3px;
  width: 40%;
  background-color: magenta;
  display: block;
  &:first-child {
    transform: rotate(-45deg) translateY(33px) translateX(-9px);
  }
  &:last-child {
    transform: rotate(45deg) translateY(-2px) translateX(22px);
  }
`
const Container = styled.div`
  position: relative;
`
const VerticalList = styled.ul`
  display: block;
  overflow: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  @media screen and (max-width: 799px) {
    height: 250px;
    max-width: 100vw;
  }
  @media screen and (min-width: 800px) {
    height: 460px;
    max-width: 700px;
  }
`
const ChildContainer = styled.li`
  display: inline-block;
  height: 100%;
  width: 350px;
  white-space: normal;
  margin-right: 1rem;
  vertical-align: top;
  &:first-child {
    margin-left: 1rem;
  }
  @media screen and (max-width: 799px) {
    width: 200px;
  }
`

class Carousel extends React.Component {
  state = {
    sLeft: 0
  }
  handleClick = dir => {
    const { children } = this.props
    const { sLeft } = this.state
    const { width } = this.list.getBoundingClientRect()
    const length = width < 700 ? 220 : 370
    if (dir === 'right') {
      this.list.scrollLeft = sLeft + length
    } else {
      this.list.scrollLeft = sLeft - length
    }
  }
  handleScroll = () => {
    this.setState({
      sLeft: this.list.scrollLeft
    })
  }
  render() {
    const { children } = this.props
    return (
      <Container>
        <RightBtn
          onClick={() => this.handleClick('right')}>
          <Tick />
          <Tick />
        </RightBtn>
        {(this.state.sLeft > 0) && (
          <LeftBtn
            onClick={() => this.handleClick('left')}>
            <Tick />
            <Tick />
          </LeftBtn>
        )}
        <VerticalList
          innerRef={ul => this.list = ul}
          onScroll={this.handleScroll}>
          {React.Children.map(children, (child, index) => (
            <ChildContainer>
              {child}
            </ChildContainer>
          ))}
        </VerticalList>
      </Container>
    )
  }
}

export default Carousel
