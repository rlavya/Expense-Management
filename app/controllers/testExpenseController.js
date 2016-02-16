myApp.controller('testExpenseController', function($scope, $state, $rootScope){
	$http.get('app/json/expense_details.json').success(function(response) {
    $rootScope.user1=response.user1[0].name;
    $rootScope.user2=response.user2[0].name;
    })
$( ".log_out" ).click(function() {
    	$state.go('/');
	});
});
