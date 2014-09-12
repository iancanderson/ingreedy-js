'use strict';

var ingreedyMatchers = {
    toBeParsedAs: function(util, customEqualityTesters) {
        return {
            compare: function(inputString, expected) {
                var parserResult;
                var specResult = {};

                try {
                    parserResult = Ingreedy.parse(inputString);
                } catch (err) {
                    specResult.pass = false;
                }

                if (specResult.pass !== false) {
                    specResult.pass = util.equals(parserResult, expected);
                }

                if (specResult.pass) {
                    specResult.message = 'Ingreedy successfully parsed "' + inputString + '"';
                } else {
                    specResult.message = 'Ingreedy parsed \n' + JSON.stringify(parserResult) + '\ninstead of \n' + JSON.stringify(expected);
                }

                return specResult;
            }
        }
    }
};

describe("Ingreedy", function() {
    var parser = Ingreedy;

    beforeEach(function() {
        jasmine.addMatchers(ingreedyMatchers);
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values', function() {
            expect('1 lb potatoes').toBeParsedAs({
                measurements: [{
                    amount: '1',
                    unit: 'lb'
                }],
                ingredient: 'potatoes'
            });
        });
    });

    describe('ingredient additions with a container', function() {
        it('parses the correct values', function() {
            expect('2 28 oz can tomatoes').toBeParsedAs({
                measurements: [{
                    amount: '2',
                    container: {
                        amount: '28',
                        unit: 'oz'
                    }
                }],
                ingredient: 'can tomatoes'
            });
        });
    });

    describe('ingredient additions with multiple measurements', function() {
        it('parses the correct values', function() {
            expect('1 Tablespoon and 2 teaspoons cumin').toBeParsedAs({
                measurements: [{
                    amount: '1',
                    unit: 'Tablespoon'
                }, {
                    amount: '2',
                    unit: 'teaspoons'
                }],
                ingredient: 'cumin'
            });
        });
    });

    describe('ingredient additions with special characters', function() {
        it('parses the correct values', function() {
            expect('1/2 pound smoked sausage (such as NameBrand©), cut into 1/4-inch thick slices').toBeParsedAs({
                measurements: [{
                    amount: '1/2',
                    unit: 'pound'
                }],
                ingredient: 'smoked sausage (such as NameBrand©), cut into 1/4-inch thick slices'
            });
        });
    });
});
