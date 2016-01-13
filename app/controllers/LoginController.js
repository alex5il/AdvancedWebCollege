'use strict';

define(['app', 'services/csrfService'], function (app) {

    var loginController = function ($scope, csrfService) {
        $scope.tokenValue = csrfService;
    };

    app.register.controller('LoginController', ['$scope', 'csrfService', loginController]);

});