import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

function Header(props){
    
  return(
      
        <div className="Header">
            <nav>
                <NavLink  to="/main"><button><p><b>Travel App</b></p></button></NavLink>
                
                {/* <button><img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"></img></button> */}
                
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"></img>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <ul>
                  <Dropdown.Item> <NavLink  to="/creating">Новая запись</NavLink></Dropdown.Item>
                  <Dropdown.Item> <NavLink  to="/profile">Профиль</NavLink></Dropdown.Item>
                  <Dropdown.Item> <NavLink  to="/main">Выйти</NavLink></Dropdown.Item>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
              
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