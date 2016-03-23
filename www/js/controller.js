
(function () {

  var appReference  = angular.module('bar_line');

  var SearchController = function ($scope, LocationService) {
    $scope.items = [
    { address: '1647 s blue ave',  name: 'Blue1647' },
      { address: '1 N Clark st',  name: 'Brothes (worse bar)' },
    ];


  };

  appReference.controller('BarController', SearchController);

}());