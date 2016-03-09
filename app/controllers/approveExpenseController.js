expenseManagementApp.controller('approveExpenseController', function($scope, $state, $http, $rootScope){
	$scope.approve_check = function(index, name) {
		$rootScope.fullData[index].status = 1;
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
});
