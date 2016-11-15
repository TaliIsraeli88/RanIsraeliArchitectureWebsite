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
                        selector: 'my-project',
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
                    "name": "Community Center gaga",
                    "shortname": "center",
                    "bio": "In Tel-Aviv, most of the refugees that come to the city are able to stay only in segregated communities on the south edge of the city, without having any relationship with the city's population. The wide, neglected spaces between the row houses of the city's sleepy northern neighborhood was a perfect location to position a community center for refugees so they could have a sense of belonging in the city they live in"
                },
                {
                    "name": "Campus",
                    "shortname": "campus",
                    "bio": "Tel Aviv is Israel’s most expansive city, and now losing its younger population that is not able to keep up with increase in rents. The campus, located between the historic part of the city and its downtown, is also here the students live, renting small apartments and creating a vibrant social and artful public space for the city"
                },
                {
                    "name": "Opera-House",
                    "shortname": "Opera",
                    "bio": "Renovating one of Tel Aviv's significant cultural icons. “Mograbi cinema” was designed to be the city opera house, ending up being a theater and later on a cinema until it burned down in the 1980’s. More than anything, the structure had been a landmark of the city for gathering, rallies and daily meetings. if you wanted to see or to be seen, the Mograbi was the place for you. A major fire left the city with a culture hole that was never filled since it was gone"
                },
                {
                    "name": "Volcano",
                    "shortname": "volcano",
                    "bio": "City corners and curbs of the street are deserted areas where trash usually accumulates. The city is a mixture of busy roads and people walking determined through sense streets. Under the branches of a wide, tall tree, there are places to get together, talk to each other, and think in solitude if we like. The idea of the structure is to give people the chance to step aside from the dense street and to relate to nature for a few moments and maybe even to talk to one another camly"
                },
                {
                    "name": "Cave",
                    "shortname": "cave",
                    "bio": "The seminar examined the application if contemporary digital design and product methods, Grasshopper and Karamba. Centered upon the investigation of engineering and fabrication methods for realization of 1:1 parametric envelope structure - contributing to the eve expanding catalogue of porto-architectural solutions made possible through digital methods"
                },
                {
                    "name": "Pavillion",
                    "shortname": "pavillion",
                    "bio": "The design of the pavilion is based of my happiest memories at my grandparents’ house. The house was where most of the important moments of my family took place like weddings as well as holidays gathering and etc, until it was sold and torn down. in spite of the absence the house remains a strong motive in my family. When I was asked to design a pavilion based on my dreams, I know that the design would have to evolve from my recollection of that motive"
                }
            ];
        }
    }
});

//# sourceMappingURL=app.component.js.map
