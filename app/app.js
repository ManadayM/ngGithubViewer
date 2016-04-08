(function() {

    angular.module('githubViewer', ['ngRoute'])

    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/app/search.html',
                controller: 'searchCtrl'
            })
            .when('/:username/repos', {
                templateUrl: '/app/repolist.html',
                controller: 'repolistCtrl'
            })
            .when('/:username/:reponame/contributors', {
                templateUrl: '/app/contributors.html',
                controller: 'contributorsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    });

})();