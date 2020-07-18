import React, { useEffect, useState } from "react"
import { css, Spinner } from "theme-ui"
import { AiOutlineGithub } from "react-icons/ai";
import { ghAuth } from '../../utils'

export default ({ onRepo }) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const repos = await ghAuth.fetch('/user/repos')
        setRepos(repos.reverse())
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  }, [setRepos])

  const onSelect = repo => () => {
    onRepo(`${repo.owner.login}/${repo.name}`)
  }

  return (
    <div
      css={css({
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '1rem'
      })}
    >
      {repos.map(repo => (
        <div key={repo.id} title={repo.created_at}>
          <button onClick={onSelect(repo)}>
            <AiOutlineGithub />&nbsp;
            {repo.name}
          </button>
        </div>
      ))}
      {loading && <Spinner />}
    </div>
  )
}
