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
      var length = split.length;
      for (var i = 0; i < length; i++) { // turning all words into a span tag, and appending them to the dom
        element.append(angular.element('<span>').text(split[i] + ' '));
      }
      var highlighter = function(index) { // highlights words
        if (index < length) {
          angular.element(element[0].children[index]).css('background-color', 'yellow')
          angular.element(element[0].children[index-1]).css('background-color', 'white')
          index++;
          $timeout(function(){highlighter(index)}, 160);
        }
      }
      highlighter(0)
    };

    scope.$watch(attrs.textHighlighter, function(value) { // looks for an attribute value that connects with the controller's scope, pulling in the text from the scope
      text = value;
      highlight();
    });

  }

  return {
    link: link
  }
})