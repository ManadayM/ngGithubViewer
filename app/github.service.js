(function(){
    
    var app = angular.module('githubViewer');

    app.factory('GithubSvc', function($http, $q) {

        /* getReops: Fetches list of repositories for a provided username */
        function getRepos(username) {

            var url = 'https://api.github.com/users/' + username + '/repos';

            var defer = $q.defer();

            $http.get(url)
                .then(

                    /* success callback */
                    function (response){
                        console.log('GetRepos - Response received: ', response);
                        defer.resolve(response);
                    },

                    /* error callback */
                    function (err){
                        defer.reject(err);
                    }
            );

            return defer.promise;

        };
        
        /* getRepoDetails: Fetches repository contributors for a provided username and reponame */
        function getRepoContributors(username, reponame){
            
            var url = 'https://api.github.com/repos/' + username + '/' + reponame + '/contributors';
            console.log('GetRepoContributors: ', url);
            
            var defer = $q.defer();

            $http.get(url)
                .then(

                    /* success callback */
                    function (response){
                        console.log('GetRepoContributors - Response received: ', response);
                        defer.resolve(response);
                    },

                    /* error callback */
                    function (err){
                        defer.reject(err);
                    }
            );

            return defer.promise;
            
        }

        return {
            getRepos: getRepos,
            getRepoContributors: getRepoContributors
        };
    });
    
})();