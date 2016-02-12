myApp.controller('expenseController', function($scope, $state){
    $scope.showAddExpense = true;
    $scope.Show_Add_form = function() {
        $scope.firstname="";
        $scope.lastname="";
        $scope.add_email="";
        $('.add_error').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
	$( ".log_out" ).click(function() {
    	$state.go('/');
	});
});
