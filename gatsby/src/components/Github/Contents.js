import React, { useEffect, useState } from "react"
import { ghAuth } from '../../utils'

const isDir = item => item.type === 'dir'

export default ({ repo, onUrl }) => {
  if (!repo) return null

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
        // console.log(res)
        setContents(res)
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  }, [setContents, repo, path])

  const onFile = item => () => {
    if (isDir(item)) {
      setPath(item.path)
    } else {
      onUrl(item.download_url)
    }
    console.log(item)
  }

  return (
    <div>
      {contents.map(item => (
        <div key={item.name} title={item.type}>
          <button onClick={onFile(item)}>
            {isDir(item) ? '> ' : '. '}
            {item.name}
          </button>
        </div>
      ))}
      {loading && 'loading ...'}
    </div>
  )
}
