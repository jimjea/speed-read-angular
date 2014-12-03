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

  $scope.text = Main.testText().text; // pull text form factory. The text variable will be passed into the directive

})

.directive('textHighlighter', function($timeout) {
  function link(scope, element, attrs) {
    var text;

    function highlight() { // append all words to the directive
      var split = text.split(' ');
      var index = 0;
      var tail = -1;
      var length = split.length;
      for (var i = 0; i < length; i++) { // turning all words into a span tag, and appending them to the dom
        element.append(angular.element('<span class=' + i + '>').text(split[i] + ' '));
      }
      var highlighter = function() {
        if (index < length) {
          $('.' + index).css('background-color', 'yellow');
          $('.' + tail).css('background-color', 'white');
          index++;
          tail++;
          $timeout(highlighter, 270);
        }
      }
      highlighter()
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