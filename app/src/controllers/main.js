export default function main($scope) {
  $scope.room = '';
  $scope.cake = false;
  $scope.heading = `ESCAPE FROM CORPORATE 'MURICA`;
  $scope.intro = `It is 4:20pm on a Friday, and your top pal, Pam, has an extra ticket to the Pabst Music Festival on the Waterfront. You're stuck at work until 6pm, but Pam is coming to pick you up at five. You must navigate through the perils of Coropate America to reach the safe harbor that is Pabst Music Festival. Your boss, Michael, back from Sandals, Jamaica is heading straight towards you. Your move, Jim!`;
  $scope.class = `four columns`;

  $scope.getCake = function() {
    $scope.cake = true;
  };
  $scope.winning = function() {
    $scope.room = 'end';
  };

  $scope.$watch('room', function() {
    console.log('watch works!');
    if($scope.room === 'desk') {
      $scope.class = `six columns`;
    }
  });
}