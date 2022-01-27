import hero_image from '../img/hero3.png';
import '../css/style.css';
import Type_anim from './type_ani.js'

//var typed = new Typed('#job-positions', options);
// Use a file to get the job_labels


function Intro() {
  return (
    <div className="intro">
      <div class="hero" id="home">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-content">
                            <div class="hero-text">
                                <p>I'm</p>
                                <h1>Rodrigo Cobo</h1>
                                <h2></h2>
                                <Type_anim texts={[
                                            'Software Engineer',
                                            'Data Scientist',
                                            'Full-Stack Dev',
                                            '3D/VFX Artist',
                                            'ML Engineer']}
                                />
                            </div>
                            <div class="hero-btn">
                                <a class="btn" href="https://www.linkedin.com/in/rocobo/">Hire Me</a>
                                <a class="btn" href="mailto: rocobo44@gmail.com">Contact Me</a>

                                <div class="social">
                                    <a href="https://twitter.com/RoCobo4"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/rocobo/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/rocobo/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/RoCoBo44"><i class="fab fa-github"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-none d-md-block">
                        <div class="hero-image">
                            <img src={hero_image} alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  );
}

export default Intro;