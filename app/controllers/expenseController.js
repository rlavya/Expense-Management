myApp.controller('expenseController', function($scope, $state, $http, ExpenseDetailsService, $rootScope){
    $scope.showAddExpense = true;
    $scope.Show_Add_form = function() {
        $scope.date="";
        $scope.purpose="";
        $scope.pm="";
        $scope.rate="";
        $('.add_error').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
    $scope.SubmitAdd = function() {
        if ($scope.date == "" || $scope.purpose =="" || $scope.pm =="" || $scope.rate == "") {
            $('.add_error').show();
            $('.add_error').html('Enter all details..');
            return false;
        }else {
            $rootScope.data.push({ 'date':$scope.date, 'purpose': $scope.purpose, 'pm':$scope.pm, 'rate':$scope.rate });
            $('.shadow-div').removeClass('display_block');
            $scope.showAddExpense = $scope.showAddExpense ? false : true;
        }
    }
    $scope.HideAdd = function() {
        $('.shadow-div').removeClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
	$( ".log_out" ).click(function() {
    	$state.go('/');
	});
});
