import {Component} from 'angular2/core';

@Component ({
  selector: 'project-item',
  templateUrl: 'partials/projectitem.html',
  styleUrls : ['css/styleprojects.css'],
  inputs: ['project']
})

export class ProjectItemComponent {}
