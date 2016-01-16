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
        'directives/filterDirective',
        'directives/resultTableDirective',
        'directives/gameCreateDirective',
        'directives/reviewCreateDirective',
        'directives/reviewsTableDirective',
        'directives/reviewsFilterDirective',
        'directives/webServiceDirective',
        'directives/mapDirective',
        'services/routeResolver',
        'services/config',
        'services/customersService',
        'services/modalService',
        'services/csrfService',
        'services/authService',
        'services/reviewsService',
        'services/homeService',
        'filters/nameCityStateFilter',
        'filters/nameProductFilter',
        'controllers/orders/orderChildController'
    ],
    function () {
        angular.bootstrap(document, ['customersApp']);
    });
