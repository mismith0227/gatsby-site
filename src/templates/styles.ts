import styled from 'styled-components'
import media from '../styles/media'

export const Wrap = styled.div`
  max-width: 80rem;
  width: 96%;
  margin: 12rem auto;

  ${media.large} {
    margin: 8rem auto;
  }

  ${media.small} {
    margin: 4rem auto;
  }
`

export const ImageWrap = styled.div`
  border: 0.1rem solid #ccc;

  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const Content = styled.div``

export const PostTitle = styled.h2`
  font-size: 4rem;
  margin: 2.4rem 0 0;

  ${media.large} {
    font-size: 3.2rem;
  }

  ${media.small} {
    font-size: 2.4rem;
  }
`

export const Date = styled.div``

export const PostContent = styled.div`
  margin: 4rem auto 0;
  h3 {
    font-size: 2.4rem;
  }
`