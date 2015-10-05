/**
 * Created by mahane on 10/1/15.
 */
angular.module("bibleStore",["ngRoute"])
        .config(function($routeProvider){
        $routeProvider.when("/cathoric",{
          templateUrl:"view/catholic.html"
         });
        $routeProvider.otherwise({
            templateUrl:"view/home.html"
        });
        });

