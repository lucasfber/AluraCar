//como estamos reusando um modulo 'starter' do ionic, nao usaremos o []

angular.module('starter')
	.controller('ListagemController', function($scope){
		
		$scope.carros = ["Golf 1.8", "Fusca", "Opala ", "Gol Sport", "Onix 1.6"];

		$scope.endereco = "Av Mister Hull - Fortaleza";
	});

angular.module('starter')
	.controller('CarroEscolhidoController', function($stateParams, $scope){
		$scope.carroEscolhido = $stateParams.carro;
	});