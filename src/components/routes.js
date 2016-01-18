angular.module('eshop').config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/index');

	$stateProvider.state('index', 
	{
		url:'/index',
		templateUrl: './templates/index.html',
		controller: 'indexCtrl'
	});

	$stateProvider.state('izdelki', 
	{
		url:'/izdelki/:izdelkiId',
		templateUrl: './templates/izdelki.html',
		controller: 'izdelkiCtrl'
	});

	$stateProvider.state('racun',
		url:'/racun',
		templateUrl: './templates/racun.html'
	});
	
	$stateProvider.state('prijava', 
	{
		url:'/prijava',
		templateUrl: './templates/prijava.html'
	});

	$stateProvider.state('dostava', 
		url:'/dostava',
		templateUrl: './templates/dostava.html'
	});
	
	$stateProvider.state('o_nas', 
	{
		url:'/o_nas',
		templateUrl: './templates/o_nas.html'
	});

	$stateProvider.state('politika_zasebnosti', 
	{
		url:'/politika_zasebnosti',
		templateUrl: './templates/politika_zasebnosti.html'
	});
	$stateProvider.state('error', 
	{
		url:'/error',
		templateUrl: './templates/error.html'
	});
});