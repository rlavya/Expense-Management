expenseManagementApp.controller('approveExpenseController', function($scope, $state, $http, $rootScope){
	$scope.checkbox = [];
	$scope.notePopup = true;
	$scope.approve = [
		{val: 'Approve'}, 
		{val: 'Deny'}, 
		{val: 'More Details'}
	];
	$scope.approve_check = function(data, event) {
		$rootScope.approveindex = $rootScope.fullData.indexOf(data);
		if ($scope.approve.repeatSelect == ' Approve ') {
			$rootScope.fullData[$rootScope.approveindex].status = 1;
		}
		else{
			$rootScope.fullData[$rootScope.approveindex].status = 0;	
		}
	}
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
        $rootScope.singleData = $rootScope.fullData[$rootScope.a];
    }
});