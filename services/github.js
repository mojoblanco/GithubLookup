(function(){
   
    var github = function ($http) {
        
        var base_url = "https://api.github.com/"
        
        var getUser = function (username) {
            return $http.get(base_url + "users/" + username)
                        .then(function(response){
                            return response.data;
                        });
        };
        
        var getRepos = function (user) {
            return $http.get(user.repos_url)
                        .then(function(response){
                            return response.data;
                        });
        };
        
        var getRepoDetails = function(username, repo){
            var repoUrl = base_url + "repos/";
            return $http.get(repoUrl + username + "/" + repo)
                        .then(function(response){
                            return response.data;
                        });
        };
        
        var getContributors = function(contributors){
            return $http.get(contributors)
                        .then(function(response){
                            return response.data;
                        });
        };
        
        //Reguister APIs
        return {
            getUser             :   getUser,
            getRepos            :   getRepos,
            getRepoDetails      :   getRepoDetails,
            getContributors     :   getContributors
        };
        
    }
    
    var module = angular.module("GithubLookup"); //Register the module
    module.factory("github", github); //Register service
    
    
}());