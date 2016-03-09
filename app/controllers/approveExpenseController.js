expenseManagementApp.controller('approveExpenseController', function($scope, $state, $http, $rootScope){
	$scope.checkbox = [];
	$scope.approve_check = function(index, event) {
		if ($scope.checkbox[index] == true) {
			$rootScope.fullData[index].status = 1;
		}
		else{
			$rootScope.fullData[index].status = 0;	
		}
		console.log($rootScope.fullData[index].status);
	}
	$scope.openURL = function(curretObject){
        window.open(curretObject.invoice);   
    }
});
