'use strict';

describe("Ingreedy", function() {

  it("parses stuff", function() {
    var result = Ingreedy.parse('1 lb potatoes');
    expect(result.amount).toBe('1');
    expect(result.unit).toBe('lb');
    expect(result.ingredient).toBe('potatoes');
  });
});
