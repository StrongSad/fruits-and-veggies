/* setup your angular app here */
var app = angular.module("MyApp", []);
app.controller("HomeCtrl", ['$scope', function($scope) {
  $scope.myFruitsList = [];
  $scope.myVeggiesList = [];
  $scope.vegClasses=[]
  $scope.fruitClasses =[]
  $scope.fruitsAndVeggiesList = vegetables.concat(fruit);

  $scope.moveLeft = function(index, items) {
    $scope.myFruitsList.push($scope.fruitsAndVeggiesList[index]);
    $scope.fruitsAndVeggiesList.splice(index, 1)
    console.log(items);
    for( var i = 0; i < $scope.myFruitsList.length; i++) {
      console.log(fruit[i]);
      if(items === fruit[i]) {
        console.log("A match");
        return $scope.fruitClasses[i] = 'green' 
      } else if(items !== fruit[i]) {
        console.log("that's wrong")
        $scope.fruitClasses[i] = 'red';
      }
    }
  }

  $scope.moveRight = function(index, items) {
    $scope.myVeggiesList.push($scope.fruitsAndVeggiesList[index]);
    $scope.fruitsAndVeggiesList.splice(index, 1)
    console.log(items);
    for( var i = 0; i < vegetables.length; i++) {
      console.log(vegetables[i]);
      if(items === vegetables[i]) {
        console.log("A match");
        return $scope.myClassName = 'green' 
      } else if(items !== vegetables[i]) {
        console.log("that's wrong")
        $scope.myClassName = 'red';
      }
    }
  }

  $scope.toAssFromVeggies = function(index) {
    $scope.fruitsAndVeggiesList.push($scope.myVeggiesList[index]);
    $scope.myVeggiesList.splice(index, 1);
  }

  $scope.toAssFromFruit = function(index) {
    $scope.fruitsAndVeggiesList.push($scope.myFruitsList[index]);
    $scope.myFruitsList.splice(index, 1);
  }

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);