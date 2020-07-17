import React, { useEffect, useState } from "react"
import { ghAuth } from '../../utils'

export default ({ repo }) => {
  if (!repo) return null

  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const res = await ghAuth.fetch(`/repos/${repo}/contents`)
        // console.log(res)
        setContents(res)
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  }, [setContents, repo])

  return (
    <div>
      {contents.map(item => (
        <div key={item.name} title={item.type}>
          {item.name}
        </div>
      ))}
      {loading && 'loading ...'}
    </div>
  )
}
