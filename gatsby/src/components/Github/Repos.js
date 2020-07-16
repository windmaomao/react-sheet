import React, { useEffect, useState } from "react"
import { ghAuth } from '../../utils'

export default () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const repos = await ghAuth.fetch('repos')
        setRepos(repos.reverse())
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  }, [setRepos])

  return (
    <div>
      {loading && 'loading ...'}
      {repos.map(repo => (
        <div key={repo.id} title={repo.created_at}>
          {repo.name} ({repo.size})
        </div>
      ))}
    </div>
  )
}
