'use strict';

define(['app'], function (app) {

    var contactController = function ($scope) {
        var revenueChart = new FusionCharts({
            "type": "column2d",
            "renderAt": "chartContainer",
            "width": "500",
            "height": "300",
            "dataFormat": "json",
            "dataSource": {
                "chart": {
                    "caption": "Monthly revenue for last year",
                    "subCaption": "GiGa Games Sells",
                    "xAxisName": "Month",
                    "yAxisName": "Revenues (In USD)",
                    "theme": "fint"
                },
                "data": [
                    {
                        "label": "Jan",
                        "value": "420000"
                    },
                    {
                        "label": "Feb",
                        "value": "810000"
                    },
                    {
                        "label": "Mar",
                        "value": "720000"
                    },
                    {
                        "label": "Apr",
                        "value": "550000"
                    },
                    {
                        "label": "May",
                        "value": "910000"
                    },
                    {
                        "label": "Jun",
                        "value": "510000"
                    },
                    {
                        "label": "Jul",
                        "value": "680000"
                    },
                    {
                        "label": "Aug",
                        "value": "620000"
                    },
                    {
                        "label": "Sep",
                        "value": "610000"
                    },
                    {
                        "label": "Oct",
                        "value": "490000"
                    },
                    {
                        "label": "Nov",
                        "value": "900000"
                    },
                    {
                        "label": "Dec",
                        "value": "730000"
                    }
                ]
            }
        });

        revenueChart.render();
    };

    app.register.controller('ContactController', ['$scope', contactController]);

});