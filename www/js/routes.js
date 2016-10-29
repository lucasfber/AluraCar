angular.module('starter')
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('listagem');

		$stateProvider
			.state('listagem',{
			url : '/listagem',
			templateUrl : 'templates/listagem.html',
			controller : 'ListagemController'
			})
			.state('carroEscolhido', {
				url : '/carroEscolhido/:carro',
				templateUrl : 'templates/carro-escolhido.html',
				controller : 'CarroEscolhidoController'
			});
		

	});