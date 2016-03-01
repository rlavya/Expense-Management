myApp.controller('expenseController', function($scope, $state, $http, ExpenseDetailsService, $rootScope){
    $scope.showAddExpense = true;

    $scope.Show_Add_form = function() {
        $scope.date="";
        $scope.purpose="";
        $scope.pm="";
        $scope.rate="";
        $( "#datepicker" ).datepicker({ dateFormat: 'dd-mm-yy' });
        $('.add_error').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
    $scope.SubmitAdd = function() {
        $scope.date = $('#datepicker').val();
        if ($scope.date == "" || $scope.purpose =="" || $scope.pm =="" || $scope.rate == "") {
            $('.add_error').show();
            $('.add_error').html('Enter all details..');
            return false;
        } else {
            if( $rootScope.user == "lavya") {
                if ($scope.pm== 'Nishin') {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 0});
                }else {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 1});
                }
                debugger;
            }else if( $rootScope.user == "vishnu") {
                if ($scope.pm== 'Nishin') {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 0});
                }else {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 1});
                }
            }
            $('.shadow-div').removeClass('display_block');
            $scope.showAddExpense = $scope.showAddExpense ? false : true;
        }
    }
    $scope.HideAdd = function() {
        $('.shadow-div').removeClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
});