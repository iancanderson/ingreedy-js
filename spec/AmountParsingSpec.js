'use strict';

describe("Amount parsing", function() {
  var parser = Ingreedy;

  it('parses integers', function() {
    var result = parser.parse('2 potatoes');
    expect(result.measurements.length).toBe(1);
    expect(result.measurements[0].amount).toBe('2');
  });

  it('parses large integers', function() {
    var result = parser.parse('12345 potatoes');
    expect(result.measurements.length).toBe(1);
    expect(result.measurements[0].amount).toBe('12345');
  });

  it('parses simple fractions', function() {
    var result = parser.parse('1/2 potato');
    expect(result.measurements.length).toBe(1);
    expect(result.measurements[0].amount).toBe('1/2');
  });

  it('parses mixed numbers', function() {
    var result = parser.parse('1 1/2 potatoes');
    expect(result.measurements.length).toBe(1);
    expect(result.measurements[0].amount).toBe('1 1/2');
  });

  it('parses decimals', function() {
    var result = parser.parse('1.5 potatoes');
    expect(result.measurements.length).toBe(1);
    expect(result.measurements[0].amount).toBe('1.5');
  });

  it('parses decimals without leading digits', function() {
    var result = parser.parse('.5 potatoes');
    expect(result.measurements.length).toBe(1);
    expect(result.measurements[0].amount).toBe('.5');
  });

  it('parses multiple measurements', function() {
    var result = parser.parse('1 Tablespoon and 2 teaspoons cumin');
    expect(result.measurements.length).toBe(2);
    expect(result.measurements[0].amount).toBe('1');
    expect(result.measurements[1].amount).toBe('2');
  });

});
