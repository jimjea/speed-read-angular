angular.module('speed-read.wholetext', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('wholetext', {
      url: '/wholetext',
      templateUrl: 'app/whole-text/wholetext.html',
      controller: 'WholeTextController'
    })
})

.controller('WholeTextController', function($scope, Main, $timeout) {
  var text = Main.testText().text.split(' ');
  var index = 0;
  var length = text.length;

  $scope.text = text.join(' ');

  $scope.highlighter = function() {
    $scope.text = text.join(' ');
    if (index < length) {
      text[index] = 'highlight';
      index++;
      $timeout($scope.highlighter, 300);
    } else {
      $scope.text = "END OF READING";
    }
  }

})

.directive('textScanner', function() {
  function link(scope, element, attrs) {
    var text;

    function highlight() {
      element.text(text);
    };

    scope.$watch(attrs.textScanner, function(value) {
      text = value;
      highlight();
    });

  }

  return {
    link: link
  }
})