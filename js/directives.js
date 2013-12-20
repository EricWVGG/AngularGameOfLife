'use strict';

/* Directives */


angular.module('life.directives', [])


  .directive('dude', ['$timeout', function($timeout) {
      return {
          restrict: 'A',
          scope: {grid: '='},
          link: function(scope, element, attributes) {
              var x = scope.$parent.$index;
              var y = scope.$parent.$parent.$index;
              var count;
              scope.state = 0;
              var tick = function() {
                  count = 0;
                  for( var i = (y-1); i < y+2; i++ ) {
                      if(i < 0 || i >= scope.grid.length) continue; // off the grid
                      for( var ii = (x-1); ii < x+2; ii++ ) {
                          if( 
                            ii < 0 || ii >= scope.grid[i].length // off the grid
                            || i == y && ii == x // self
                          ) continue;
                          if( scope.grid[i][ii] > 0 ) count++;
                      }
                  }
                  $timeout(function() {
                      if( scope.grid[y][x] > 0 && count < 2 ) scope.grid[y][x] = -1;
                      else if( scope.grid[y][x] > 0 && ( count == 2 || count == 3 ) ) scope.grid[y][x] = 1;
                      else if( scope.grid[y][x] > 0 && ( count > 3 ) ) scope.grid[y][x] = -1;
                      else if( scope.grid[y][x] < 1 && ( count == 3 ) ) scope.grid[y][x] = 1;
                      else scope.grid[y][x] = 0;
                      $timeout(function() {
                        tick();
                      }, .01);
                  }, .01);
              }
              var running = scope.$on('tick', function() {
                  tick();
                  running(); // deregister listener
              });
          }
      }
  }])
  

;
