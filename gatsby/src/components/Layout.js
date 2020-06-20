import React from "react"
import Header from './Header'

const Layout = ({ site, children }) => {
  const { title } = site
  return (
    <div>
      <Header title={title} />
      { children }
    </div>
  )
}

export default Layout
