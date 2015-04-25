'use strict';

angular.module('devload')
  .controller('MainCtrl', function ($scope, tabletopData, $window) {
    var data = tabletopData[0].load.elements[0]; // more defensive programming needed
    $scope.charts = [];
    // var colorScale = d3.scale.linear()
    //   .domain([0, 100, 110])
    //   .range(['green', 'red', 'darkred']);
      
    angular.forEach(data, function(v, i){
      var config = {
        data: {
          columns: [
            [i, v]
          ],
          type: 'gauge'
        },
        gauge: {
          max: 110,
          label: {
            format: function (value, ratio) {
              return value + '%';
            }
          },
          width: 20
        },
        color: {
          pattern: ['darkgreen', 'lightgreen', 'yellow', 'red', 'darkred'], // the three color levels for the percentage values.
          threshold: {
            unit: 'value', // percentage is default
            max: 110, // 100 is default
            values: [50, 65, 85, 100]
          }
        }
      };
      $scope.charts.push(config);
    });
  });
