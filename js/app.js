'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:p', {templateUrl: function(params){
  												 return 'partials/'+params.p+'.html'; 
  												}
  								, controller: 'MyCtrl1'});
   
   $routeProvider.when('/:cat/:qstn', {templateUrl: function(params){
  												 return 'partials/'+params.cat+'/'+ params.qstn+'.html'; 
  												}
  								, controller: 'MyCtrl1'});

   $routeProvider.otherwise({redirectTo: '/1'});
}]);
