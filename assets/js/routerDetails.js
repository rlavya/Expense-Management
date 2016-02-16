myApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
    .state('/', {
        url: "/",
        templateUrl: 'app/views/login.html',
        controller : 'loginController'
    })
    .state('/expense', {
        url: "/expense",
        templateUrl: 'app/views/expense.html',
        controller : 'expenseController'
    })
    .state('/testexpense', {
        url: "/testexpense",
        templateUrl: 'app/views/testexpense.html',
        controller : 'testExpenseController',
    })

    // $locationProvider.html5Mode(true);
});
