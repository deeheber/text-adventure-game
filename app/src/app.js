import angular from 'angular';

const app = angular.module('myApp', []);

app.controller('main', function($scope) {
  $scope.room = '';
  $scope.cake = false;
  $scope.intro = `It is 4:20pm on a Friday, and your top pal has an extra ticket to the Pabst Music Festival on the Waterfront. You stuck at work until 6pm, but your pal is coming to pick you up at five. You must navigate through the perils of Coropate America to reach the safe harbor that is Pabst Music Festival. Your move!`;
  $scope.getCake = function() {
    $scope.cake = true;
  };
  $scope.winning = function() {
    $scope.room = 'end';
  };

});

app.controller('desk', function($scope) {
  $scope.deskText = 'This is the text for desk';
});

app.controller('bossDesk', function($scope) {
  $scope.bossDeskText = 'This is the text for boss desk text';
});

app.controller('breakroom', function($scope) {
  $scope.breakroomText = 'This is the text for break room text';
});

app.controller('end', function($scope) {
  $scope.endText = 'This is the text for the end room. #SWEETFREEDOM';
});