import type { NextPage } from 'next'
import Head from 'next/head'
import DictSheet from 'components/DictSheet'
import PageHead from 'components/PageHead'

const title = 'GRE Words'
const DictPage: NextPage = () => {
  return (
    <div>
      <Head> <title>{title}</title> </Head>
      <PageHead title={title} />
      <DictSheet />
    </div>
  )
}

export default DictPage
