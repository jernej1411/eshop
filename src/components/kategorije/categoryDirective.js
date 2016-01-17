angular.module('eshop').directive('eplCategory', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/category.html',
		controller: 'mainCtrl'
	};
})