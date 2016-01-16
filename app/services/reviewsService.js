'use strict';

define (['app'], function (app){

    var reviewsService = function ($http, $q) {
        var serviceBase = '/api/dataservice/',
            review = null,
            reviewsFactory = {};

        reviewsFactory.getReviews = function (pageIndex, pageSize) {
            return $http.get(serviceBase + 'reviews').then(function (response){
                var reviews = response.data;

                return {
                    totalRecords: parseInt(response.headers('X-InlineCount')),
                    results: reviews
                };
            });
        };

        reviewsFactory.filteredIndex = function (review) {
            return $http.get(serviceBase + 'byFilters/', {
                params: {
                    gameName: review.gameName,
                    score: review.score
                }
            }).then(function (results) {
                review.id = results.data.id;
                return results.data;
            });
        };

        reviewsFactory.insertReview = function (review) {
            return $http.post(serviceBase + 'PostReview', review).then(function (results){
                review.id = results.data.id;
                return results.data;
            });
        };

        reviewsFactory.updateReview = function (review) {
            return $http.put(serviceBase + 'PutReview/' + game.id, game).then(function (status){
                return status.data;
            });
        };

        reviewsFactory.deleteReview = function (id) {
            return $http.delete(serviceBase + 'deleteReview/' + id).then(function (status){
                return status.data;
            });
        };

        reviewsFactory.getReview = function (id) {
            return $http.get(serviceBase + 'Review/' + id).then(function (results){
                return results.data;
            });
        };

        return reviewsFactory;

    };

    app.factory('reviewsService', ['$http', '$q', reviewsService]);

});
