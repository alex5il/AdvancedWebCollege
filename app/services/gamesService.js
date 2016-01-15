﻿'use strict';

define(['app'], function (app) {

    var gamesService = function ($http, $q) {
        var serviceBase = '/api/dataservice/',
            games = null,
            gamesFactory = {};

        gamesFactory.getgames = function (pageIndex, pageSize) {
            return $http.get(serviceBase + Games).then(function (response) {
                var custs = response.data;
                extendgames(custs);
                return {
                    totalRecords: parseInt(response.headers('X-InlineCount')),
                    results: custs
                };
            });
        };


        gamesFactory.insertGame = function (game) {
            return $http.post(serviceBase + 'PostGame', game).then(function (results) {
                game.id = results.data.id;
                return results.data;
            });
        };

        gamesFactory.updateGame = function (game) {
            return $http.put(serviceBase + 'PutGame/' + game.id, game).then(function (status) {
                return status.data;
            });
        };

        gamesFactory.deleteGame = function (id) {
            return $http.delete(serviceBase + 'deleteGame/' + id).then(function (status) {
                return status.data;
            });
        };

        gamesFactory.getGame = function (id) {
            //then does not unwrap data so must go through .data property
            //success unwraps data automatically (no need to call .data property)
            return $http.get(serviceBase + 'Game/' + id).then(function (results) {
                return results.data;
            });
        };

        return gamesFactory;

    };

    app.factory('gamesService', ['$http', '$q', gamesService]);

});