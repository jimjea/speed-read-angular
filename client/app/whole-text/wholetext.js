angular.module('speed-read.wholetext', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('wholetext', {
      url: '/wholetext',
      templateUrl: 'app/whole-text/wholetext.html',
      controller: 'WholeTextController'
    })
})

.controller('WholeTextController', function($scope, Main) {
  $scope.text = Main.testText().text;
})