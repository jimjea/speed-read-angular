angular.module('speed-read',[
  'speed-read.singleword',
  'speed-read.singlewordService',
  'speed-read.wholetext',
  // 'speed-read.wholetextService',
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
})

.factory('Main', function() {
  var testText = function() {
    return {
      text: 'George Washington was born on February 22, 1732, in Westmoreland County, Virginia. Washington served as a general and commander-in-chief of the colonial armies during the American Revolution, and later became the first president of the United States, serving from 1789 to 1797. He died on December 14, 1799, in Mount Vernon, Virginia.'
    };
  };

  return {
    testText: testText
  }
})