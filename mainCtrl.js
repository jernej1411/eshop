angular.module('eshop').controller('mainCtrl', function($scope, Categories, Category, Items, $http){
	
	function init(){
		$scope.categories = Categories.query();
		$scope.items = Items.query();
	}

	$scope.loadCategories = function(id){
		$scope.items = Category.query({id: id});
	}

	init();
});