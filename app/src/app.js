import angular from 'angular';

const app = angular.module('myApp', []);

app.controller('main', function($scope) {
  $scope.hello = 'Hello World!';
});