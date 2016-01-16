'use strict';

define(['app'], function (app) {

    var homeService = function ($http, $q) {
        var serviceBase = 'http://www.giantbomb.com/api/games/?api_key=e31a53182866e975585bd1891e5716df2864eebf&field_list=description,name&limit=1&sort=number_of_user_reviews:desc&platforms=94&filter=description:null',
            homeFactory = {};

        homeFactory.getPage = function (pageIndex) {
            return $http.get(serviceBase + '&offset=' + pageIndex).then(function (response) {
                $('#fountainG').toggle();
            //    $.each(response.results, function (i, result) {
            //        $('#games').append('<h2>Title</h2><h3>' + result.name + '</h3>' + result.description);
            //});
                return response.results;
            });
        };

        return homeFactory;
    };

    app.factory('homeService', ['$http', '$q', homeService]);
});