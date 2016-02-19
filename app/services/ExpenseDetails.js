myApp.factory('ExpenseDetailsService' ,['$http' , '$rootScope' , function($http ,$q, $rootScope){
    return{
        // fetchExpenseDetails: function() {
        //     return $http.get('app/json/expense_details.json')
        //             .then(
        //                     function(response){
        //                         return response.data;
        //                     },
        //                
        //             );
        // }
    }
}]);
