import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './NavBar.css';
import { IconContext } from 'react-icons';

function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <IconContext.Provider value = {{color: '#fff'}}>
           <div className = 'navbar'>
               
               <div  className = 'menu-bars'>
                   <FaIcons.FaBars onClick = {showSidebar}/>
               </div>
               
           </div>
           <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items' onClick = {showSidebar}>
                   <li className = 'navbar-toogle'>
                       <Link to = '#' className = 'menu-bars'>
                           <AiIcons.AiOutlineClose/>
                       </Link>
                   </li>
                   {SidebarData.map((item, index) => {
                       return (
                           <li key= {index} className={item.cName}>
                               <Link to = {item.path}>
                                   {item.icon}
                                   <span>{item.tittle}</span>
                               </Link>
                            </li>
                       )
                   })}
               </ul>
           </nav>
           </IconContext.Provider>
        </div>
    )
}

export default NavBar
