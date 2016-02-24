var myApp = angular.module('myApp',  ['ui.router']);
myApp.controller('intialiseController', function($scope, $http, $rootScope){
	$http.get('app/json/expense_details.json').success(function(response){

		$rootScope.fullData = [];
        $rootScope.lavyaDetails=[];
        $rootScope.vishnuDetails=[];
        $rootScope.lavyaDetails = response.user1;
console.log(response.user1);
        $rootScope.vishnuDetails = response.user2;
        $rootScope.total=0;
        $rootScope.total2=0;
        // $rootScope.fullData.push(response.user1[0]);debugger;
        // $rootScope.fullData.push(response.user2[0]);
        
        for (var i = 0;i < response.user2.length;  i++) {
             $rootScope.fullData.push(response.user2[i]);
        };
        for (var i = 0;i < response.user1.length;  i++) {
             $rootScope.fullData.push(response.user1[i]);
        };
        console.log($rootScope.fullData);
     //    for (var i = 0;i < $rootScope.fullData.length;  i++) {
     //    	// if ($rootScope.fullData[i].name == 'lavya') {
     //    	// 	$rootScope.total += $rootScope.fullData[i].rate;
     //    	// } else if ($rootScope.fullData[i].name == 'vishnu') {
     //    	// 	$rootScope.total2 += $rootScope.fullData[i].rate;
     //    	// };
	        
    	// }
	})
});