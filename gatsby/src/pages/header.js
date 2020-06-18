import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/my-files">Files</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}