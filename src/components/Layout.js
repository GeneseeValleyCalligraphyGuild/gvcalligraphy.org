import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import logo from '../img/gvcgpaula.png'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
        <Navbar />
        <img src={logo} alt="Genesee Valley Calligraphy Guild Logo" style={{
          width: 'auto',
          float: 'left',
        }} />
        <div>{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
