var app = angular.module('myApp', []);
app.controller("myAppController", function($scope){
//product list
    $scope.products = [
        {
            product_name: 'Coombes',
            images:'assets/img/products/coombes.jpg',
            price:'$2,600',
            type:'Lounge'
        },
        {
            product_name: 'Keeve set',
            images:'assets/img/products/keeve.jpg',
            price:'$590',
            type:'Table and Chairs'
        },
        {
            product_name: 'Momo',
            images:'assets/img/products/book.jpg',
            price:'$890',
            type:'Shelves'
        }
    ]

    //Search function

    $scope.searchFn = function(){
            var data = $scope.products;
           var prod = _.findWhere(data, {product_name:$scope.searchText});
            if(prod){
                $scope.products = [];
                $scope.products.push(prod);
                $scope.nodata = false;
            }else{
                $scope.nodata = true;
            }
    }

    //reset function
    $scope.resetFn = function(){
        $scope.searchText = undefined;
        $scope.nodata = false;
    }

    //Filter function
    $scope.filterFn = function(data){
        var filter_data = $scope.products;
        var prod = _.findWhere(filter_data, {product_name:data});
         if(prod){
             $scope.products = [];
             $scope.products.push(prod);
             $scope.nodata = false;
         }else{
             $scope.nodata = true;
         }
    }
});