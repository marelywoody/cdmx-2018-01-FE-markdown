const { mdLinks, readFiles, resquest } = require('../md-links');

describe('mdLinks, es una función', () => {
  test('mdLinks, es una función', () => {
    expect(typeof mdLinks).toEqual('function');
  });
  test('readFiles, es una función', () => {
    expect(typeof readFiles).toBe('function');
  });
  test('resquest, es una función', () => {
    expect(typeof (resquest)).toBe('function');
  });
});