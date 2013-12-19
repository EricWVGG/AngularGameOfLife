'use strict';

/* Controllers */

angular.module('life.controllers',[]).


  controller('GameController',['$scope',function($scope) {
      $scope.rows = $scope.cols = 20;
      $scope.grid = [];
      for( var y = 0; y < $scope.rows; y++ ) {
          $scope.grid[y] = [];
          for( var x = 0; x < $scope.rows; x++ ) {
              $scope.grid[y][x] = 0;
          }
      }
      
      // replace this with whatever seed you want
      $scope.grid[3][4] = $scope.grid[3][5] = $scope.grid[3][6] = $scope.grid[2][6] = $scope.grid[1][5] = 1;
      
      $scope.tick = function() {
          $scope.$broadcast('tick');
      }
      
  }])



;