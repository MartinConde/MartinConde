import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../components/reset.css'
import styled from 'styled-components'


const MainWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background-color: #ededed;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");

@media (min-width:1100px) {
  overflow: hidden;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My name is Martin and I am a germn webdeveloper. Feel free to get in touch to discuss any project!' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <MainWrapper>
          {children}
          </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
