import * as React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyles'
import { Header } from '../Header'
import { Loading } from '../../molecules/Loading'
import { StyledFooter } from './styles'

type Props = {
  children: React.ReactNode
  path: string
  isCanvasLoading?: boolean
}

export const Layout = ({ children, path, isCanvasLoading }: Props) => {
  const [isLoadingTime, setIsLoadingTime] = React.useState<boolean>(true)

  const isLoading = isCanvasLoading === undefined ? false : isCanvasLoading

  React.useEffect(() => {
    let unmounted = false

    setTimeout(() => {
      if (!unmounted) {
        setIsLoadingTime(false)
      }
    }, 1500)

    // clean up
    return () => {
      unmounted = true
    }
  })

  console.log(isCanvasLoading)

  return (
    <>
      <Global styles={globalStyle} />
      <Header path={path} />
      <main>{children}</main>

      {path !== 'home' && <StyledFooter />}
      <Loading isLoading={isLoadingTime || isLoading} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
