(function(){
    
    var app = angular.module('githubViewer');
    
    app.controller('contributorsCtrl', function($scope, $routeParams, GithubSvc){
        
        $scope.reponame = $routeParams.reponame;
        $scope.username = $routeParams.username;
        
        function onSuccess(response){
            $scope.contributors = response.data;
        };
        
        function onError(err){
            console.error('Error received: ', err);
        };
        
        GithubSvc.getRepoContributors($scope.username, $scope.reponame).then(onSuccess, onError);
    });
    
})();