expenseManagementApp.controller('loginController', function($scope, $location, $state, $rootScope, $http, ExpenseDetailsService){
    $scope.submitForm = function() {
        if ($scope.email == "" || $scope.password == "" || $scope.email == undefined || $scope.password == undefined) {
        
            $('#show_error').show();
            $('#show_error').html('Enter all details..');
            return false;
        } else {
            if($scope.email.indexOf('@') == -1) {
                $('#show_error').show();
                $('#show_error').text('Enter a valid email');
                return false;
            } else {
                if ($scope.email == "lavya@qburst.com" && $scope.password == "lavya") {
                    
                    $rootScope.user = 'lavya';
                    localStorage.setItem("name", "lavya");
                    $state.go('/expense');
                }
                else if ($scope.email == "vishnu@qburst.com" && $scope.password == "vishnu") {
                    $rootScope.user = 'vishnu';
                    localStorage.setItem("name", "vishnu");
                    $state.go('/expense');
                }
                else if ($scope.email == "test@qburst.com" && $scope.password == "test") {
                    $rootScope.total = 0;
                    $rootScope.total2 = 0;
                    for (var i = 0;i< $rootScope.fullData.length ; i ++) {
                        if ($rootScope.fullData[i].name == 'lavya') {
                            if ($rootScope.fullData[i].status == 1) {
                                $rootScope.total += $rootScope.fullData[i].rate;
                            }
                        }else if ($rootScope.fullData[i].name == 'vishnu') {
                            if ($rootScope.fullData[i].status == 1) {
                                $rootScope.total2 += $rootScope.fullData[i].rate;
                            }
                        };
                    };
                    $state.go('/testexpense');
                }
                else if ($scope.email == "nishin@qburst.com" && $scope.password == "nishin") {
                    $state.go('/approverexpense');
                }
                else {
                    $('#show_error').html('Enter correct details..');
                    $('#email').val("");
                    $('#password').val("");
                }
            }
        }
    };
});