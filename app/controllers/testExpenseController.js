myApp.controller('testExpenseController', function($scope, $state, $rootScope){
	debugger;
	console.log($rootScope.total);
$( ".log_out" ).click(function() {
    	$state.go('/');
	});
});
