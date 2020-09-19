import React from 'react'
import Navigation from './Navigation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="border-b m-3 flex justify-between item-center">
            
            <span className="font-bold  p-3 text-2xl text-blue-500">
                <Link to='/'>
                <FontAwesomeIcon
            icon={faPhotoVideo}
            /> PHOTOGHAR</Link></span>
            <Navigation/>
            
        </header>
    )
}

export default Header
