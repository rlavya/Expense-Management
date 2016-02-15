myApp.controller('loginController', function($scope, $location, $state, $rootScope, $http){
    $scope.submitForm = function() {
        $http.get('app/json/expense_details.json').success(function(response){
        if ($scope.email == "" || $scope.password =="" || $scope.email == undefined || $scope.password == undefined) {
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
                    $rootScope.data = response.user1;
                    alert(response.user1[0].name);
                    $state.go('/expense');
                }
                else if ($scope.email == "vishnu@qburst.com" && $scope.password == "vishnu") {
                    $rootScope.data = response.user2;
                    alert(response.user2[0].name);
                    $state.go('/expense');
                }
                else if ($scope.email == "test@qburst.com" && $scope.password == "test") {
                    $state.go('/testexpense');
                }
                else {
                    $('#show_error').html('Enter correct details..');
                    $('#email').val("");
                    $('#password').val("");
                }
            }
        }
    });
    };
});
