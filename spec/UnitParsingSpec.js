'use strict';

var unitMatchers = {
  toParseUnit: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        var parserResult;
        var specResult = {};

        try {
          parserResult = actual.parse(expected);
        } catch(err) {
          specResult.pass = false;
        }

        if(specResult.pass !== false) {
          specResult.pass = !util.equals(parserResult.unit, null);
          specResult.pass = !util.equals(parserResult.unit, undefined);
        }

        if(specResult.pass) {
          specResult.message = 'Ingreedy successfully parsed the unit "' + parserResult.unit + '" from "' + expected + '"'
        } else {
          specResult.message = 'Expected Ingreedy to parse the unit from "' + expected + '", but it didn\'t.'
        }

        return specResult;
      }
    }
  }
};

describe("Unit parsing", function() {
  var parser = Ingreedy;

  beforeEach(function() {
    jasmine.addMatchers(unitMatchers);
  });

  describe('ingredients without units', function() {
    it("doesn't parse a unit", function() {
      expect(parser).not.toParseUnit('2 coconuts');
    })

    describe('ingredients with names that start with a unit name', function() {
      it("doesn't parse a unit", function() {
        expect(parser).not.toParseUnit('2 cupcakes');
      })
    });
  });

  describe('when nothing follows the unit', function() {
    it('parses the unit', function() {
      expect(parser).toParseUnit('1 lb');
      expect(parser).toParseUnit('1 cup');
    });
  })

  describe('english units', function() {
    it('parses cups', function() {
      expect(parser).toParseUnit('2 cups flour');
      expect(parser).toParseUnit('2 CUPS flour');
      expect(parser).toParseUnit('2 Cups flour');
      expect(parser).toParseUnit('2 cup flour');
      expect(parser).toParseUnit('2 c. flour');
      expect(parser).toParseUnit('2 c flour');
    });

    it('parses fluid ounces', function() {
      expect(parser).toParseUnit('2 fluid ounces water');
      expect(parser).toParseUnit('1 fluid ounce water');
      expect(parser).toParseUnit('1 fluid oz. water');
      expect(parser).toParseUnit('1 fluid oz water');
      expect(parser).toParseUnit('1 fl. oz. water');
      expect(parser).toParseUnit('1 fl oz water');
      expect(parser).toParseUnit('1 fl oz. water');
      expect(parser).toParseUnit('1 fl. oz water');
      expect(parser).toParseUnit('1 fl ounces water');
      expect(parser).toParseUnit('1 fl ounce water');
      expect(parser).toParseUnit('1 fl. ounce water');
    });

    it('parses gallons', function() {
      expect(parser).toParseUnit('1 gallon water');
      expect(parser).toParseUnit('2 gallons water');
      expect(parser).toParseUnit('2 gal. water');
      expect(parser).toParseUnit('2 gal water');
    });

    it('parses ounces', function() {
      expect(parser).toParseUnit('1 ounce water');
      expect(parser).toParseUnit('2 ounces water');
      expect(parser).toParseUnit('2 oz water');
      expect(parser).toParseUnit('2 oz. water');
    });

    it('parses pints', function() {
      expect(parser).toParseUnit('1 pint water');
      expect(parser).toParseUnit('2 pints water');
    });

    it('parses pounds', function() {
      expect(parser).toParseUnit('2 pounds chocolate');
      expect(parser).toParseUnit('1 pound chocolate');
      expect(parser).toParseUnit('2 lbs. chocolate');
      expect(parser).toParseUnit('2 lbs chocolate');
      expect(parser).toParseUnit('2 lb. chocolate');
      expect(parser).toParseUnit('2 lb chocolate');
    });

    it('parses quarts', function() {
      expect(parser).toParseUnit('2 quarts water');
      expect(parser).toParseUnit('1 quart water');
      expect(parser).toParseUnit('2 qts. water');
      expect(parser).toParseUnit('2 qts water');
      expect(parser).toParseUnit('2 qt. water');
      expect(parser).toParseUnit('2 qt water');
    });

    it('parses tablespoons', function() {
      expect(parser).toParseUnit('2 tablespoons water');
      expect(parser).toParseUnit('1 tablespoon water');
      expect(parser).toParseUnit('1 tbsp. water');
      expect(parser).toParseUnit('1 tbsp water');
      expect(parser).toParseUnit('1 tbs. water');
      expect(parser).toParseUnit('1 tbs water');
      expect(parser).toParseUnit('1 T. water');
      expect(parser).toParseUnit('1 T water');
    });

    it('parses teaspoons', function() {
      expect(parser).toParseUnit('2 teaspoons water');
      expect(parser).toParseUnit('1 teaspoon water');
      expect(parser).toParseUnit('1 tsp. water');
      expect(parser).toParseUnit('1 tsp water');
      expect(parser).toParseUnit('1 t. water');
      expect(parser).toParseUnit('1 t water');
    });
  });

  describe('metric units', function() {
    it('parses grams', function() {
      expect(parser).toParseUnit('2 grams water');
      expect(parser).toParseUnit('1 gram water');
      expect(parser).toParseUnit('1 gr. water');
      expect(parser).toParseUnit('1 gr water');
      expect(parser).toParseUnit('1 g. water');
      expect(parser).toParseUnit('1 g water');
    });

    it('parses kilograms', function() {
      expect(parser).toParseUnit('2 kilograms water');
      expect(parser).toParseUnit('1 kilogram water');
      expect(parser).toParseUnit('1 kg. water');
      expect(parser).toParseUnit('1 kg water');
    });

    it('parses liters', function() {
      expect(parser).toParseUnit('2 liters water');
      expect(parser).toParseUnit('1 liter water');
      expect(parser).toParseUnit('1 L. water');
      expect(parser).toParseUnit('1 l. water');
      expect(parser).toParseUnit('1 L water');
      expect(parser).toParseUnit('1 l water');
    });

    it('parses milligrams', function() {
      expect(parser).toParseUnit('2 milligrams water');
      expect(parser).toParseUnit('1 milligram water');
      expect(parser).toParseUnit('1 mg. water');
      expect(parser).toParseUnit('1 mg water');
    });

    it('parses milliliters', function() {
      expect(parser).toParseUnit('2 milliliters water');
      expect(parser).toParseUnit('1 milliliter water');
      expect(parser).toParseUnit('1 ml. water');
      expect(parser).toParseUnit('1 ml water');
    });

    it('parses a dozen', function() {
      expect(parser).toParseUnit('1 dozen eggs');
      expect(parser).toParseUnit('1/2 dozen eggs');
    });

  });

  describe('imprecise units', function() {
    it('parses dashes', function() {
      expect(parser).toParseUnit('2 dashes salt');
      expect(parser).toParseUnit('1 dash salt');
    });

    it('parses handfuls', function() {
      expect(parser).toParseUnit('2 handfuls salt');
      expect(parser).toParseUnit('1 handful salt');
    });

    it('parses pinches', function() {
      expect(parser).toParseUnit('2 pinches salt');
      expect(parser).toParseUnit('1 pinch salt');
    });

    it('parses touches', function() {
      expect(parser).toParseUnit('2 touches salt');
      expect(parser).toParseUnit('1 touch salt');
    });
  });
});
