/**
 * Created by u0101006 on 9/18/2015.
 */
'use strict';

describe('Given we are using an example application',function(){
    var scope = {};
    beforeEach(function(){
        module('exerciseApp');
        inject(function($controller){
            $controller('TestController',{$scope:scope});
        });
    });

    it('should have a defined list',function(){
        expect(scope.list).toBeDefined();
    });

    it('should be able to identify the first character',function(){
        expect(scope.list[0]).toEqual('alpha');
    });

    it('should be able to identify the second character',function(){
        expect(scope.list[1]).toEqual('beta');
    });
    it('should be able to identify the third character',function(){
        expect(scope.list[2]).toEqual('gamma');
    });
    describe('try to add a new greek letter',function(){

        beforeEach(function(){
            scope.add('delta');
        });

        it('we should see the item, delta, we just added to the list',function(){
            var lastIndexOfList = scope.list.length - 1;
            expect(scope.list[lastIndexOfList]).toEqual('delta');
        });
    });

    describe('try to remove a new greek letter',function(){

        beforeEach(function(){
            scope.remove('gamma');
        });

        it('we should see the item, beta is now last in the list',function(){
            var lastIndexOfList = scope.list.length -1;
            expect(scope.list[lastIndexOfList]).toEqual('beta');
        });
    });

});