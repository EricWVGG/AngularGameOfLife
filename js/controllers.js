'use strict';

/* Controllers */

angular.module('life.controllers',[]).


    controller('GameController',['$scope', '$timeout', function($scope, $timeout) {
        $scope.pause = false;
        $scope.rows = $scope.cols = 60;
        
        // http://www.bitstorm.org/gameoflife/lexicon/
        $scope.patterns = [
            {name: 'block',     tiles:[ [0, 1], [1, 1], [0, 0], [1, 0] ]},
            {name: 'beehive',   tiles:[ [1, 2], [2, 2], [0, 1], [3, 1], [1, 0], [2, 0] ]},
            {name: 'leaf',      tiles:[ [1, 3], [2, 3], [0, 2], [3, 2], [1, 1], [3, 1], [2, 0] ]},
            {name: 'boat',      tiles:[ [0, 2], [1, 2], [0, 1], [2, 1], [1, 0] ]},
            {name: 'blinker',   tiles:[ [1, 2], [1, 1], [1, 0] ]},
            {name: 'toad',      tiles:[ [1, 2], [2, 2], [3, 2], [0, 1], [1, 1], [2, 1] ]},
            {name: 'beacon',    tiles:[ [0, 3], [1, 3], [0, 2], [3, 1], [2, 0], [3, 0] ]},
            {name: 'pulsar_leaf',tiles:[ [2, 5], [3, 5], [4, 5], [0, 3], [5, 3], [0, 2], [5, 2], [0, 1], [5, 1], [2, 0], [3, 0], [4, 0] ]},
            {name: 'glider',    tiles:[ [0, 2], [1, 1], [2, 1], [0, 0], [1, 0] ]},
            {name: 'lwss',      tiles:[ [1, 3], [2, 3], [0, 2], [1, 2], [2, 2], [3, 2], [0, 1], [1, 1], [3, 1], [4, 1], [2, 0], [3, 0] ]},
            {name: 'r_pentomino', tiles:[ [1, 2], [2, 2], [0, 1], [1, 1], [1, 0] ]},
            {name: 'diehard',   tiles:[ [6, 2], [0, 1], [1, 1], [1, 0], [5, 0], [6, 0], [7, 0] ]},
            {name: 'acorn',     tiles:[ [1, 2], [3, 1], [0, 0], [1, 0], [4, 0], [5, 0], [6, 0] ]},
            {name: 'queen bee shuttle', tiles:[ [9,0], [7,1], [9,1], [6,2], [8,2], [0,3], [1,3], [5,3], [8,3], [0,4], [1,4], [6,4], [8,4], [7,5], [9,5], [20,5], [21,5], [9,6], [20,6], [22,6], [22,7], [22,8], [23,8] ]},
            {name: 'gosper_gun',tiles:[ [24, 8], [22, 7], [24, 7], [12, 6], [13, 6], [20, 6], [21, 6], [34, 6], [35, 6], [11, 5], [15, 5], [20, 5], [21, 5], [34, 5], [35, 5], [0, 4], [1, 4], [10, 4], [16, 4], [20, 4], [21, 4], [0, 3], [1, 3], [10, 3], [14, 3], [16, 3], [17, 3], [22, 3], [24, 3], [10, 2], [16, 2], [24, 2], [11, 1], [15, 1], [12, 0], [13, 0] ]}
        ];
        $scope.pattern = $scope.patterns[$scope.patterns.length-1];
        
        $scope.reset = function() {
            $scope.pause = true;
            $scope.generations = 0;
            $scope.grid = [];
            for( var y = 0; y < $scope.rows; y++ ) {
                $scope.grid[y] = [];
                for( var x = 0; x < $scope.rows; x++ ) {
                    $scope.grid[y][x] = 0;
                }
            }
            for( var i = 0; i < $scope.pattern.tiles.length; i++ ) {
                var x = $scope.pattern.tiles[i][0] + 10;
                var y = $scope.pattern.tiles[i][1] + 20;
                $scope.grid[y][x] = 1;
            }
            $timeout(function() {
                $scope.pause = false;
            }, 1500);
        }
        $scope.reset();
        
        $scope.speed = 1;
        var ticktock = true;
        (function animloop(){
            $timeout(function() {
                if($scope.pause) {
                    ticktock = true;
                }
                else if(!$scope.pause) {
                    if(ticktock) {
                        $scope.$broadcast('tick');
                    } else {
                        $scope.$broadcast('tock');
                        $scope.generations++;
                    }
                    ticktock = !ticktock;
                }
                requestAnimationFrame(animloop);
            }, $scope.speed);
        })();
        
    }])



;