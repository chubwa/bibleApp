/**
 * Created by mahane on 10/5/15.
 */
angular.module("bibleStore")
    .constant("cathoricUrl","http://localhost:5500/catholic")
    .controller("mainFrontPageCtrl",function($scope,$http,cathoricUrl){
    var availableData=null;
    $http.get(cathoricUrl)
        .success(function(data){
             availableData=data;
        })
        .error(function(error){
             availableData=error;
        });
    $scope.catholic=function(){
    $scope.data=availableData;
            console.log(availableData);
            console.log("Yes");
      }
  });