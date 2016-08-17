export default function main($scope) {
  $scope.room = '';
  $scope.cake = false;
  $scope.intro = `It is 4:20pm on a Friday, and your top pal has an extra ticket to the Pabst Music Festival on the Waterfront. You stuck at work until 6pm, but your pal is coming to pick you up at five. You must navigate through the perils of Coropate America to reach the safe harbor that is Pabst Music Festival. Your move!`;
  $scope.getCake = function() {
    $scope.cake = true;
  };
  $scope.winning = function() {
    $scope.room = 'end';
  };
}