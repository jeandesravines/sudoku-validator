import AbstractZone from '../../lib/models/abstract-zone';

describe('isValid', () => {
  it('should not be valid - length < 9', () => {
    const zone: AbstractZone = new AbstractZone([1, 2, 3]);
    const isValid: boolean = zone.isValid();

    expect(isValid).toBe(false);
  });

  it('should not be valid - numbers != [0;9]', () => {
    const zone: AbstractZone = new AbstractZone([1, 2, 3, 4, 5, 6, 7, 8, 10]);
    const isValid: boolean = zone.isValid();

    expect(isValid).toBe(false);
  });

  it('should not be valid - 2 times same numbers', () => {
    const zone: AbstractZone = new AbstractZone([1, 2, 3, 4, 5, 6, 7, 8, 8]);
    const isValid: boolean = zone.isValid();

    expect(isValid).toBe(false);
  });

  it('should be valid', () => {
    const zone: AbstractZone = new AbstractZone([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const isValid: boolean = zone.isValid();

    expect(isValid).toBe(true);
  });
});

describe('insert', () => {
  it('throws an error - value < 1 ', () => {
    const zone: AbstractZone = new AbstractZone([]);

    expect(() => {
      zone.insert(0, 0);
    }).toThrow(new Error('abstract_zone/out_of_bound'));
  });

  it('throws an error - value > 9 ', () => {
    const zone: AbstractZone = new AbstractZone([]);

    expect(() => {
      zone.insert(10, 0);
    }).toThrow(new Error('abstract_zone/out_of_bound'));
  });

  it('throws an error - value > 9 ', () => {
    const zone: AbstractZone = new AbstractZone([]);

    zone.insert(8, 6);

    expect(zone.numbers[6]).toBe(8);
  });
});
