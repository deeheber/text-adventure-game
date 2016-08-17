import angular from 'angular';

const app = angular.module('myApp', []);

app.controller('main', function($scope) {
  $scope.room = '';
  $scope.cake = false;
});

app.controller('start', function($scope) {
  $scope.intro = `It is 4:20pm on a Friday, and your top pal has an extra ticket to the Pabst Music Festival on the Waterfront. You stuck at work until 6pm, but your pal is coming to pick you up at five. You must navigate through the perils of Coropate America to reach the safe harbor that is Pabst Music Festival. Your move!`;

});

app.controller('desk', function($scope) {

});

app.controller('bossDesk', function($scope) {

});

app.controller('breakroom', function($scope) {

});

app.controller('end', function($scope) {

});