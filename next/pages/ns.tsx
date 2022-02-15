import type { NextPage } from 'next'
import Head from 'next/head'
import PageHead from 'components/PageHead'
import PageSheet from 'components/PageSheet'
import NsWord from 'components/NsWord'

const title = 'NonSense Word'
const NonSensePage: NextPage = () => {
  return (
    <div>
      <Head> <title>{title}</title> </Head>
      <PageHead title={title} />
      <PageSheet count={50}
                 Question={NsWord} />
    </div>
  )
}

export default NonSensePage
