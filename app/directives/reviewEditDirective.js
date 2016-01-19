/**
 * Created by thecr_000 on 19/01/2016.
 */
'use strict';

define(['app', 'services/reviewsService', 'services/gamesService'], function (app) {

    var reviewEditDirective = function (reviewsService, gamesService, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/reviewCreate.html",
            scope: {
                review: '=',
                realreview: '='
            },
            link: function (scope) {
                scope.edit = 'Edit';
                scope.page = {pageNumber : 1, itemsPerPage: 5};

                gamesService.filteredIndex([], scope.page).then(function(res){
                    scope.games = res;
                    console.log(scope.games);
                });

                scope.createReview = function (review) {
                    reviewsService.updateReview(review);
                    scope.realreview = review;
                }
            }
        }
    };

    app.directive('reviewEditDirective', ['reviewsService', 'gamesService', '$rootScope',reviewEditDirective]);
});