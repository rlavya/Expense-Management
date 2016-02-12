myApp.controller('expenseController', function($scope){
    ExpenseService.fetchExpenseDetails().then(function(data) {
        $scope.data = data;
    })
    $scope.showAddExpense = true;
    $scope.Show_Add_form = function() {
        $scope.firstname="";
        $scope.lastname="";
        $scope.add_email="";
        $('.add_error').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
});
