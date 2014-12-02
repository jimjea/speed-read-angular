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
  var text = Main.testText().text.split(' '); // pull back text data from factory
  var index = 0;
  var tail = -1;
  var length = text.length;
  var textSpan = [];
  for (var i = 0; i < length; i++) { // turning all words into a span tag, and pushing it to an array
    textSpan.push(angular.element('<span class=' + i + '>').text(text[i] + ' '));
  }

  $scope.text = textSpan;

  $scope.highlighter = function() { // highlighter function, will move into directive
    if (index < length) {
      $('.' + index).css('background-color', 'yellow');
      $('.' + tail).css('background-color', 'white');
      index++;
      tail++;
      $timeout($scope.highlighter, 270);
    }
  }

})

.directive('textScanner', function($timeout) {
  function link(scope, element, attrs) {
    var text;

    function highlight() { // append all words to the directive
      for (var i = 0; i < text.length; i++) {
        element.append(text[i]);
      }
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












    // highlighter;

// function highlighter() {
//   var newText = text.split(' ');
//   var index = 0;
//   var length = newText.length;
//   text = newText.join(' ');
//   newText[index] = newText[index].toUpperCase();
//   if (index < length) {
//     index++;
//     $timeout(highlighter, 300);
//     highlight();
//   }
// }