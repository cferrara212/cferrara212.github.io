import React from 'react';
import 'bootstrap/js/src/collapse.js'
import "./Projects.css";

function Projects(){
    return(
        <>
        <div className='projects row'>
            <div className="col-sm">
              <h1 className='header'>Projects</h1>
            </div>
        </div>
        <div className='proj-list row'>
            <div className='col-sm'>
            <div class="accordion" id="projectAccordian">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Current Project - LHW Local History Web App
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#projectAccordian">
      <div class="accordion-body">
        <strong>Purpose:</strong> The application is a local history application. The purpose of this application is to give 
        individuals who may like to travel to new locations and explore the local history a place to do so. In this application 
        the users will be able to search for a location and get an overview of a location with a list of little known historical 
        facts in the area. If the historical fact happened in a specific location, or has a location still existing, it will have 
        a map with a marker for that location. The app also allows contributors to make accounts, so that they can add little known
        historical facts for their own areas.<br /><br />
        <strong>Technologies:</strong> Mapbox API, Mapbox javascript Suite. Python Django REST backend,React.js Frontend,JWT authentication, HTML5, CSS, Javascript<br />
        <strong><a href="https://github.com/cferrara212/LWHfrontend">GitHub FrontEnd</a></strong><br />
        <strong><a href="https://github.com/cferrara212/LHWbackend">GitHub BackEnd</a></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Team - Ecommerce site
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#projectAccordian">
      <div class="accordion-body">
        <strong>Puropse:</strong> Demonstrate team effort through GitHub, and create an E-commerce Front and Back end.<br /><br />
        <strong>Technologies:</strong> Asp.net/C# database, LINQ query, React.js, Javascript, Html5, CSS<br />
        <strong><a href="https://github.com/danielramirez0/eCommerceReact">E-Commerce FrontEnd</a></strong><br />
        <strong><a href="https://github.com/danielramirez0/eCommerceAPI">E-Commerce BackEnd</a></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Rock Paper Scissors Lizard Spock
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#projectAccordian">
      <div class="accordion-body">
        <strong>Purpose:</strong> Simple game of Rock, Paper, Scissors, Lizard, Spock. This simple text based game was created as
        Object Oriented Programming with C#. The player has a choice of 1 or 2 player, and the AI choices are randomized.<br /><br />
        <strong>Technologies:</strong> C# <br />
        <strong><a href="https://github.com/cferrara212/RPSLS_C_Sharp">RPSLS GitHub</a></strong>
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Robots Vs Dinosaurs
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#projectAccordian">
      <div class="accordion-body">
        <strong>Purpose:</strong> This is a simple python OOP application. The purpose of the game is to pick the robots or Dinosaurs
        team. Then pick which dino or robot you wish to battle with first. If you choose your opponents wisely you will win the game. <br /><br />
        <strong>Technologies:</strong> Python <br />
        <strong><a href="https://github.com/cferrara212/robots_vs_dinosaurs">Robots Vs Dinosaurs GitHub</a></strong>
      
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        </>
    )
}
export default Projects;