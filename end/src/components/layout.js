import React from "react"
export default function Layout({ children }) {
  return (
    <div className="fixed w-full z-10 top-0">
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
      {children}
    </div>
  </div>
  )
}