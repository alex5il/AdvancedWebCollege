'use strict';

define(['app', 'services/reviewsService', 'services/gamesService'], function (app) {

    var filterDirective = function (reviewsService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/filter.html",
            scope: {
                filters : "="
            },
            link: function (scope, element, attrs) {
                scope.inputFilters = {};

                var services = {};
                services['catalog'] = gamesService;
                services['reviews'] = reviewsService;

                scope.filterCatalog = function (itemToFilter) {
                    // Get data by filter
                    //scope.filters.result = services[scope.filters.type].filteredIndex(itemToFilter);
                    scope.filters.result = [{id:'1', gameName: 'fallout', gameDesc:'asdasdad', genre:'rpg', cost:'255', score:'77'},
                        {id:'2', gameName: 'Crysis', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'}];
                }

                scope.filterCatalog();
            }
        }
    };

    app.directive('filterDirective', ['reviewsService', 'gamesService', filterDirective]);
});