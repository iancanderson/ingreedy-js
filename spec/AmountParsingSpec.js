'use strict';

describe("Ingreedy", function() {
  var parser = Ingreedy;

  it('parses integers', function() {
    var result = parser.parse('2 potatoes');
    expect(result.amount).toBe('2');
  });

  it('parses large integers', function() {
    var result = parser.parse('12345 potatoes');
    expect(result.amount).toBe('12345');
  });

  it('parses simple fractions', function() {
    var result = parser.parse('1/2 potato');
    expect(result.amount).toBe('1/2');
  });

  it('parses mixed numbers', function() {
    var result = parser.parse('1 1/2 potatoes');
    expect(result.amount).toBe('1 1/2');
  });

  it('parses decimals', function() {
    var result = parser.parse('1.5 potatoes');
    expect(result.amount).toBe('1.5');
  });

  it('parses decimals without leading digits', function() {
    var result = parser.parse('.5 potatoes');
    expect(result.amount).toBe('.5');
  });

});
