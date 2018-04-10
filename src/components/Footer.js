import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  padding: 4rem;
`
const Title = styled.h1`
  color: #000;
  font-weight: 600;
  font-size: 3.5rem;
  margin-bottom: 1rem;
`
const List = styled.ul`
  color: #000;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`
const Loc = styled.li`
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    width: 14px;
    height: 14px;
    background: none;
    border-left: 2.5px solid #fff;
    border-bottom: 2.5px solid #fff;
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -0.4125rem;
    transform: rotate(-135deg);
    opacity: ${props => props.selected ? '1' : '0'};
  }
`
const Mark = styled.mark`
  background-color: ${props => props.color};
  color: ${props => props.color === 'black' ? '#fff' : '#000'};
  padding: 0.2rem;
  &:hover {
    background-color: #fff;
  }
`
const Label = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.825rem;
  align-self: center;
  margin-top: 0.5rem;
`
const Line = styled.hr`
  width: 100%;
  background-color: #fff;
  margin: 0;
  opacity: 0.4;
`
const Input = styled.textarea`
  background-color: #000;
  height: 60px;
  width: 100%;
  color: #dbdbdb;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  outline: none;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 0.875rem 1.275rem;
  resize: none;
  &:focus {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 0
  }
  @media screen and (max-width: 499px) {
    height: 100px;
    line-height: 1.5;
    padding: 0.475rem 0.875rem;
  }
`
const Field = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 499px) {
    flex-direction: column
    margin-bottom: 1rem;
  }
`
const Button = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  line-height: 1;
  padding: 1.25em 2em;
  text-align: center;
  text-shadow: none;
  text-transform: uppercase;
  transform-origin: center;
  transition-duration: 100ms;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  will-change: transform;
  border: 0;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  position: relative;
  color: #202020;
  background-color: #fff;
  padding: calc(1.25em - 1px) calc(2em - 1px);
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    display: block;
    background: #dbdbdb;
    transform: scaleY(0);
    transform-origin: center top;
    transition: transform .2s ease-in;
    z-index: -1;
  }
  &:hover::before {
    transform: scaleY(1);
    transform-origin: center bottom;
  }
`

class Footer extends React.Component {
  state = {
    message: "Hi Thomas, Let's chat about...",
    location: 'Boston'
  }
  handleChange = ({target}) => {
    this.setState({
      message: target.value
    })
  }
  handleClick = val => {
    this.setState({
      location: val
    })
  }
  render() {
    const {message, location} = this.state
    const subject = `${location} connect`
    const mailTo = `mailto:tdotchardin@gmail.com?subject=${encodeURI(subject)}&body=${encodeURI(message)}`
    return (
      <Container>
        <Title>
          <mark>Get In Touch</mark>
        </Title>
        <List>
          <Loc
            selected={location === 'Boston'}>
            <Mark color="cyan"
              onClick={() => this.handleClick('Boston')}>Boston</Mark>
          </Loc>
          <Loc
            selected={location === 'New York'}>
            <Mark color="magenta"
              onClick={() => this.handleClick('New York')}>New York</Mark>
          </Loc>
          <Loc
            selected={location === 'Remote'}>
            <Mark color="yellow"
              onClick={() => this.handleClick('Remote')}>Remote</Mark>
          </Loc>
        </List>
        <Field>
          <Input
            onChange={this.handleChange}
            value={message}
            cols="40"
            rows="3"
          />
          <Button href={mailTo}>
            Email →
          </Button>
        </Field>
        <Label>2018 - Thomas Chardin</Label>
      </Container>
    )
  }
}

export default Footer
