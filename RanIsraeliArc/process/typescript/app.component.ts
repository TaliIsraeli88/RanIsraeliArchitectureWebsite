import {Component} from 'angular2/core';
import {ProjectItemComponent} from './project-item.component';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [ProjectItemComponent],
  styleUrls: ['css/styleprojects.css']
})

export class AppComponent {
  projects = PROJECTS;

}

var PROJECTS: Projects[] = [
  {
    "name":"Community Center gaga",
    "shortname":"center",
    "bio":"In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
  },
  {
    "name":"Campus",
    "shortname":"campus",
    "bio":"Tel Aviv is Israel’s most expansive city, and now losing its younger population that is not able to keep up with increase in rents. The campus, located between the historic part of the city and its downtown, is also here the students live, renting small apartments and creating a vibrant social and artful public space for the city"
  },
  {
    "name":"Opera-House",
    "shortname":"Opera",
    "bio":"Renovating one of Tel Aviv's significant cultural icons. “Mograbi cinema” was designed to be the city opera house, ending up being a theater and later on a cinema until it burned down in the 1980’s. More than anything, the structure had been a landmark of the city for gathering, rallies and daily meetings. if you wanted to see or to be seen, the Mograbi was the place for you. A major fire left the city with a culture hole that was never filled since it was gone"
  },
  {
    "name":"Volcano",
    "shortname":"volcano",
    "bio":"City corners and curbs of the street are deserted areas where trash usually accumulates. The city is a mixture of busy roads and people walking determined through sense streets. Under the branches of a wide, tall tree, there are places to get together, talk to each other, and think in solitude if we like. The idea of the structure is to give people the chance to step aside from the dense street and to relate to nature for a few moments and maybe even to talk to one another camly"
    },
  {
    "name":"Cave",
    "shortname":"cave",
    "bio":"The seminar examined the application if contemporary digital design and product methods, Grasshopper and Karamba. Centered upon the investigation of engineering and fabrication methods for realization of 1:1 parametric envelope structure - contributing to the eve expanding catalogue of porto-architectural solutions made possible through digital methods"
    },
  {
    "name":"Pavillion",
    "shortname":"pavillion",
    "bio":"The design of the pavilion is based of my happiest memories at my grandparents’ house. The house was where most of the important moments of my family took place like weddings as well as holidays gathering and etc, until it was sold and torn down. in spite of the absence the house remains a strong motive in my family. When I was asked to design a pavilion based on my dreams, I know that the design would have to evolve from my recollection of that motive"
  }
]
