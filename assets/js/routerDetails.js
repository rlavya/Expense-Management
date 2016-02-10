myApp.config(function($routeProvider) {
$routeProvider
    .when('/', {
        controller : 'loginController',
        templateUrl: 'app/views/login.html',
    })
    .when('/expense', {
        controller : 'expenseController',
        templateUrl: 'app/views/expense.html',
    })
    .otherwise({redirectTo: '/'})
});
