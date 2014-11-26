angular.module('speed-read.singlewordService', [])

.factory('Singleword', function() {
  var parseText = function(text) {
    var split = text.split(' ');
    return split;
  };

  return {
    parseText: parseText
  }
})