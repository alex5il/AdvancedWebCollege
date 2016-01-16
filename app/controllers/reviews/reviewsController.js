'use strict';

define(['app'], function (app) {

    var reviewsController = function ($scope, $location, $filter, reviewsService, modalService) {

        $scope.reviews = {};
        $scope.filteredReviews = [];
        $scope.filteredCount = 0;
        $scope.orderby = 'reviewDate';
        $scope.reverse = false;

        // Paging
        $scope.totalRecords = 0;
        $scope.pageSize = 10;
        $scope.currentPage = 1;

        init();

        $scope.pageChanged = function (page){
          $scope.currentPage = page;
            getReviewsSummary();
        };

        function getReviewsSummary() {
            reviewsService.getReviews($scope.currentPage - 1, $scope.pageSize)
            .then(function(data) {
                $scope.totalRecords = data.totalRecords;
                $scope.customers = data.results;
                filterReviews('');
            }, function (error){
                alert(error.message);
            });
        };

        function  filterReviews(filterText){
            $scope.filteredReviews = $filter("");
        }

    };

    app.register.controller('ReviewsController', ['$scope', reviewsController]);

});