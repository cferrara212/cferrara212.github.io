import React from 'react';
import "./navbar.css"
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg">
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
      
        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/"><a class="nav-link">Home</a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <Link to="/projects"><a class="nav-link">Projects</a></Link>
            </li>
          </ul>
        </div> */}
        <div>
        <a class="navbar-brand navbrand1" href="https://github.com/cferrara212">
        <img src="Img/iconmonstr-github-1.svg" width="30" height="30" alt="github" />
        </a>
        <a class="navbar-brand navbrand2" href="https://www.linkedin.com/in/christopherferrara212/">
        <img src="Img/iconmonstr-linkedin-3.svg" width="30" height="30" alt="linkedin" />
        </a>
        {/* <a class="navbar-brand navbrand3" href="">
        <img src="Img/iconmonstr-email-10.svg" width="30" height="30" alt="email" />
        </a> */}
        </div>
      </nav>
    )
}
export default Navbar;