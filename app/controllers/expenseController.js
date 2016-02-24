myApp.controller('expenseController', function($scope, $state, $http, ExpenseDetailsService, $rootScope){
    $scope.showAddExpense = true;
    $scope.Show_Add_form = function() {
        $scope.date="";
        $scope.purpose="";
        $scope.pm="";
        $scope.rate="";
        $('.add_error').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
    $scope.SubmitAdd = function() {
        if ($scope.date == "" || $scope.purpose =="" || $scope.pm =="" || $scope.rate == "") {
            $('.add_error').show();
            $('.add_error').html('Enter all details..');
            return false;
        } else {
            if( $rootScope.user == "lavya") {
                $rootScope.total=0;
                $rootScope.lavyaDetails.push({ 'date':$scope.date, 'purpose': $scope.purpose, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user});
                for (var i = 0; i<$rootScope.lavyaDetails.length; i++) {
                    $rootScope.total+= $rootScope.lavyaDetails[i].rate;
                }
                console.log($rootScope.lavyaDetails);
            }
            else {
                $rootScope.total2=0;
                $rootScope.vishnuDetails.push({ 'date':$scope.date, 'purpose': $scope.purpose, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user});
                for (var i = 0; i<$rootScope.vishnuDetails.length; i++) {
                    $rootScope.total2+= $rootScope.vishnuDetails[i].rate;
                }
            }

            $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user});
      
            $('.shadow-div').removeClass('display_block');
            $scope.showAddExpense = $scope.showAddExpense ? false : true;
        }
    }
    $scope.HideAdd = function() {
        $('.shadow-div').removeClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
});