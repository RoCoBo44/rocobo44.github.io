import '../css/style.css';
import {experience_data} from  '../data/experience.js'


function Experience() {

  return (
    <div class="experience" id="experience">
        <div class="container">
            <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>My Resume</p>
                <h2>Experience</h2>
            </header>
            <div class="timeline">
                {experience_data && experience_data.map((item, index) => {
                if  (index % 2 === 0) 
                return(
                  <div class={"timeline-item right wow slideInRight "} data-wow-delay="0.1s">
                      <div class={" timeline-text "} id={(item.star ? 'star' : '')}>
                          <div class="timeline-date">{item.date}</div>
                          <h2>{item.rol} </h2>
                          <h4>{item.place}</h4>
                          <p>
                            {item.info && item.info.map(text => (
                              <> {text} <br /> </>
                            ))} 
                          </p>
                      </div>
                  </div>
                )
                else
                return(
                  <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                      <div class="timeline-text" id={(item.star ? 'star' : '')}>
                          <div class="timeline-date">{item.date}</div>
                          <h2>{item.rol} </h2>
                          <h4>{item.place}</h4>
                          <p>
                            {item.info && item.info.map(text => (
                              <> {text} <br /> </>
                            ))} 
                          </p>
                      </div>
                  </div>
                )
                })}

                
            </div>
        </div>
    </div>
  );
}

export default Experience;