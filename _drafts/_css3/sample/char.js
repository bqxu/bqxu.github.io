'use strict';
var radian4angle = function(angle) {
  return angle * Math.PI / 180;
};
var angleXY = function(angle, r) {
  r = r || 1;
  return {
    x: parseFloat(Math.sin(radian4angle(angle)) * r).toFixed(4),
    y: parseFloat(Math.cos(radian4angle(angle)) * r).toFixed(4)
  }
};
var arc = function() {
  return "RX,RY,XROTATION,FLAG1,FLAG2,X,Y";
}
var cahrA = function() {
  var paths = [];
  var path1 = [];
  path1.push('M -10,10');
  path1.push('L 0,-10');
  path1.push('L 10,10');
  paths.push(path1.join(' '));
  var path2 = [];
  path2.push('M -5,0');
  path2.push('L 5,0');
  paths.push(path2.join(' '))
  return paths;
};
var cahrB = function() {
  var paths = [];
  var path1 = [];
  path1.push('M -10,-10');
  path1.push('L 0,-10');
  path1.push("A -5,-5 0 1 0 0,0");
  path1.push("A 5,5 0 1 0 0,10");
  path1.push("L 10,-10");
  paths.push(path1.join(' '));
  var path2 = [];
  path2.push('M -10,-10');
  path2.push('L -10,10');
  paths.push(path2.join(' '));
  return paths;
};


var cahrC = function() {
  var paths = [];
  var path1 = [];
  path1.push('M 10,-5');
  path1.push("A 5,5 0 1 0 -10,-5");
  path1.push("L -10,5");
  path1.push("A 5,5 0 1 0 10,5");
  paths.push(path1.join(' '));
  return paths;
};



var cahrD = function() {
  var paths = [];
  var path1 = [];
  path1.push('M -10,10');
  path1.push("A 10,10 0 1 1 -10,10");
  paths.push(path1.join(' '));
  var path2 = [];
  path2.push('M -10,-10');
  path2.push('L -10,10');
  paths.push(path2.join(' '));
  return paths;
};




