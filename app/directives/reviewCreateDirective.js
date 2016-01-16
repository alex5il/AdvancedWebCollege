'use strict';

define(['app', 'services/gamesService', 'services/reviewsService'], function (app) {

    var reviewCreateDirective = function (gamesService, reviewsService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/reviewCreate.html",
            scope: {},

            link: function (scope, element, attrs) {
                scope.page = {pageNumber : 1, itemsPerPage: 5};

                scope.getGames = function(){
                    gamesService.filteredIndex([], scope.page).then(function(res){
                        scope.games = res;
                        console.log(scope.games);
                    });
                };

                scope.getGames();

                scope.createReview = function (review) {
                    reviewsService.insertReview(review);
                }
            }
        }
    };

    app.directive('reviewCreateDirective', ['gamesService', 'reviewsService', reviewCreateDirective]);
});