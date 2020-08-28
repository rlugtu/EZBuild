import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {
    return (
        <nav>
            <ul className="navLeft">
                <li><Link to="/">EZBuild</Link></li>
                <li><Link to="/builds/gaming">Gamers</Link></li>
                <li><Link to="/builds/streaming">Streamers</Link></li>
                <li><Link to="/builds/creators">Creators</Link></li>
            </ul>
            <ul>
                <li><Link to="/user">MyBuild</Link></li>
            </ul>
        </nav>

    )
}

export default Header