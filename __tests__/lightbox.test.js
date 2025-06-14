const { changeImage, _setIndex, _getIndex } = require('../lightbox');

describe('changeImage', () => {
  beforeEach(() => {
    global.document = { getElementById: () => ({ style: {} }) };
  });

  test('wraps to first image when incrementing past end', () => {
    _setIndex(6);
    changeImage(1);
    expect(_getIndex()).toBe(0);
  });

  test('wraps to last image when decrementing below zero', () => {
    _setIndex(0);
    changeImage(-1);
    expect(_getIndex()).toBe(6);
  });
});
