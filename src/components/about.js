import '../css/style.css';



// TODO: add links to web
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}


function About() {
  return (
  <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div class="container-fluid">
          <div class="row align-items-center">
              <div class="col-lg-12">
                  <div class="about-content">
                      <div class="section-header text-center">
                          <p>Learn About Me</p>
                          <h2>Who am I ?</h2>
                      </div>
                      <div class="about-text">
                          <p>
                            I'm a {getAge("1997/04/04")} years old Argentinian guy living in Italy. In april of 2021 I graduated as a Software Engineering and I'm eager to start in the industry and learn about new technologies. <br />
                            Being a <i>"jack of all trades" </i> is my motto in life, that's why I like to work in projects where I can grow in many areas at the same time, such as Machine Learning, AI, Cloud Computing, Visual Computation, Full-Stack, VFX and 3D animation. <br />
                            
                          </p>
                      </div>
                  </div>
              </div>
          </div>              
      </div>
  </div>
  );
}

export default About;