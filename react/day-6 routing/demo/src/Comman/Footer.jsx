import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>

                <center>
                <Link to={"/"} >Home | </Link>
                <Link to={"/about"} > About |</Link>
                <Link to={"/gallery"} > Gallery |</Link>
                <Link to={"/contact"} >Contact</Link>
                </center>
    </div>
  )
}
