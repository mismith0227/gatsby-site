import type { NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { HomeContent } from '@/components/organisms/HomeContent'

const Home: NextPage = () => {
  const [isCanvasLoading, setIsCanvasLoading] = useState<boolean>(true)
  const meta = {
    title: 'Home',
    description: 'トップページ',
    path: 'home',
  }

  return (
    <Layout path={meta.path} isCanvasLoading={isCanvasLoading}>
      <Seo title={meta.title} description={meta.description} />
      <HomeContent onCreated={(value) => setIsCanvasLoading(value)} />
    </Layout>
  )
}

export default Home