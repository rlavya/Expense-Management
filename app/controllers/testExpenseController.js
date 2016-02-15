myApp.controller('testExpenseController', function($scope){
$( ".log_out" ).click(function() {
    	$state.go('/');
	});
});
