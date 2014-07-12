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
        
        $scope.patterns = {
        
            block : [
                [0, 1], [1, 1],
                [0, 0], [1, 0]
            ],
            
            beehive : [
                [1, 2], [2, 2],
                [0, 1], [3, 1],
                [1, 0], [2, 0],
            ],
            
            leaf : [
                [1, 3], [2, 3],
                [0, 2], [3, 2],
                [1, 1], [3, 1],
                [2, 0],
            ],
            
            boat : [
                [0, 2], [1, 2],
                [0, 1], [2, 1],
                [1, 0],
            ],
            
            blinker : [
                [1, 2],    
                [1, 1],    
                [1, 0],
            ],
            
            toad : [
                [1, 2], [2, 2], [3, 2],
                [0, 1], [1, 1], [2, 1],
            ],
            
            beacon : [
                [0, 3], [1, 3],
                [0, 2],
                [3, 1],
                [2, 0], [3, 0],    
            ],
            
            pulsar_leaf : [
                [2, 5], [3, 5], [4, 5],
                [0, 3], [5, 3],
                [0, 2], [5, 2],
                [0, 1], [5, 1],
                [2, 0], [3, 0], [4, 0],
            ],
            
            glider : [
                [0, 2],
                [1, 1], [2, 1],
                [0, 0], [1, 0]
            ],
            
            lwss : [
                [1, 3], [2, 3],
                [0, 2], [1, 2], [2, 2], [3, 2],
                [0, 1], [1, 1], [3, 1], [4, 1],
                [2, 0], [3, 0],
            ],
            
            r_pentomino : [
                [1, 2], [2, 2],
                [0, 1], [1, 1],
                [1, 0]
            ],
            
            diehard : [
                [6, 2],
                [0, 1], [1, 1],
                [1, 0], [5, 0], [6, 0], [7, 0],
            ],
            
            acorn : [
                [1, 2],
                [3, 1],
                [0, 0], [1, 0], [4, 0], [5, 0], [6, 0],
            ],
        
            gosper_gun : [
                [24, 8],
                [22, 7], [24, 7],
                [12, 6], [13, 6], [20, 6], [21, 6], [34, 6], [35, 6],
                [11, 5], [15, 5], [20, 5], [21, 5], [34, 5], [35, 5],
                [0, 4], [1, 4], [10, 4], [16, 4], [20, 4], [21, 4],
                [0, 3], [1, 3], [10, 3], [14, 3], [16, 3], [17, 3], [22, 3], [24, 3],
                [10, 2], [16, 2], [24, 2],
                [11, 1], [15, 1],
                [12, 0], [13, 0]
            ]
        
        }
        
        $scope.pattern = 'gosper_gun';

        

        for( var i = 0; i < $scope.patterns[$scope.pattern].length; i++ ) {
            var x = $scope.patterns[$scope.pattern][i][0] + 10;
            var y = $scope.patterns[$scope.pattern][i][1] + 20;
            $scope.grid[y][x] = 1;
        }
        
        
        
        
        
        $scope.speed = 1;
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