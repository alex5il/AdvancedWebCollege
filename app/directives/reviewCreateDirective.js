'use strict';

define(['app', 'services/gamesService', 'services/reviewsService'], function (app) {

    var reviewCreateDirective = function (gamesService, reviewsService, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/reviewCreate.html",
            scope: {
                game: '=',
                filters: '='
            },

            link: function (scope, element, attrs) {
                scope.page = {pageNumber : 1, itemsPerPage: 5};

                scope.getGames = function(){
                    gamesService.filteredIndex([], scope.page).then(function(res){
                        scope.games = res;
                        console.log(scope.games);

                        if (scope.game != undefined) {
                            scope.games = scope.games.filter(function (game) {
                                return game.gameName == scope.game.gameName;
                            });

                            scope.selectDisabled = true;
                        }
                        scope.review = {};
                        scope.review.gameName = scope.games[0].gameName;
                    });
                };

                scope.getGames();

                scope.createReview = function (review) {
                    reviewsService.insertReview(review);
                    if (scope.filters != undefined) {
                        reviewsService.filteredIndex([]).then(function (res) {
                            scope.filters.result = res;
                        });
                    }

                }
            }
        }
    };

    app.directive('reviewCreateDirective', ['gamesService', 'reviewsService', '$rootScope', reviewCreateDirective]);
});