import React from 'react';


function Header(){
    return(
      <div id="carousel-example-generic" class="carousel  slide" data-ride="carousel">
      {/* <!-- Indicators --> */}
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        <li data-target="#carousel-example-generic" data-slide-to="4"></li>
        <li data-target="#carousel-example-generic" data-slide-to="5"></li>

        <li data-target="#carousel-example-generic" data-slide-to="6"></li>
        <li data-target="#carousel-example-generic" data-slide-to="7"></li>
        <li data-target="#carousel-example-generic" data-slide-to="8"></li>
        <li data-target="#carousel-example-generic" data-slide-to="9"></li>
        {/* <li data-target="#carousel-example-generic" data-slide-to="10"></li> */}
       </ol>
    
      {/* <!-- Wrapper for slides --> */}
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="images/cihub.jpg" className="img-responsive" alt="..." />
          {/* <h2 style={{marginTop:"0px"}}>CREATIVITY</h2> */}
          <div class="carousel-caption">
                {/* <h2 style={{marginTop:"0px"}}>CREATIVITY</h2> */}
          </div>
        </div>
        <div class="item">
          <img src="images/DSC_1447.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            {/* ... */}
          </div>
        </div>

        <div class="item">
          <img src="images/DSC_1664.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            {/* ... */}
          </div>
        </div>
        
        <div class="item">
          <img src="images/DSC_1661.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            {/* ... */}
          </div>
        </div>
        
        <div class="item">
          <img src="images/DSC_1551.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            ...
          </div>
        </div>
        <div class="item">
          <img src="images/DSC_1426.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            ...
          </div>
        </div>
        <div class="item">
          <img src="images/DSC_1633.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            ...
          </div>
        </div>

        <div class="item">
          <img src="images/DSC_1600.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            ...
          </div>
        </div>
        
        <div class="item">
          <img src="images/DSC_1582.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            ...
          </div>
        </div>
        <div class="item">
          <img src="images/DSC_1532.jpg" className="img-responsive" alt="..." />
          <div class="carousel-caption">
            ...
          </div>
        </div>
        
        {/* ... */}
      </div>
    
      {/* <!-- Controls --> */}
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
// {/* <div class="parallax parallax_banner2 intro fl_scrn" id="home" data-stellar-background-ratio="0.1">
//             <div class="intro-body">
//                <div class="container">
//                   <div class="row">
//                      <div class="col-md-6">
//                         <h1 class="brand-heading light-font">
//                            Balance builts bulletproof creative apps </h1>
//                         <p class="intro-text margin-bottom-50">
//                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et mi tellus. Fusce non consectetur quam, sit amet dapibus urna. Nam sollicitudin risus ante, non tincidunt augue ultricies nec. Donec tincidunt, elit a feugiat fermentum,</p>
//                         <a href="#about" class="btn-lg btn-blue btn-shadow">Get started today</a> 
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div> */}
    );
}


export default Header;