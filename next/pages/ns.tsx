import type { NextPage } from 'next'
import Head from 'next/head'
import PageSheet from 'components/PageSheet'
import PageNavs from 'components/PageNavs'
import NsWord from 'components/NsWord'
import {useState} from 'react'

const title = 'NonSense Word'
const levels = ['0', '1']
const NonSensePage: NextPage = () => {
  const [level, setLevel] = useState(levels[0])
  const visit = (l: string) => { setLevel(l)}

  return (
    <div>
      <Head> <title>{title}</title> </Head>
      <PageNavs title={title}
                items={levels} 
                visit={visit}
      />
      <PageSheet count={50}
                 Question={NsWord}
                 level={level} />
    </div>
  )
}

export default NonSensePage
