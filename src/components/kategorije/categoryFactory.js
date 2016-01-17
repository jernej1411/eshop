angular.module('ePlush').factory('Category', function($resource){
	
	return  $resource('http://smartninja.betoo.si/api/eshop/categories/:id/products');
		
});