import '../css/style.css';
import React, { useState, useEffect } from "react";
import { projects_buttons } from "../data/projects_data";
import {filterClass} from "../services/skills"
import { projects_data } from "../data/projects_data";
import github_image  from "../img/github.png"
import colab_image from "../img/colab.png"



// Use a file to get the text


function Projects() {

  const filter = new filterClass(projects_data)

  const [filtredProject, setFiltredProject] = useState(null);
  useEffect(() => {
    setFiltredProject(filter.getAll());
  }, []);

  function handleFilter(e) {
    let typeProject = e.target.value;
    typeProject !== "All"
      ? setFiltredProject(filter.getFilter(typeProject))
      : setFiltredProject(filter.getAll());
  }

  return (
    <div class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Projects</h2>
                </div>
                <div class="row">
                    <div class="col-12" id="portfolio-filter">
                      {projects_buttons &&
                      projects_buttons.map((type, index) => (
                        <>
                          <button key={index} value={type.name} onClick={handleFilter}>
                            {type.name}
                          </button>
                        </>
                      ))}
                    </div>
                </div>
                <div class="row portfolio-container">
                    {filtredProject && filtredProject.map(type => (
                      <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item wow fadeInUp" data-wow-delay="0.0s">
                          <div class="portfolio-wrap">
                              <div class="portfolio-img">
                                  <img src={type.image} alt="Image" />
                              </div>
                              <div class="portfolio-text">
                                  <h3>{type.name}</h3>
                              </div>
                              <div class="portfolio-text-description">
                                  <h4>{type.description}</h4>
                                  {
                                    type.link && 
                                    <a class= "link" href={type.link}>view it here</a>
                                  }
                                  {
                                    type.github && 
                                    <a href={type.github}>
                                      <img alt="github link" src={github_image} width="30px" height="30px" class="github"/>
                                    </a>
                                  }
                                  {
                                    type.colab && 
                                    <a href={type.colab}>
                                      <img alt="github link" src={colab_image} width="30px" height="30px" class="github"/>
                                    </a>
                                  }       
                              </div>
                          </div>
                      </div>
                    ))}
                </div>
          </div>
    </div>
  );
}

export default Projects;