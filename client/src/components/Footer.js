import React from 'react'



function Footer(){
    return(
<div class="footer p-top-90  dark-bg-3">
            <div class="container">
               <div class="col-md-6 col-sm-8 p-bot-50 wow fadeIn" data-wow-delay="0.5s">
                  <h3 class="site-title">CIHUB</h3>
                  <p>We need character but we focus on caliber
We need values but we focus on algebra
What if we studied more about Pythagoras and
not just his theorem
What if we learned about Einsten and not just
his work
What if we learned about compassion and not
just the compass
What if we learn about emotional intelligence
as well as the spelling quiz
What if we focused on ATTITUDE as we did on
the APTITUDE!
                  </p>
               </div>
               <div class="col-md-6 col-sm-8 p-bot-50 wow fadeIn" data-wow-delay="0.5s">
                  <h3>Stay in touch</h3>
                  <div id="subscribeform">
                     <input type="text" name="subscribe" id="subscribe" />
                     <button type="submit"><i class="fa fa-arrow-right"></i></button>
                  </div>
                  <p>Send us a mail today
                  </p>
               </div>
            </div>
            <div class="copyrights-wrapper wow fadeIn" data-wow-delay="0.5s">
               <p class="text-center"> © 2020 CIHUB. All Rights Reserved </p>
            </div>
         </div>
    );
}

export default Footer;