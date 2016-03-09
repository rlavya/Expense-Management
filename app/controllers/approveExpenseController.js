expenseManagementApp.controller('approveExpenseController', function($scope, $state, $http, $rootScope){
	$scope.checkbox = [];
	$scope.approve_check = function(index, event) {
		if ($scope.checkbox[index] == true) {
			$rootScope.fullData[index].status = 1;
		}
		else{
			$rootScope.fullData[index].status = 0;	
		}
	}
	$scope.popup = function() {
		$(".popup").fadeIn(500);
		$("#overlay").fadeIn(500);
		$(".popup textarea").val('');
	}
	$scope.popupClose = function() {
		$(".popup").fadeOut(500);
		$("#overlay").fadeOut(500);
	}
	$scope.openURL = function(curretObject){
        window.open(curretObject.invoice);   
    }
});
