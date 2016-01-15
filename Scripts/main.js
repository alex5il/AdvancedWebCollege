require.config({
    baseUrl: '/app',
    urlArgs: 'v=1.0'
});

require(
    [
        'animations/listAnimations',
        'app',
        'directives/wcUnique',
        'directives/wcOverlay',
        'services/routeResolver',
        'services/config',
        'services/customersService',
        'services/modalService',
        'services/csrfService',
        'services/authService',
        'filters/nameCityStateFilter',
        'filters/nameProductFilter',
        'controllers/navbarController',
        'controllers/orders/orderChildController'
    ],
    function () {
        angular.bootstrap(document, ['customersApp']);
    });
