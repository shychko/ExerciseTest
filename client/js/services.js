'use strict';




angular.module('exerciseApp')
    .service('VersionService', function(){
        this.version = "2.1";
    });


angular.module('exerciseApp')
    .service('GroceryModel', function () {
        var test = this;

        test.getGroceries = function() {

            this.groceryData = [
                {name: 'potato', price: 1.90, previous: 2.05, description: 'its a potato silly'},
                {name: 'apple', price: .90, previous: 1.05, description: 'its a golden delicious'},
                {name: 'rice', price: 2.00, previous: 2.25, description: 'its white and tasty'},
                {name: 'fruit loops', price: 4.00, previous: 4.75, description: 'sugary breakfast'},
                {name: 'vinegar', price: 3.00, previous: 3.25, description: 'clean your coffee maker'}
            ];
            return this.groceryData;
        };
    });