angular.module('speed-read',[
  'speed-read.singleword',
  'speed-read.singlewordService'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
})