System.register(['angular2/core', './project-item.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, project_item_component_1;
    var AppComponent, PROJECTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_item_component_1_1) {
                project_item_component_1 = project_item_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.projects = PROJECTS;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'partials/app.html',
                        directives: [project_item_component_1.ProjectItemComponent],
                        styleUrls: ['css/styleprojects.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            PROJECTS = [
                {
                    "name": "Community Center",
                    "shortname": "center",
                    "bio": "In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
                },
                {
                    "name": "Campus",
                    "shortname": "campus",
                    "bio": "In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
                },
                {
                    "name": "Opera",
                    "shortname": "Opera",
                    "bio": "In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
                },
                {
                    "name": "Volcano",
                    "shortname": "volcano",
                    "bio": "In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
                },
                {
                    "name": "Cave",
                    "shortname": "cave",
                    "bio": "In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
                },
                {
                    "name": "Pavillion",
                    "shortname": "pavillion",
                    "bio": "In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
                }
            ];
        }
    }
});

//# sourceMappingURL=app.component.js.map
