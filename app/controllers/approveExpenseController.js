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
	// $scope.popup = function(data) {
	// 	console.log(data.note);
	// 	$('.overlay').addClass('display_block');
	// 	$scope.notePopup = $scope.notePopup ? false : true;
	// 	$scope.note = data.note;
		
	// }
	// $scope.popupClose = function() {
	// 	$('.overlay').removeClass('display_block');
	// 	$scope.notePopup = $scope.notePopup ? false : true;
	// }
	$scope.submitNote = function(index) {
		debugger
		$rootScope.fullData[index].note = $('#note').val();
		console.log($rootScope.fullData);
		$('.overlay').removeClass('display_block');
		$scope.notePopup = $scope.notePopup ? false : true;
	}
	$scope.openURL = function(curretObject){
        window.open(curretObject.invoice);   
    }
    $scope.test = function(data) {
        $rootScope.a = $rootScope.fullData.indexOf(data);
        $rootScope.singleData = $rootScope.fullData[$rootScope.a];debugger;
    }
});