import React, { useEffect, useState } from "react"
import { fbAuth } from '../../utils'

export default () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function fetch() {
      const repos = await fbAuth.getRepos()
      setRepos(repos.reverse())
    }
    fetch()
  }, [setRepos])

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id} title={repo.created_at}>
          {repo.name} ({repo.size})
        </li>
      ))}
    </ul>
  )
}
