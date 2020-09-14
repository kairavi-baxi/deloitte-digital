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
            images:'assets/img/products/shelf.jpg',
            price:'$890',
            type:'Shelves'
        },
        {
            product_name: 'Kappu',
            images:'assets/img/products/book-shelf.jpg',
            price:'$890',
            type:'Shelves'
        },
        {
            product_name: 'Nile',
            images:'assets/img/products/book.jpg',
            price:'$890',
            type:'Shelves'
        },
        {
            product_name: 'Mole',
            images:'assets/img/products/pink-sofa.jpg',
            price:'$890',
            type:'Shelves'
        },
        {
            product_name: 'Trait',
            images:'assets/img/products/black-sofa.jpg',
            price:'$890',
            type:'Shelves'
        },
        {
            product_name: 'Chair',
            images:'assets/img/products/garden-chair.jpg',
            price:'$890',
            type:'Shelves'
        },
        {
            product_name: 'Garden Sofa',
            images:'assets/img/products/garden-sofa.jpg',
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