'use strict';

define(['app'], function (app) {

    var reviewsController = function ($scope, $location, $filter, reviewsService, modalService) {

        $scope.reviews = {};
        $scope.filteredReviews = [];
        $scope.filteredCount = 0;
        $scope.orderby = 'reviewDate';
        $scope.reverse = false;

        $scope.filters = {};
        $scope.filters.result = {};
        $scope.filters.type = "reviews";
    };

    app.register.controller('ReviewsController', ['$scope', reviewsController]);

});