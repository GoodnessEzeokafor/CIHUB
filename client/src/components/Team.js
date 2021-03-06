import React from 'react'


import classes from "./Team.module.css"

// import "./Team.module.css"

const Team = () => {
    return(
        <section id="team" class="team content-section">
  <div class="container">
    <div class="row text-center">
      <div class="col-md-12" style={{marginTop:"60px"}}>
        <h2>Our Team</h2>
        {/* <h3 class="caption gray">Meet the people who make awesome stuffs</h3> */}
      </div>
      <div class="container">
        <div class="row">
        <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/IMG-20200131-WA0022.jpeg" 
                    alt="" class="img-responsive" />
                <figcaption>
                <p style={{fontSize:"13px"}}>
                Babs Adewunmi is a Kingdom Prophetic Agent who is a Reformist. He serves as a Prophetic Voice, Writer, Speaker and Research Panelist on the GLOBAL BUSINESS ROUND TABLE.

He sits as a the President & Visioner of PROPHETIC SCHOOL FOR KINGDOM AGENTS and the INTERNSHIP TECH SCHOOL.
Babs is also a Director on the Advisory Board of ARA ROCKS CREATIVE HOUSE AND ENTREPRENEURSHIP INSTITUTE.
He is a Global Teacher and Leadership  Strategist, an Author, a Life Coach and a Mentor.
                </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </ul>
                </figcaption>
              </figure>
              <h4 className={{marginTop:"400px"}}>Babs Adewunmi</h4>
              <p>Vision Coordinator</p>
            </div>


          </div>
          <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                src="/images/team/DSC_1541.jpeg" 
                alt="" class="img-responsive" />
                <figcaption>
                  <p style={{fontSize:"12px"}}>
                  Vanessa Vou Choji is a Social Entrepreneur who is a Social Skills Expert, a Life Coach and a Mentor.

She sits as Chairman on the board of ROHTA SECURITY GROUP LTD. She is also the founder and Executive Director of COPAVE INT'L which is an acronym for  COMMUNITY PARTNERS FOR THE VULNERABLE & EXCLUDED. COPAVE is the Mother Body of G-NEXT INT'L - a Multi Generational Movement which is targeted at Youth Development. It is an enlisted Charity which operates in Nigeria & the United Kingdom.

Vanessa holds a Masters Degree in Architecture, she currently resides in the United Kingdom and shuttles various parts as A Public & Kingdom Speaker, A writer, A Social Reformer and a Business Woman.
                    </p>
                  <ul style={{display:"inline-block", textAlign:"center"}}>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>Vanessa Vou Choji</h4>
              <p>Executive Director</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/IMG-20200220-WA0021.jpeg" 
                    alt="" class="img-responsive" 
                    height="20px" />
                <figcaption>
                <p style={{fontSize:"13px"}}>
                  An Information scientist, Researcher, a content creator and an Innovator who holds a degree in Library and Information Science. He also has an expertise in critical design and creative thinking and is enthusiastic about youth development in both soft and hard 21st century skills.
Christopher is a businessman who's keen on modern day Technologies.He is the CEO of Krispy Concepts -  an Event management company and the president of ROGMI, which is an acronym for REALM OF GLORY MINISTRIES INTERNATIONAL. He also doubles as the Co-founder & Research Expert at Youngprenuers.
                    </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>Christopher Chijioke Ekemezie</h4>
              <p>Data & Research Officer</p>
            </div>
          </div>

          {/* <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/FB_IMG_15822366185769529.jpg" 
                    alt="" class="img-responsive" 
                    height="20px" />
                <figcaption>
                <p style={{fontSize:"9px"}}>
                A Social Engineer /Developmentalist with a Doctorate in Administration. He also has expertise in Systems and Design Thinking,  Dialectics,  Public Speaking,  Emotional Intelligence, Creative and Performing Arts with a knack in problem solving.
                James is also a History Enthusiast with special interest in Politics and Economics,  Philosophy and Technology  as they relate to Societal Development. He is presently  the Director of Programs (AfriCulFash)  General secretary  COPAVE and National Media Secretary  (AKBF)                    </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>James-Heal Pam </h4>
              <p> General Secretary</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/IMG-20200221-WA0006.jpg" 
                    alt="" class="img-responsive" 
                    height="20px" />
                <figcaption>
                <p style={{fontSize:"9px"}}>
                A Social Engineer /Developmentalist with a Doctorate in Administration. He also has expertise in Systems and Design Thinking,  Dialectics,  Public Speaking,  Emotional Intelligence, Creative and Performing Arts with a knack in problem solving.
                James is also a History Enthusiast with special interest in Politics and Economics,  Philosophy and Technology  as they relate to Societal Development. He is presently  the Director of Programs (AfriCulFash)  General secretary  COPAVE and National Media Secretary  (AKBF)                    </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>Eno Gift</h4>
              <p> Creative Visioner</p>
            </div>
          </div> */}

        </div>
      </div>


      <div class="container">
        <div class="row">
        <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/FB_IMG_15822366185769529.jpeg" 
                    alt="" class="img-responsive" 
                    height="20px" />
                <figcaption>
                <p style={{fontSize:"13px"}}>
                A Social Engineer /Developmentalist with a Doctorate in Administration. He also has expertise in Systems and Design Thinking,  Dialectics,  Public Speaking,  Emotional Intelligence, Creative and Performing Arts with a knack in problem solving.
                James is also a History Enthusiast with special interest in Politics and Economics,  Philosophy and Technology  as they relate to Societal Development. He is presently  the Director of Programs (AfriCulFash)  General secretary  COPAVE and National Media Secretary  (AKBF)                    </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>James-Heal Pam </h4>
              <p> General Secretary</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/IMG-20200221-WA0005.jpeg" 
                    alt="" class="img-responsive" 
                    height="20px" />
                <figcaption>
                <p style={{fontSize:"13px"}}>
                An Educational Technologist, an Entrepreneur and a Phycisit. She has expertise  in creative, design, critical and systems thinking.  A Tech enthusiast with regards to Artificial Intelligence, Robotics and Blockchain Technology. Prior to now, Eno served as the director of Accounts at African Cowries Ltd and Director of Operations and Logistics at T. E. F. Projects, an Educational Initiative. 

Eno is the founder of YOUNGPRENUERS, a thriving Initiative whose vision is to create a synergised community of Young Entrepreneurs. YOUNGPRENUERS also inspired the formation of Youngprenuers Club, a platform that gathers young people across all borders, it's targeted aim is to provide a platform for co-operation and individual development.            
                  </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>Eno Gift Akpan</h4>
              <p> Creative Visioner</p>
            </div>
          </div>

          {/* <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/FB_IMG_15822366185769529.jpg" 
                    alt="" class="img-responsive" 
                    height="20px" />
                <figcaption>
                <p style={{fontSize:"9px"}}>
                A Social Engineer /Developmentalist with a Doctorate in Administration. He also has expertise in Systems and Design Thinking,  Dialectics,  Public Speaking,  Emotional Intelligence, Creative and Performing Arts with a knack in problem solving.
                James is also a History Enthusiast with special interest in Politics and Economics,  Philosophy and Technology  as they relate to Societal Development. He is presently  the Director of Programs (AfriCulFash)  General secretary  COPAVE and National Media Secretary  (AKBF)                    </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>James-Heal Pam </h4>
              <p> General Secretary</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class={classes.teamMember}>
              <figure>
                <img 
                    src="/images/team/IMG-20200221-WA0006.jpg" 
                    alt="" class="img-responsive" 
                    height="20px" />
                <figcaption>
                <p style={{fontSize:"9px"}}>
                A Social Engineer /Developmentalist with a Doctorate in Administration. He also has expertise in Systems and Design Thinking,  Dialectics,  Public Speaking,  Emotional Intelligence, Creative and Performing Arts with a knack in problem solving.
                James is also a History Enthusiast with special interest in Politics and Economics,  Philosophy and Technology  as they relate to Societal Development. He is presently  the Director of Programs (AfriCulFash)  General secretary  COPAVE and National Media Secretary  (AKBF)                    </p>
                  <ul>
                    <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </figcaption>
              </figure>
              <h4>Eno Gift</h4>
              <p> Creative Visioner</p>
            </div>
          </div> */}

        </div>
      </div>


      
    </div>
  </div>
</section>

    );

}

export default Team


