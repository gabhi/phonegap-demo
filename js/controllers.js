'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$location','$anchorScroll', function MyCtrl1($scope, $location, $anchorScroll) {
 	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
  }])
  .controller('MyCtrl2', [function() {

  }]);