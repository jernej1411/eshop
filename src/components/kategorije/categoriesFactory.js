angular.module('eshop').factory('Categories', function($resource){
	
	return  $resource('http://smartninja.betoo.si/api/eshop/categories');
		
});