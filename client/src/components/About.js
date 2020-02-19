import React from 'react';


function About(){
    return(
        <div>
        <div class="p-top-90 p-bot-90 parallax parallax_color_blue"  data-stellar-background-ratio="0.1">
            <div class="container">
               <div class="row">
                  <div class="col-md-8 col-sm-9 center-block wow fadeIn" data-wow-delay="0.5s">
                     <div class="heading text-center">
                        <h2 class="light-font">Our Burden</h2>
                        {/* <div class="header-strips-two"></div> */}
                        <div class="subheading">
                           <p>
                           Life is the most difficult examination 
                              The history we learn in school doesn’t help us
                              define our future.
                              Most of us know how to add and subtract and
                              not know how to mulply our investments.
                              We know how to do multiple choice.
                              But we struggle to make decisions.
                              We know how to analyze a poet voice.
                              But we cant express ourselves with precision.
                              We learn about the human body and not how
                              to find ourselves.
                              We learn about the brain but not about mental
                              health.
                              We learn about modes of transport but not
                              why travel makes us grow.       
                              Geography taught us where things were but not
                              where Countries wanted to go.
                              We learn about new languages but not about
                              old cultures.
                              We learn about only one perspective  but not
                              opposing opinions.
                              We learn how to draw but not appreciate art.
                              We were always pushed to get to the end but
                              never taught how to start.
                              We were also taught to get over stuff and not
                              how to walk through stuffs.
                              We learned about all plants and the cells in
                              plant.
                              But not the source of our food.
                              We learned how to measure distance but not
                              the journey within.
                              We were told that X is the only place where
                              something was missing.               
                           </p> 
 </div>
                        <div class="margin-top-50 text-center"> 
                           <a href="#contact" class="btn-lg btn-blue btn-shadow page-scroll">Get started today</a> </div>
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
                        {/* <div class="header-strips-two"></div> */}
                        <div class="subheading">
                           <p>According to LinkedIn's global list <b>Blockchain</b> is  the most in-demand  skills for 2020</p>
                           <p>According to a  report by the McKinsey Global Institute 
                           <b> Artificial intelligence</b> has the potential to incrementally add 16 percent or 
                           around $13 trillion by 2030 to current global economic output
                           </p>
                           <p>
                            In the high-adoption scenario, the economic impact of <b>VR/AR</b> is forecast to amount to 29.5 billion U.S. dollars in 2020
                           </p>
                        </div>
                     </div>
                  </div>
                  {/* <!-- /.col -->  */}
               </div>
               <div class="row margin-top-50">
                  {/* <div class="counters col-md-3 col-sm-3"> <span class="counter-icon"><i class="fa fa-gift rounded"></i></span> <span class="counter">3254</span> </div> */}
                  <div class="counters col-md-4 col-sm-4"> <span class="counter-icon"><i class="fa fa-download rounded"></i></span> <span class="counter">2000</span> </div>
                  <div class="counters col-md-4 col-sm-4"> <span class="counter-icon"><i class="fa fa-thumbs-up rounded"></i></span> <span class="counter">1500</span> </div>
                  <div class="counters col-md-4 col-sm-4"> <span class="counter-icon"><i class="fa fa-comments rounded"></i></span> <span class="counter">1000</span> </div>
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