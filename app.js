var expenseManagementApp = angular.module('expenseManagementApp', ['ui.router']);
expenseManagementApp.controller('intialiseController', function($scope, $http, $rootScope, ExpenseDetailsService){
	

		$rootScope.fullData = [];
        ExpenseDetailsService.fetchUserDetails().then(function(response) {
            console.log(response);
            debugger;
            
            $rootScope.total=0;
            $rootScope.total2=0;
      
            for (var i = 0;i < response.user2.length;  i++) {
                $rootScope.fullData.push(response.user2[i]);
            };
            for (var i = 0;i < response.user1.length;  i++) {
                $rootScope.fullData.push(response.user1[i]);
            };
        })
	});