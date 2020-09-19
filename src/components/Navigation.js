import React, { useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavMenu from './NavMenu'


function Navigation() {
    // 
        // 
    const[showMenu, setShowMenu]= useState(false)
    const Masktransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })
    const Menutransitions = useTransition(showMenu, null, {
            from: { opacity: 0, Transform: 'translateX(-100%)' },
            enter: { opacity: 1, Transform: 'translateX(0%)' },
            leave: { opacity: 0, Transform: 'translateX(-100%)' },
            })
    
    return (
       <nav>
           <span className="text-2xl mr-2 cursor-pointer">
           <FontAwesomeIcon
            icon={faBars}
            onClick={()=>setShowMenu(!showMenu)}
            
            />
            
            </span>
            {
            Masktransitions.map(({ item, key, props }) =>
            item &&
             <animated.div 
             key={key} 
             style={props}
             className="w-full h-full border-none rounded-md fixed top-0 left-0" 
             style={{backgroundColor:'rgba(0,0,0,0.3)'}} 
              onClick={()=>setShowMenu(false)}
             ></animated.div>)
            
        }
        {
            Menutransitions.map(({ item, key, props }) =>
            item &&
             <animated.div 
             key={key} 
             style={props}
             className="bg-gray-100 w-1/5 border-none rounded h-full shadow-md fixed top-0 left-0" 
        
             >
               <NavMenu closeMenu={()=>setShowMenu(false)}/> 

             </animated.div>)
            
        }
)
           
       </nav>
    )
}

export default Navigation
