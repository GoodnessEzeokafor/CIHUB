import React from 'react'


function Pricing(){
    return(
        <div id="pricing" class="p-top-90 p-bot-90 light-gray-bg div_bot3">
            <div class="container">
               <div class="row">
                  <div class="col-md-5 center-block">
                     <div class="heading text-center">
                        <h2 class="light-font">Pricing</h2>
                        <div class="header-strips-two"></div>
                        <div class="subheading">At vero eos et accusamus et iusto odio dignissimos</div>
                     </div>
                  </div>
               </div>
               <div class="row margin-top-50 margin-bottom-20">
                  <div class="p-table">
                     {/* <!--3 column price table--> */}
                     <div class="col-md-4">
                        <div class="price-col">
                           <h1 class="bold-font">Starter</h1>
                           <div class="p-value">
                              <div class="dollar"> $ 29 <span>.00</span> </div>
                              <div class="duration"> per month </div>
                           </div>
                           <ul>
                              <li>24/7 Tech Suport</li>
                              <li>Lorem ipsum dolor.</li>
                              <li>ipsum dolor sit amet.</li>
                              <li>dolor sit amet.</li>
                           </ul>
                           <a href="#" class="p-btn color-1-btn">purchase this plan</a> 
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="price-col feature">
                           <h1 class="bold-font">premium</h1>
                           <div class="p-value">
                              <div class="dollar"> $ 49 <span>.00</span> </div>
                              <div class="duration"> per month </div>
                           </div>
                           <ul>
                              <li>24/7 Tech Suport</li>
                              <li>Lorem ipsum dolor.</li>
                              <li>ipsum dolor sit amet.</li>
                              <li>dolor sit amet.</li>
                           </ul>
                           <a href="#" class="p-btn color-1-btn">purchase this plan</a> 
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="price-col">
                           <h1 class="bold-font">enterprise</h1>
                           <div class="p-value">
                              <div class="dollar"> $ 79 <span>.00</span> </div>
                              <div class="duration"> per month </div>
                           </div>
                           <ul>
                              <li>24/7 Tech Suport</li>
                              <li>Lorem ipsum dolor.</li>
                              <li>ipsum dolor sit amet.</li>
                              <li>dolor sit amet.</li>
                           </ul>
                           <a href="#" class="p-btn color-1-btn">purchase this plan</a> 
                        </div>
                     </div>
                     {/* <!--3 column price table-->  */}
                  </div>
               </div>
            </div>
         </div>
    );
}

export default Pricing;