
var myApp = angular.module("myApp", []);
//controller is additional functionality that we want to add
myApp.controller('GiveController', ['$scope', function($scope){
    $scope.heading = "Message: ";

    $scope.updateGive = function(e){
        e.preventDefault();
        $scope.give = true;
        //$score.giveLove = false;
        //$scope.receive = false;
    }

    $scope.goodbyeMessage = function(){
        $scope.message = "Goodbye, " + $scope.name + " :(";
    }
}]);

myApp.controller('ReceiveController', ['$scope', function($scope){
    $scope.heading = "Message: ";

    $scope.updateReceive = function(){
        $scope.receive = true;
        //$scope.give =false;
    }

    $scope.goodbyeMessage = function(){
        $scope.message = "Goodbye, " + $scope.name + " :(";
    }
}]);