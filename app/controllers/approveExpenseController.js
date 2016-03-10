expenseManagementApp.controller('approveExpenseController', function($scope, $state, $http, $rootScope){
	$scope.checkbox = [];
	$scope.notePopup = true;
	$scope.approve_check = function(index, event) {
		if ($scope.checkbox[index] == true) {
			$rootScope.fullData[index].status = 1;
		}
		else{
			$rootScope.fullData[index].status = 0;	
		}
	}
	$scope.popup = function(index) {
		debugger;
		$('.overlay').addClass('display_block');
		$scope.notePopup = $scope.notePopup ? false : true;
		
	}
	$scope.popupClose = function() {
		$('.overlay').removeClass('display_block');
		$scope.notePopup = $scope.notePopup ? false : true;
	}
	$scope.submitNote = function(index) {
		$scope.fullData[index].note = $scope.noteModel;
		debugger
		console.log($scope.fullData[index].note);
		$('.overlay').removeClass('display_block');
		$scope.notePopup = $scope.notePopup ? false : true;
	}
	$scope.openURL = function(curretObject){
        window.open(curretObject.invoice);   
    }
});
