'use strict';

define(['app'], function (app) {

    var homeService = function ($http, $q) {

        var serviceBase = 'http://www.giantbomb.com/api/games/',
            homeFactory = {};

        function display(response) {
            // this callback will be called asynchronously
            // when the response is available
            $('#fountainG').toggle();
            //    $.each(response.results, function (i, result) {
            //        $('#games').append('<h2>Title</h2><h3>' + result.name + '</h3>' + result.description);
            //});
            console.log(response);
            return response.results;

        }

        homeFactory.getPage = function (pageIndex) {
            var url = "http://www.giantbomb.com/api/games/?api_key=e31a53182866e975585bd1891e5716df2864eebf&field_list=description,name&limit=1&sort=number_of_user_reviews:desc&platforms=94&filter=description:null&format=jsonp&offset=1&json_callback=display";
            //var url = 'https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero';
            $http.jsonp(url).
            success(function(data, status, headers, config) {
                //what do I do here?
                console.log(status);
                console.log(headers);
                console.log(config);
                console.log(data);
                data();
                //console.log(data);
            }).
            error(function(data, status, headers, config) {
                $scope.error = true;
            });




            //return $http({
            //    method: 'JSONP',
            //    url: serviceBase,
            //    params: {
            //        api_key: 'e31a53182866e975585bd1891e5716df2864eebf',
            //        field_list: 'description,name',
            //        limit: '1',
            //        sort: 'number_of_user_reviews:desc',
            //        platforms: '94',
            //        filter: 'description:null',
            //        format: 'jsonp',
            //        callback: 'display',
            //        offset: pageIndex
            //    },
            //}).then(function successCallback(response) {
            //    // this callback will be called asynchronously
            //    // when the response is available
            //    $('#fountainG').toggle();
            //    //    $.each(response.results, function (i, result) {
            //    //        $('#games').append('<h2>Title</h2><h3>' + result.name + '</h3>' + result.description);
            //    //});
            //    console.log(response);
            //    return response.results;
            //
            //}, function errorCallback(response) {
            //    // called asynchronously if an error occurs
            //    // or server returns response with an error status.
            //});
        };

        return homeFactory;
    };

    app.factory('homeService', ['$http', '$q', homeService]);
});