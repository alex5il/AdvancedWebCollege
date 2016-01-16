'use strict';

define(['app', 'services/gamesService'], function (app) {

    var pieChartDirective = function (gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/pieChart.html",
            scope: {
                data: "="
            },
            link: function (scope, element, attrs) {
                var badReview = 20;
                var goodReview = 30;
                var greatReview = 10;

                var pie = new d3pie("myPie", {
                    header: {
                        title: {
                            text: "Game reviews:"
                        }
                    },
                    data: {
                        content: [
                            { label: "Bad", value: +badReview, color: "#bf0000" },
                            { label: "Good", value: +goodReview, color: "#CC6633" },
                            { label: "Great", value: +greatReview, color: "#2B7558" },
                        ]
                    }, size: {
                        canvasHeight: 350,
                        canvasWidth: 350,
                        pieInnerRadius: 12,
                        pieOuterRadius: null
                    }
                });
            }
        }
    };

    app.directive('pieChartDirective', ['gamesService', pieChartDirective]);
});