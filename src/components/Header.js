import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

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
            <nav>
                <NavLink  to="/main"><button ><p><b>Travel App</b></p></button></NavLink>

                <button id = "menu"><img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"></img></button>
                
                <div class="search-container">
                  <form action="../action_page.php">
                    <input type="text" placeholder="Поиск.." name="search"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </div>
            </nav>   
        </div>
    )

}
export default Header;