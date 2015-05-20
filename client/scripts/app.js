
var myApp = angular.module("myApp", []);
//controller is additional functionality that we want to add
myApp.controller('GiveController', ['$scope', '$http', function($scope, $http){
    $scope.love ={};
    $scope.loveNotes =[];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

   var fetchNotes = function() {
        return $http.get('/love').then(function(response){
            if(response.data.length == 1){
                alert("Thank you for submitting some love");
                location.reload();
            } else{
                console.log(response);
                $scope.love ={};
                $scope.loveNotes = response.data.slice(0, response.data.length - 1);
                console.log(response.data);
                $scope.receivebutton = true;
                $scope.give = false;
            }

        })
    }

    $scope.add = function(love){
        if(!$scope.love.name || !$scope.love.textarea || !$scope.love.title){
            alert("Please fill in all data boxes!");
        } else {
            return $http.post('/love', love).then(fetchNotes());
        }
    };
    //fetchNotes();


    $scope.notes = function () {
        $scope.receive = true;
        $scope.receivebutton =false;

    }

    $scope.updateGive = function(){
        $scope.give = true;
        $scope.receive = false;
    }


}]);
