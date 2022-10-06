import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { components }  from "../slices"

export const query = graphql`
{
  prismicHomepage(data: { title: { eq: "Homepage" } }) {
    data {
      title
      body {
        ... on PrismicHomepageDataBodyCallToAction {
          id
          slice_type
          primary {
            description {
              richText
            }
            destination_label_text
            destination_page {
              uid
            }
            title1 {
              richText
            }
            image {
              gatsbyImageData
            }
          }
        }
        ... on PrismicHomepageDataBodyHero {
          id
          slice_type
          primary {
            title {
              richText
            }
            subtitle {
              richText
            }
            background_image {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`
const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <Seo title="Home" />
      <SliceZone
        slices={props.data.prismicHomepage.data.body}
        components={components}
      />
    </Layout>
  )
  }

export default IndexPage
