/**
 * Created by mahane on 10/20/15.
 */
angular.module("customFilters",[])
   .filter("unique",function(){
        return function(data,stringIdValues){
            if(angular.isArray(data)&&angular.isString(stringIdValues)){
                var result=[];
                var key={};
                for(var i=0;i< data.length;i++){
                    var val=data[i][stringIdValues];
                    if(angular.isUndefined(key[val])){
                        key[val]=true
                        result.push(val);
                    }
                }
                return result;
            }
            return data;
        }
    });