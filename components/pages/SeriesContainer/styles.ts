import Image from 'next/image'
import styled from '@emotion/styled'
import { Container } from '@/components/organisms/Container'
import Link from 'next/link'
import media from '@/styles/media'

export const StyledContainer = styled(Container)``

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px 0;
  max-width: 900px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubTitle = styled.span`
  display: inline-block;
  margin-left: 16px;
  font-size: 16px;
`

export const ThumbnailList = styled(Link)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-self: center;
  align-self: center;
  gap: 16px;
  width: 100%;
  margin: 24px 0 0;
  transition: 0.2s;

  ${media.medium} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.small} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &:hover {
    opacity: 0.8;

    .more {
      color: #fff;
      background-color: #000;
    }
  }
`

export const ThumbnailWrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100%;
`

export const StyledThumbnail = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  transition: 0.2s;

  &::after {
    display: inline-block;
    content: '→';
    margin-left: 8px;
  }
`
