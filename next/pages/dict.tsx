import type { NextPage } from 'next'
import Head from 'next/head'
import PageHead from 'components/PageHead'
import PageSheet from 'components/PageSheet'
import DictWord from 'components/DictWord'

const title = 'GRE Words'
const DictPage: NextPage = () => {
  return (
    <div>
      <Head> <title>{title}</title> </Head>
      <PageHead title={title} />
      <PageSheet count={50}
                 Question={DictWord} />
    </div>
  )
}

export default DictPage
