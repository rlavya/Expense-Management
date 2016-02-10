myApp.config(function($routeProvider,$locationProvider) {
$routeProvider
    .when('/', {
        controller : 'loginController',
        templateUrl: 'app/views/login.html',
    })
    .when('/expense', {
        controller : 'expenseController',
        templateUrl: 'app/views/expense.html',
    })
    .when('/testexpense', {
        controller : 'testExpenseController',
        templateUrl: 'app/views/testexpense.html',
    })
    .otherwise({redirectTo: '/'})
    $locationProvider.html5Mode(true);
});
