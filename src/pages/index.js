import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components'

const MainContent = styled.div `
  padding: 20px;

  @media (min-width: 1100px) {
    max-width: 45vw;
  }
`
const MainTitle = styled.h1 `
text-transform: uppercase;
position: relative;
margin-bottom: 20px;
@media (min-width: 1100px) {
  font-size: 2.54vw;

  &::after {
    content: '';
    position: absolute;
    top: 6.5vh;
    width: 150px;
    height: 5px;
    background: #93032e;
  }

  small {
    margin-top: 3.3vh;
  font-size: 1.5vw;
  }
}



small {
  display: block;
  
}
`

const HomePage = () => (
  <Layout>
    <MainContent>
    <MainTitle>Hi, my name is Martin Conde <small>A webdeveloper that replies to e-mails, doesn't suck and gets the job done!</small></MainTitle>
    <p>I am currently re-designing my portfolio which hopefully will be done in the beginning of next year. In the meantime, don't hesitate to shoot me an e-mail at <a href='mailto:martin@martinconde.com'>martin@martinconde.com</a></p>
        </MainContent>
  </Layout>
)

export default HomePage
