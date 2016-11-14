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
    "name":"Community Center",
    "shortname":"center",
    "bio":"In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
  },
  {
    "name":"Campus",
    "shortname":"campus",
    "bio":"In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
  },
  {
    "name":"Opera",
    "shortname":"Opera",
    "bio":"In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
  },
  {
    "name":"Volcano",
    "shortname":"volcano",
    "bio":"In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
  },
  {
    "name":"Cave",
    "shortname":"cave",
    "bio":"In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
  },
  {
    "name":"Pavillion",
    "shortname":"pavillion",
    "bio":"In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
  }
]
