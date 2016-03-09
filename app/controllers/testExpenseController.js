expenseManagementApp.controller('testExpenseController', function($scope, $state, $rootScope, $http, $parse, $timeout){
	$http.get('app/json/expense_details.json').success(function(response) {
	    $rootScope.user1=response.user1[0].name;
	    $rootScope.user2=response.user2[0].name;
    })
   
	$scope.showAddTestExpense = true;
	$scope.reimburse = function(modelName) {
		$rootScope.modelName = modelName;
		$('.shadow-div').addClass('display_block');
        $scope.showAddTestExpense = $scope.showAddTestExpense ? false : true;
	};
	$scope.submit_reimburse = function() {
		var modelParsed = $parse($rootScope.modelName);
		modelParsed.assign($scope, $scope.amount);
		$timeout(function(){
			$scope.$apply();
		});
		$scope.amount = "";
		$scope.showAddTestExpense = $scope.showAddTestExpense ? false : true;
		$('.shadow-div').removeClass('display_block');
	};
	$scope.cancel_reimburse = function() {
		$scope.showAddTestExpense = true;
		$('.shadow-div').removeClass('display_block');
	};	
});
