import React from "react"
<<<<<<< HEAD
export default function Layout({ children }) {
  return (
    <div className="fixed w-full z-10 top-0">
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
      {children}
    </div>
  </div>
  )
}
=======
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]
const Layout = ({ location, title, children }) => {
  // ...
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Search indices={searchIndices} />
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}
export default Layout
>>>>>>> 6aecddddf7187fcea7e28498b9e2bf798e7c79cb
