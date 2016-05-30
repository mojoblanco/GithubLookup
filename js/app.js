(function() {
    var app = angular.module("GithubLookup", ["ngRoute"]);
    
    //Route Configuration
    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl:    "views/main.html",
                controller:     "MainController"
            })
            .when("/user/:username", {
                templateUrl:    "views/user.html",
                controller:     "UserController"
            })
            .when("/repo/:username/:repo",{
                templateUrl:   "views/repo.html",
                controller: "RepoController"
            })
            .otherwise({
                redirectTo:     "/main"
            });
    });
    
}());