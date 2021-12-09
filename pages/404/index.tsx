import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { NotFoundContent } from '@/components/organisms/NotFoundContent'

const NotFoundPage = () => {
  const meta = {
    title: '404: Not found',
    description: '404 not found',
    path: '404',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <NotFoundContent />
    </Layout>
  )
}

export default NotFoundPage
