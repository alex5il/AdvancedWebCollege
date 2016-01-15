'use strict';

define(['app'], function (app) {

    var authService = function ($http) {
        var serviceBase = '/api/dataservice/',
            authFactory = {};

        authFactory.login = function (user) {
            return $http.post(serviceBase + 'login', user).then(function (results) {
                return results.data;
            });
        };

        authFactory.register = function (user) {
            return $http.post(serviceBase + 'signup', user).then(function (results) {
                user.id = results.data.id;
                return results.data;
            });
        };

        return authFactory;
    };

    app.factory('authService', ['$http',  authService]);
});