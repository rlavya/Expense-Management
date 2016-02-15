myApp.controller('testExpenseController', function($scope, $state){
$( ".log_out" ).click(function() {
    	$state.go('/');
	});
});
