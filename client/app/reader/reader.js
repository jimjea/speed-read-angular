angular.module('speed-read.reader',['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('reader', {
      url: '/reader',
      templateUrl: 'app/reader/reader.html',
      controller: 'ReaderController'
    })
})

.controller('ReaderController', function($scope, $state, Reader) {
  $scope.text = Reader.testText().text;
  $scope.parse = Reader.parseText($scope.text).forEach(function(word) {
    
  })
})