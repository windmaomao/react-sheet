import React, { useEffect, useState } from "react"
import { fbAuth } from '../../utils'

export default ({ repo }) => {
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const res = await fbAuth.getContents(repo)
        console.log(res)
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
      {loading && 'loading ...'}
      // {repos.map(repo => (
      //   <div key={repo.id} title={repo.created_at}>
      //     {repo.name} ({repo.size})
      //   </div>
      // ))}
    </div>
  )
}
