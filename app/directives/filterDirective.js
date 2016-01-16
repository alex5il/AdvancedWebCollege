'use strict';

define(['app', 'services/reviewsService', 'services/gamesService'], function (app) {

    var filterDirective = function (reviewsService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/filter.html",
            scope: {
                filters : "=",
                page: "="
            },
            link: function (scope, element, attrs) {
                scope.inputFilters = {};

                var services = {};
                services['catalog'] = gamesService;
                services['reviews'] = reviewsService;

                scope.filterCatalog = function () {
                    // Get data by filter
                    console.log(scope.inputFilters);
                    console.log(scope.page);
                    //scope.filters.result = services[scope.filters.type].filteredIndex(itemToFilter);
                    scope.filters.result = [{id:'1', gameName: 'fallout', gameDesc:'asdasdad', genre:'rpg', cost:'255', score:'77'},
                        {id:'2', gameName: 'Crysis', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'1', gameName: 'fallout', gameDesc:'asdasdad', genre:'rpg', cost:'255', score:'77'},
                        {id:'2', gameName: 'Crysis', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'1', gameName: 'fallout', gameDesc:'asdasdad', genre:'rpg', cost:'255', score:'77'},
                        {id:'2', gameName: 'Crysis', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'}];
                };

                scope.$watch('page.pageNumber', function(newVal, oldVal){
                    if(newVal !== oldVal) {
                        scope.filterCatalog();
                    }
                });

                scope.filterCatalog();
            }
        }
    };

    app.directive('filterDirective', ['reviewsService', 'gamesService', filterDirective]);
});