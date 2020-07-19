import React, { useEffect, useState, useContext } from "react"
import { Spinner, Text, Heading, Box } from "theme-ui"
import {
  AiOutlineFolderOpen,
  AiOutlineFileText,
  AiOutlineGithub
} from "react-icons/ai"
import GhContext from './GhContext'
import { ghAuth } from '../../utils'

const isDir = item => item.type === 'dir'

export default ({ repo, onUrl }) => {
  if (!repo) return null

  const [site, setSite] = useContext(GhContext)
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(false)
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath('')
  }, [repo])

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const res = await ghAuth.fetch(`/repos/${repo}/contents/${path}`)
        setContents(res)
        setSite({ ...site, title: repo })
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  }, [setContents, repo, path, site, setSite])

  const onFile = item => () => {
    if (isDir(item)) {
      setPath(item.path)
    } else {
      onUrl(item.download_url)
    }
    console.log(item)
  }

  const icon = item => (
    isDir(item) ? <AiOutlineFolderOpen /> : <AiOutlineFileText />
  )

  const repoParts = repo.split('/')

  return (
    <Box
      p={1}
      bg='#fafafa'
    >
      <Heading as='h4'>
        <AiOutlineGithub /><br />{repoParts[1]}
      </Heading>
      <br />
      {contents.map(item => (
        <div key={item.name} title={item.type}>
          <Text
            sx={{
              fontSize: 0,
              cursor: 'pointer'
            }}
            p={0.5}
            onClick={onFile(item)}
          >
            {icon(item)}&nbsp;{item.name}
          </Text>
        </div>
      ))}
      {loading && <Spinner size={14} />}
    </Box>
  )
}
