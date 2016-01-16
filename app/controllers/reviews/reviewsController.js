'use strict';

define(['app'], function (app) {

    var reviewsController = function ($scope, $location, $filter, reviewsService, modalService) {
        $scope.filters = {};
        $scope.filters.result = {};
        $scope.filters.type = "reviews";

        $scope.page = {pageNumber : 1, itemsPerPage: 5};
    };

    app.register.controller('ReviewsController', ['$scope', reviewsController]);

});