'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$location','$anchorScroll', function MyCtrl1($scope, $location, $anchorScroll) {
 	$scope.scrollTo = function(id) {

 	var activeEl = angular.element( document.querySelector( '#segmented-controller-data-items' ) );
	activeEl.children().removeClass("active");      	
      var myEl = angular.element( document.querySelector( '#'+id ) );
      myEl.addClass("active")
   }
  }])
  .controller('MyCtrl2', [function() {

  }]);