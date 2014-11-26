angular.module('speed-read.singlewordService', [])

.factory('Singleword', function() {
  var parseText = function(text) {
    var split = text.split(' ');
    return split;
  };

  var testText = function() {
    return {
      text: 'George Washington (February 22, 1732 [O.S. February 11, 1731][Note 1][Note 2] – December 14, 1799) was the first President of the United States (1789–1797), the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States.[3] He presided over the convention that drafted the United States Constitution, which replaced the Articles of Confederation and remains the supreme law of the land.'
    };
  };

  return {
    testText: testText,
    parseText: parseText
  }
})