const { mdLinks, callback } = require('../index');

describe('mdLinks, es una función', () => {
  test('mdLinks, es una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  test('callback, es una función', () => {
    expect(typeof callback).toBe('function');
  });
});