import type { NextPage } from 'next'
import Head from 'next/head'
import NsWordSheet from 'components/NsWordSheet'
import PageHead from 'components/PageHead'

const title = 'NonSense Word'

const NonSensePage: NextPage = () => {
  return (
    <div>
      <Head> <title>NonSense Word</title> </Head>
      <PageHead title={title} />
      <NsWordSheet />
    </div>
  )
}

export default NonSensePage
