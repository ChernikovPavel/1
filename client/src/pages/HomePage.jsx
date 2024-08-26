import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <Link to='/reg'>reg</Link>
        <br/>
        <Link to='/log'>log</Link>
    </div>
  )
}
