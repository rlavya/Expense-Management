myApp.controller('loginController', function($scope, $location){
    $scope.user = {};
    $scope.submitForm = function() {
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
                    $location.path('/expense').replace();
                }
                else if ($scope.email == "test@qburst.com" && $scope.password == "test") {
                    $location.path('/testexpense').replace();
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
