var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
    $scope.params = {};
    $scope.showPassword = false;
    $scope.toggleShowPassword = function() {
        $scope.showPassword = !$scope.showPassword;
    }
});
