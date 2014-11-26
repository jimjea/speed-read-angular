angular.module('speed-read',[])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
})