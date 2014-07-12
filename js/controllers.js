'use strict';

/* Controllers */

angular.module('life.controllers',[]).


    controller('GameController',['$scope', '$timeout', function($scope, $timeout) {
        $scope.rows = $scope.cols = 60;
        $scope.grid = [];
        for( var y = 0; y < $scope.rows; y++ ) {
            $scope.grid[y] = [];
            for( var x = 0; x < $scope.rows; x++ ) {
                $scope.grid[y][x] = 0;
            }
        }
        
        // replace this with whatever seed you want
        $scope.grid[3][4] = $scope.grid[3][5] = $scope.grid[3][6] = $scope.grid[2][6] = $scope.grid[1][5] = 1;
        
        $scope.speed = 5;
        var ticktock = true;
        $scope.tick = function() {
            (function animloop(){
                $timeout(function() {
                    if(ticktock) {
                        $scope.$broadcast('tick');
                    } else {
                        $scope.$broadcast('tock');
                    }
                    ticktock = !ticktock;
                    requestAnimationFrame(animloop);
                }, $scope.speed);
            })();
         }
        
    }])



;