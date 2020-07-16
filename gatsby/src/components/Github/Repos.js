import React, { useEffect, useState } from "react"
import { fbAuth } from '../../utils'

export default () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const repos = await fbAuth.getRepos()
        setRepos(repos.reverse())
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  }, [setRepos])

  return (
    <ul>
      {loading && 'loading ...'}
      {repos.map(repo => (
        <li key={repo.id} title={repo.created_at}>
          {repo.name} ({repo.size})
        </li>
      ))}
    </ul>
  )
}
