angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links)
  $scope.alink = ["yo muthafuckas", "hey whats up,", "stuff"]
  $scope.getLinks()
});
