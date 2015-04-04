angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http) {
  // Your code here
    $scope.link = {};

    $scope.addLink = function (link) {
      return $http({
        method: 'POST',
        url: '/api/links',
        data: $scope.link
      })
      .then(function (resp) {
      })
    }
});
