(function(){

    var app = angular.module('githubViewer');

    app.controller('repolistCtrl', function($scope, $routeParams, GithubSvc) {

        $scope.username         = $routeParams.username;
        $scope.repoSortOrder    = '-stargazers_count';


        function onSuccess(response) {
            $scope.repos = response.data;
        }

        function onError(err) {
            console.error('Error received in fetching repo list');
        }

        GithubSvc.getRepos($scope.username).then(onSuccess, onError);

    });
    
})();

