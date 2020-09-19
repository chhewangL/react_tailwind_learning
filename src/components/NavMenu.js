import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function NavMenu(props) {
    return (
        <div>
             <span 
                 className="border-b text-bold text-2xl text-green-600 m-6">
                     The Menu</span>
                     
                     <ul>
                     <Link to="/">
                         <li className="border-b border-t  text-xl text-blue-400 m-6 cursor-pointer block" 
                         onClick={props.closeMenu}>
                             <FontAwesomeIcon
                             icon={faHome}
                             />
                              Home</li></Link>
                        <Link to="/about"> <li 
                         className="border-b border-t  text-xl text-blue-400 m-6 cursor-pointer block"
                         onClick={props.closeMenu}>About</li></Link>
                         <Link to="/form"> <li 
                         className="border-b border-t  text-xl text-blue-400 m-6 cursor-pointer block"
                         onClick={props.closeMenu}>Form</li></Link>
                         <Link to="/login"><li 
                         className="border-b border-t  text-xl text-blue-400 m-6 cursor-pointer block"
                         onClick={props.closeMenu}>Login</li></Link>
                     </ul>

        </div>
    )
}

export default NavMenu
