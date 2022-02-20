import type { NextPage } from 'next'
import Head from 'next/head'
import PageNavs from 'components/PageNavs'
import PageSheet from 'components/PageSheet'
import DictWord from 'components/DictWord'
import DictSettings from 'components/DictSettings'

const title = 'GRE Words'
const DictPage: NextPage = () => {
  return (
    <div>
      <Head> <title>{title}</title> </Head>
      <PageNavs title={title} />
      <DictSettings />
      <PageSheet count={100}
                 Question={DictWord}
                 level=""
      />
    </div>
  )
}

export default DictPage
