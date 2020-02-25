import React from 'react';

function Navbar(){
return(
            <nav class="navbar navbar-default navbar-fixed-top js-navbar-top js-toggleClass">
            <div class="container">
               <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                  <a class="navbar-brand" href="#home">
                     <h2 style={{color:"white", fontSize:"30px"}}>C.I. HUB</h2>
                  </a>
               </div>
               <div id="navbar" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav navbar-right ">
                     <li class="active"><a href="#home">Home</a></li>
                     {/* <li><a href="#features">Features</a></li> */}
                     <li><a href="#about">About</a></li>
                     <li><a href="#services">Services</a></li>
                     <li><a href="#team">Team</a></li>
                     <li><a href="#contact">Contact Us</a></li>
                  </ul>
               </div>
               {/* <!--/.nav-collapse -->  */}
            </div>
         </nav>

);
}

export default Navbar;