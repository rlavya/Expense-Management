expenseManagementApp.controller('expenseController', function($scope, $state, $http, ExpenseDetailsService, $rootScope, $timeout){
    $scope.showAddExpense = true;
    $scope.showAddForm = function() {
        $scope.date = "";
        $scope.purpose = "";
        $scope.pm = "";
        $scope.rate = "";
        $( "#datepicker" ).datepicker({ dateFormat: 'dd-mm-yy' });
        $('.add_error').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
    $scope.submitAdd = function() {
        $scope.invoice = 'No file chosen';
        $scope.date = $('#datepicker').val();
        if ($scope.date == "" || $scope.purpose ==" " || $scope.pm == "" || $scope.rate == "") {
            $('.add_error').show();
            $('.add_error').html('Enter all details..');
            return false;
        } else {
            if( $rootScope.user == "lavya") {
                if ($scope.pm== 'Nishin') {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 0, 'invoice' : $scope.invoice});
                }else {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 1, 'invoice' : $scope.invoice});
                }
            }else if( $rootScope.user == "vishnu") {
                if ($scope.pm== 'Nishin') {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 0, 'invoice' : $scope.invoice});
                }else {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 1, 'invoice' : $scope.invoice});
                }
            }
            $('.shadow-div').removeClass('display_block');
            $scope.showAddExpense = $scope.showAddExpense ? false : true;
        }
    }
    $scope.hideAdd = function() {
        $('.shadow-div').removeClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
    $scope.readURL = function( element, currentObj){
        if (element.files && element.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $scope.invoice = e.target.result;
                    // $timeout(function(){
                        $rootScope.$apply(function() {
                            currentObj.invoice = $scope.invoice;
                        });
                // });
            }
        reader.readAsDataURL(element.files[0]);
        }
    }
    $scope.openURL = function(curretObject){
        window.open(curretObject.invoice);   
    }
});