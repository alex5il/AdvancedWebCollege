'use strict';

define(['app'], function (app) {

    var authService = function ($http, $q, $rootScope) {
        var serviceBase = '/api/',
            authFactory = {};

        var deferred = $q.defer();

        // create user variable
        var user = null;

        authFactory.login = function (user) {
            // create a new instance of deferred
            var deferred = $q.defer();

            // send a post request to the server
            $http.post(serviceBase + 'login', user)
                // handle success
                .success(function (data, status) {
                    if(status === 200 && data){
                        $rootScope.loggedInUser = user;
                        user = true;
                        deferred.resolve();
                    } else {
                        $rootScope.loggedInUser = null;
                        user = false;
                        deferred.reject();
                    }
                })
                // handle error
                .error(function (data) {
                    user = false;
                    deferred.reject();
                });

            // return promise object
            return deferred.promise;
        };

        authFactory.isLoggedIn = function () {
            if(user) {
                return true;
            } else {
                return false;
            }
        };

        authFactory.logOut = function () {
            // create a new instance of deferred
            var deferred = $q.defer();

            // send a get request to the server
            $http.get(serviceBase + 'logout')
                // handle success
                .success(function (data) {
                    user = false;
                    deferred.resolve();
                })
                // handle error
                .error(function (data) {
                    user = false;
                    deferred.reject();
                });

            // return promise object
            return deferred.promise;

        };

        authFactory.getUserStatus = function () {
            return user;
        };

        authFactory.register = function (user) {
            // create a new instance of deferred
            var deferred = $q.defer();

            // send a post request to the server
            $http.post(serviceBase + 'register', user)
                // handle success
                .success(function (data, status) {
                    if(status === 200 && data){
                        deferred.resolve();
                    } else {
                        deferred.reject();
                    }
                })
                // handle error
                .error(function (data) {
                    deferred.reject();
                });

            // return promise object
            return deferred.promise;

        };

        return authFactory;
    };

    app.factory('authService', ['$http', '$q', '$rootScope',  authService]);
});