(function(){
    
    var app = angular.module("GithubLookup");
    
    //User details Controller Function
    var UserController = function($scope, github, $routeParams){

        //Repos Success
        var onRepos = function(data){
            $scope.repos = data;
        }
        
        //Error
        var onError = function(reason){
            $scope.error = "Failed to load users " + reason.data;
        }
        
        //Success
        var onUser = function(data){
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        }
                
        //App Variables
        $scope.username = $routeParams.username;
        $scope.sortOrder = "+name";
        
        github.getUser($scope.username).then(onUser, onError);
  
    };
    
    //Register Controllers
    app.controller("UserController", ["$scope", "github", "$routeParams", UserController]);
    
}());