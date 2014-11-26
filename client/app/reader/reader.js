angular.module('speed-read.reader',['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('reader', {
      url: '/reader',
      templateUrl: 'app/reader/reader.html',
      controller: 'ReaderController'
    })
})

.controller('ReaderController', function($scope, $state, $timeout, Reader) {
  $scope.text = Reader.testText().text;
  $scope.parse = Reader.parseText($scope.text);

  var index = 0;
  var length = $scope.parse.length;
  $scope.oneWord = function() {
    $scope.test = $scope.parse[index]
    if (index < length) {
      index++;
      $timeout($scope.oneWord, 500);
    } else {
      $scope.test = "END OF READING";
    }
  }  

});