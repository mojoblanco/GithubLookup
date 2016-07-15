(function(){
    
    var app = angular.module("GithubLookup");
    
    //Main Controller Function
    var MainController = function($scope, github, $location){
     
        //Success
        var onUser = function(data){
            $scope.user = data;
        };
        
        //Error
        var onError = function (reason) {
            $scope.error = reason;
        };
        
        //Show Repos Page
        $scope.viewRepos = function(username){
            $location.path("/user/" + username);
        };
        
        //Search for user
        $scope.search = function(username) {
            github.getUser(username).then(onUser, onError);
        };
        
        
        $scope.username = "mojoblanco";
    };
    
    //Register Controllers
    app.controller("MainController", ["$scope", "github", "$location", MainController]);
    
}());