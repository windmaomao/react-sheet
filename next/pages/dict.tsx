import type { NextPage } from 'next'
import Head from 'next/head'
import DictSheet from 'components/DictSheet'

const DictPage: NextPage = () => {
  return (
    <div>
      <Head> <title>Learn A Word</title> </Head>
      <DictSheet />
    </div>
  )
}

export default DictPage
