/**
 * Created by mahane on 10/5/15.
 */
angular.module("bibleStore")
    .constant("churchsetUrl","http://192.168.43.73:5500/churchset?callback=JSON_CALLBACK")
    .constant("churchtabUrl","http://192.168.43.73:5500/churchtab?callback=JSON_CALLBACK")
    .constant("churchUrl","http://192.168.43.73:5500/catholic")
    .constant("ActiveDefaultTab","active")
    .controller("mainFrontPageCtrl",function($scope,$http,$timeout,churchsetUrl,churchtabUrl,ActiveDefaultTab,churchUrl){
    $scope.sets=[];
    $http.get(churchsetUrl)
        .success(function(data){
             $timeout(function() {
                $scope.sets=data;
                $scope.$apply();
            });
          })
        .error(function(error){
            $scope.sets=error;
        });
     $scope.addActiveClass=function(){

     }
   $scope.showAvaliabeTabs=false;
   $scope.data=[];
    $scope.churchNameClick=function(churchName,id){
        $scope.data.length=0;
        $http.get(churchtabUrl+"&uid="+id)
            .success(function(newValue){

                     angular.forEach(newValue,function(newValueIndex,newValueRowData){
                         $scope.data.push({"church":churchName,"id":newValueIndex.id,"name":newValueIndex.name,"uid":newValueIndex.uid})
                 });
                $timeout(function(){
                    $scope.showAvaliabeTabs=true;
                    $scope.data;
                    console.log($scope.data);
                    $scope.$apply();
                });
             });
    }
    $scope.tableOpen=function(id){
        return id;
    }
    //var id=$scope.tableOpen(id);
    $scope.stacks=[];
    $scope.stacked=[];
     $scope.showTabContent=function(churchName,id){
        $scope.loadingImage=true;
        $scope.stacks.length=0;
        $scope.stacked.length=0;
        $http.get(churchUrl)
            .success(function(content){
                $timeout(function(){
            angular.forEach(content,function(contentIndex,contentValue){
                angular.forEach(contentIndex,function(index,value){
                    //$scope.stacks.push(index);
                    if(angular.isArray(index)){
                        angular.forEach(index,function(indexId,indexValue){
                            $scope.stacks.push(indexId)
                        });
                    }

                });
           });
           angular.forEach($scope.stacks,function(key,rows){
               if(key.uid==id){
                   $scope.stacked.push(key)
               }
           });
           $scope.loadingImage=false;
           console.log($scope.stacked);

                },2000);
          })

        }
    });