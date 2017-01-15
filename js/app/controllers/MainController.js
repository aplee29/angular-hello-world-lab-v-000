function MainController($scope) {
  $scope.name = "Ann";
  $scope.email = "ann@example.com";
  $scope.phone = "1234567890";
}

angular
  .module('app')
  .controller('MainController', MainController);