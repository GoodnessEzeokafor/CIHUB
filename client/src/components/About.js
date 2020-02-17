import React from 'react';


function About(){
    return(
        <div>
        <div class="p-top-90 p-bot-90 parallax parallax_color_blue"  data-stellar-background-ratio="0.1">
            <div class="container">
               <div class="row">
                  <div class="col-md-8 col-sm-9 center-block wow fadeIn" data-wow-delay="0.5s">
                     <div class="heading text-center">
                        <h2 class="light-font">Experience the rush today</h2>
                        <div class="header-strips-two"></div>
                        <div class="subheading">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum At vero eos et accusamus et iusto odio At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum At vero eos et accusamus et iusto odio</div>
                        <div class="margin-top-50 text-center"> <a href="#about" class="btn-lg btn-blue btn-shadow page-scroll">Get started today</a> </div>
                     </div>
                  </div>
                  {/* <!-- /.col -->  */}
               </div>
            </div>
         </div>
         <div class="p-top-90 p-bot-90 parallax parallax_color_no" id="figures" data-stellar-background-ratio="0.1">
            <div class="container wow fadeIn" data-wow-delay="0.5s">
               <div class="row">
                  <div class="col-md-8 col-sm-9 center-block">
                     <div class="heading text-center">
                        <h2 class="light-font">Some interesting facts</h2>
                        <div class="header-strips-two"></div>
                        <div class="subheading">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum At vero eos et accusamus et iusto odio At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum At vero eos et accusamus et iusto odio</div>
                     </div>
                  </div>
                  {/* <!-- /.col -->  */}
               </div>
               <div class="row margin-top-50">
                  <div class="counters col-md-3 col-sm-3"> <span class="counter-icon"><i class="fa fa-gift rounded"></i></span> <span class="counter">3254</span> </div>
                  <div class="counters col-md-3 col-sm-3"> <span class="counter-icon"><i class="fa fa-download rounded"></i></span> <span class="counter">7068</span> </div>
                  <div class="counters col-md-3 col-sm-3"> <span class="counter-icon"><i class="fa fa-thumbs-up rounded"></i></span> <span class="counter">5389</span> </div>
                  <div class="counters col-md-3 col-sm-3"> <span class="counter-icon"><i class="fa fa-comments rounded"></i></span> <span class="counter">9172</span> </div>
               </div>
            </div>
         </div>
         <div id="about" class="full-screen-box color-bg-1">
            <div class="container-fluid two-cols-description-row">
               <div class="two-cols-description-text wow fadeIn" data-wow-delay="0.50s">
                  <div class="two-cols-description-text-inner">
                     <div class="heading">
                        <h2 class="light-font">
                           Live In A Creative Space Work In A Creative Space
                        </h2>
                        <p class="light-font ">
                           In this hub we proffer solutions to the six key problems facing the educational sector today

                           {/* In this hub, we intend to proffer solu ons to the six key problems */}
                           {/* facing the educa onal sector today */}
                        </p>
                     </div>
                     <ul>
                        <li className="light-font" style={{color:"white", fontSize:"20px"}}>
                        Industrial age values
                        </li>
                        <li className="light-font"  style={{color:"white", fontSize:"20px"}}>
                         Lack of autonomy and control
                        </li>
                        <li className="light-font" style={{color:"white", fontSize:"20px"}}>
                         Inauthentic learning
                        </li>
                        <li className="light-font" style={{color:"white", fontSize:"20px"}}>
                        No room for passion and interest
                        </li>
                        <li className="light-font" style={{color:"white", fontSize:"20px"}}>
                        Differences in how we learn
                        </li>
                        <li className="light-font" style={{color:"white", fontSize:"20px"}}>
                        Lecturing.
                        </li>
                        
                     </ul>
                     {/* <p> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur mus.
                        Aliquam ullamcorper. dis parturient montes, nascetur mus.
                        Aliquam ullamcorper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur mus.
                        Aliquam ullamcorper. dis parturient montes, nascetur mus.
                        Aliquam ullamcorper. dis parturient montes, nascetur mus.
                     </p> */}
                  </div>
               </div>
               <div class="two-cols-description-image wow fadeIn" data-wow-delay="0.50s">
                  <img src="/images/two-woman-sitting-on-sofa-while-using-laptops-1181274.jpg"  alt="" />
               </div>
            </div>
         </div>
         </div>
    );
}

export default About;