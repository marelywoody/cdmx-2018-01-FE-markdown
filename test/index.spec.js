const { readmeFile, callback } = require('../index');

describe('readmeFile, es una función', () => {
  test('readmeFile, es una función', () => {
    expect(typeof readmeFile).toBe('function');
  });
  test('callback, es una función', () => {
    expect(typeof callback).toBe('function');
  });
});