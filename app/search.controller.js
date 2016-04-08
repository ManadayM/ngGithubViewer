(function(){

    var app = angular.module('githubViewer');

    app.controller('searchCtrl', function($scope, $location) {

        $scope.searchRepos = function() {
            $location.path($scope.username + '/repos/');
        };
    });
    
})();

