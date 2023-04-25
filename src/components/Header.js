import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
/* import './index.css'; */

function Header(props){
  
/*   const callback = () => {
    <NavLink to="/creating"><button><p>Новая запись</p></button></NavLink>
       <NavLink to="/profile"><button><p>Профиль</p></button></NavLink></>
      <NavLink to="/main"><button><p>Выйти</p></button></NavLink>
    };    
  const button = document.querySelector('#menu');
  button.addEventListener('click', callback); */


    return(
        <div className="Header">
            {/* <p><b>Travel App</b></p> */}
            <nav>
                <NavLink  to="/main"><button ><p><b>Travel App</b></p></button></NavLink>
                {/* <NavLink  to="/pc_games"><button >PC</button></NavLink> */}
                <button id = "menu"><img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"></img></button>

            </nav>
            
            
        </div>
    )

}
export default Header;