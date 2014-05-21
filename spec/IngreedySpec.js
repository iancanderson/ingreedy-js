'use strict';

describe("Ingreedy", function() {
  var parser = Ingreedy;

  it("parses a simple ingredient addition", function() {
    var result = parser.parse('1 lb potatoes');
    expect(result.amount).toBe('1');
    expect(result.unit).toBe('lb');
    expect(result.ingredient).toBe('potatoes');
  });
});
