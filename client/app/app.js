angular.module('speed-read',[
  'speed-read.reader',
  'speed-read.readerService'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
})