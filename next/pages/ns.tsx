import type { NextPage } from 'next'
import Head from 'next/head'
import ThemeToggle from 'components/ThemeToggle'
import NsWordSheet from 'components/NsWordSheet'

const NonSensePage: NextPage = () => {
  return (
    <div>
      <Head> <title>NonSense Word</title> </Head>
      <ThemeToggle />
      <NsWordSheet />
    </div>
  )
}

export default NonSensePage
