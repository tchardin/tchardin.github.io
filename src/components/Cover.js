import React from 'react'
import Face from './Face'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: #000;
  font-weight: 600;
  font-size: 3.5rem;
  margin-top: 1rem;
`

const Cover = () => (
  <Container>
    <Face />
    <Title>
      WORK ETC.
    </Title>
  </Container>
)

export default Cover
