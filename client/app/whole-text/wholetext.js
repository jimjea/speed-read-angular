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
  $scope.text = {
    text: Main.testText().text,
    speed: $scope.speed,
    spread: $scope.spread,
    color: 'red'
  }

  $scope.test = function() {
    console.log($scope.speed)
  }
})

.directive('textHighlighter', function($timeout) {
  function link(scope, element, attrs) {

    function highlight(text, speed, spread, color) { // append all words to the directive
      var split = text.split(' ');
      var length = split.length;
      for (var i = 0; i < length; i++) { // turning all words into a span tag, and appending them to the dom
        element.append(angular.element('<span>').text(split[i] + ' '));
      }
      var highlighter = function(index) { // highlights words
        if (index < length) {
          angular.element(element[0].children[index]).css('background-color', color || 'yellow');
          angular.element(element[0].children[index-1]).css('background-color', 'white');
          index++;
          $timeout(function(){highlighter(index)}, speed || 200);
        } else {
          angular.element(element[0].children[index-1]).css('background-color', 'white');
        }
      }

      element.on('click', function(e) { // click anywhere on the text to fire off highlighter
        highlighter(0);
      });
    };


    scope.$watch(attrs.textHighlighter, function(value) { // looks for an attribute value that connects with the controller's scope, pulling in the text from the scope
      text = value.text;
      speed = value.speed;
      spread = value.spread;
      color = value.color;
      highlight(text, speed, spread, color);
    });

  }

  return {
    link: link
  }
})