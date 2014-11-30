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
  $scope.text = Main.testText().text.split(' ');
})

.directive('textScanner', function($interval) {
  function highlight(scope, element, attrs) {
    console.log(element[0].textContent)
    // need to access the innerhtml (currently returning {{text}})
    // split the text
    // iterate through text
      // toggle classes to highlight words in text

  }

  return {
    // scope: {
    //   wholeText: '='
    // },
    // templateUrl: 'app/whole-text/highlight.html',
    highlight: highlight
  }
})