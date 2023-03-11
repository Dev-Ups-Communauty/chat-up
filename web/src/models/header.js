import React from 'react';
import ReactDOM from 'react-dom/client';


//MISE EN PAGE DU HEADER
let view = process.env.PUBLIC_URL + "/static/view"


const header = () => 
{
    return<header>
    <div class="header-left">
        <div class="logo"><img src={view + "/img/global/logoGoVersus.png"}/></div>
        <div class="search-container">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Versus" class="search-input"/>
        </div>
    </div>
    <div class="header-right">
        <a href="">
            <div class="icon-right">
                <i class="fa-solid fa-bars"></i>                
            </div>
        </a>
        <a href="">
            <div class="icon-right">
                <i class="fa-solid fa-bell"></i>
            </div>
        </a>
        <a href="">
            <div class="icon-right">
                <i class="fa-solid fa-gear"></i>
            </div>
        </a>
        <a href="">
            <div class="profile-image">
                <i class="fa-solid fa-user"></i>
            </div>
        </a>
    </div>        
</header>
}

export default header