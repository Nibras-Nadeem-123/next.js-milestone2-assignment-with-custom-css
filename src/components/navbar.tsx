import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav id="my-element" className="navbar">
              <Link  href={"/"}>Home</Link>
              <Link  href={"/about"}>About</Link>
              <Link  href={"/contact"}>Contact</Link>
            </nav>
    </div>
  )
}

export default Navbar
