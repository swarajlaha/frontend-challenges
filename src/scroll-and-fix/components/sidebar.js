import React, { useEffect, useState } from 'react'
import '../styles/style.css'

const Sidebar = ({ scrollDown }) => {

  const [sidebarStyle, setSidebarStyle] = useState("sidebar-position-initial")
  useEffect(() => {
      if (scrollDown) setSidebarStyle("sidebar-position-scroll")
      else setSidebarStyle("sidebar-position-initial")
  }, [scrollDown])

  return (
    <>
      <div className={sidebarStyle}>
        <ul>
          <li>Type 1</li>
          <li>Type 2</li>
          <li>Type 3</li>
          <li>Type 4</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
