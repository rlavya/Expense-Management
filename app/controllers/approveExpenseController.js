expenseManagementApp.controller('approveExpenseController', function($scope, $state, $http, $rootScope){
	$scope.approve_check = function(index, name) {
			$rootScope.fullData[index].status = 1;
	}
});
