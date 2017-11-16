import AbstractZone from '../../lib/models/abstract-zone';
import Zone from '../../lib/models/zone';

describe('constructor', () => {
  it('should be an AbstractZone', () => {
    const zone: Zone = new Zone();

    expect(zone).toBeInstanceOf(AbstractZone);
  });
});
