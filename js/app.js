"use strict";

angular.module("sitesite", []).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/a', {templateUrl: 'html/home.html', controller: HomeCtrl}).
			when('/b', {templateUrl: 'html/home2.html', controller: HomeTwoCtrl}).
			otherwise({redirectTo : '/a'});
		}]);
	
