'use strict';

define(['app', 'services/customersService', 'services/reviewsService'], function (app) {

    var reviewCreateDirective = function (customersService, reviewsService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/reviewCreate.html",
            scope: {},
            link: function (scope, element, attrs) {
                scope.createReview = function (review) {
                    reviewsService.insertReview(review);
                }
            }
        }
    };

    app.directive('reviewCreateDirective', ['customersService', 'reviewsService', reviewCreateDirective]);
});