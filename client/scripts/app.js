
var myApp = angular.module("myApp", []);
//controller is additional functionality that we want to add
myApp.controller('GiveController', ['$scope', '$http', function($scope, $http){
    $scope.love ={};
    $scope.loveNotes =[];

   var fetchNotes = function() {
        return $http.get('/love').then(function(response){
            console.log(response);
            $scope.love ={};
            $scope.loveNotes = response.data;
            console.log(response.data);
        })
    }

    $scope.add = function(love){
        $scope.receivebutton = true;
        $scope.give = false;
        return $http.post('/love', love).then(fetchNotes());
    };
    //fetchNotes();

    //$scope.heading = "Message: ";

    $scope.notes = function () {
        $scope.receive = true;
        $scope.receivebutton =false;

    }

    $scope.updateGive = function(){
        $scope.give = true;
        $scope.receive = false;
    }

    //$scope.goodbyeMessage = function(){
    //    $scope.message = "Goodbye, " + $scope.name + " :(";
    //}
}]);

//myApp.controller('ReceiveController', ['$scope', function($scope){
//    $scope.heading = "Message: ";
//
//    $scope.updateReceive = function(){
//        $scope.receive = true;
//        //$scope.give =false;
//    }
//
//    $scope.goodbyeMessage = function(){
//        $scope.message = "Goodbye, " + $scope.name + " :(";
//    }
//}]);