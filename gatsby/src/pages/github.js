import React, { useEffect, useState } from "react"

// const url = 'https://api.github.com/users/windmaomao/repos'
const url = 'https://api.github.com/user/repos'

export default () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) return res.json()
        return []
      })
      .then(d => {
        setData(d)
        console.log(d)
      })
  }, [setData])

  return (
    <div>
      <h1>Your repos</h1>
      <ul>
        {data.map(repo => (
          <li key={repo.id}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
