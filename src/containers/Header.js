import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui fixed menu">
        <div className='ui container center'>
            <h2>
                Album Gallery
            </h2>
        </div>
        <div>
            <Link to="/favorites">
            <button>
                See Favorites
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Header
