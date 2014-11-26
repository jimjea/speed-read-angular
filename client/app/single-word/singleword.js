angular.module('speed-read.singleword',['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('singleword', {
      url: '/singleword',
      templateUrl: 'app/single-word/singleword.html',
      controller: 'SingleWordController'
    })
})

.controller('SingleWordController', function($scope, $timeout, Singleword, Main) {
  $scope.text = Main.testText().text;
  $scope.parse = Singleword.parseText($scope.text);

  var index = 0;
  var length = $scope.parse.length;
  $scope.oneWord = function() {
    $scope.word = $scope.parse[index]
    if (index < length) {
      index++;
      $timeout($scope.oneWord, 500);
    } else {
      $scope.word = "END OF READING";
    }
  }  

});