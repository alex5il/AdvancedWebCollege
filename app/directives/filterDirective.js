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
                        {id:'2', gameName: 'Crysis1', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'3', gameName: 'Crysis2', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'4', gameName: 'Crysis3', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'5', gameName: 'Crysis4', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'6', gameName: 'Crysis5', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'7', gameName: 'Crysis6', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'8', gameName: 'Crysis7', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'9', gameName: 'Crysis8', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'10', gameName: 'Crysis9', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id: '11', gameName: 'Crysis10', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'},
                        {id:'12', gameName: 'Crysis11', gameDesc:'asas asas asas', genre:'shooter', cost:'150', score:'44'}];
                }

                scope.filterReviews = function (itemToFilter) {
                    scope.filters.result = [{id:'1', gameId:'Skyrim', title:'WOW', content:'Amazing game indeed', score:'100', reviewDate:'16/01/2016'}];
                }

                switch(scope.filters.type) {
                    case 'catalog':
                        scope.filterCatalog();
                        break;
                    case 'reviews':
                        scope.filterReviews();
                        break;
                }
            }
        }
    };

    app.directive('filterDirective', ['reviewsService', 'gamesService', filterDirective]);
});