import React from 'react'
import { Link } from 'react-router-dom' 
import "../App.css"
export default function Navigation() {
    return(
        <div className="nav">
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
          </div>
    )
}
