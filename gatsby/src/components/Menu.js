import React from "react"
import { Link } from "gatsby"
import MenuStyle from './MenuStyle'

export default function Header() {
  return (
    <MenuStyle>
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/my-files">Files</Link>
      <Link to="/about">About</Link>
    </MenuStyle>
  )
}
