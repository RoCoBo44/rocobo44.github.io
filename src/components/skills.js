import '../css/style.css';
import React, { useState, useEffect } from "react";
import { skills_buttons } from "../data/skills_data";
import {filterClass} from "../services/skills"
import { skills_data } from "../data/skills_data";

function Skills() {

  const filter = new filterClass(skills_data)

  const [filtredSkill, setFiltredSkill] = useState(null);
  const [typeSkill, setTypeSkill] = useState(null);
  useEffect(() => {
    setFiltredSkill(filter.getAll());
    setTypeSkill("All");
  }, []);

  const handleFilter = e => {
    e.preventDefault();
    setTypeSkill(e.target.value);
    e.target.value !== "All"
      ? setFiltredSkill(filter.getFilter(e.target.value))
      : setFiltredSkill(filter.getAll());
  }

  return (
    <div class="portfolio wow zoomIn" id="skills" data-wow-delay="0.1s">
        <div class="container">
            <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>Skills</p>
                <h2>My Skills</h2>
            </div>
            <div class="row">
                <div class="col-12 wow zoomIn" id="portfolio-filter" data-wow-delay="0.1s">
                  {
                  
                  skills_buttons && skills_buttons.map((type, index) => {
                    var tag = ""
                    if (typeSkill === type.name)
                      tag="target"
                    return(
                      <>
                        <button key={index} value={type.name} onClick={handleFilter} class={tag}>
                          {type.name}
                        </button>
                      </>
                    )})}
                </div>
            </div>
            <div class="row portfolio-container">
                {filtredSkill && filtredSkill.map(type => (
                  <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.0s">
                    <div class="portfolio-wrap">
                        <div class="glass portfolio-text">
                            <h3>{type.name}</h3>
                        </div>
                    </div>
                  </div>
                ))}     
            </div>
        </div>
    </div>
  );
}

export default Skills;