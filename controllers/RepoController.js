(function(){
    
    var app = angular.module("GithubLookup");
    
   
    
    var RepoController = function($scope, github, $routeParams){
        
        $scope.username = $routeParams.username;
        $scope.repo = $routeParams.repo;
        
        var onContributors = function (data) {
            $scope.contributors = data;
        }
        
        var onRepoDetails = function (data){
            $scope.repoDetails = data;
            github.getContributors(data.contributors_url).then(onContributors, onError);
        };
        
        var onError = function (reason){
            $scope.onError = reason;
        };
        
        github.getRepoDetails($scope.username, $scope.repo).then(onRepoDetails, onError);
    };
    
     //Register Controller
    app.controller("RepoController", ["$scope", "github", "$routeParams", RepoController]);
    
}());