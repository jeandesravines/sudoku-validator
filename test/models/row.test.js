import AbstractZone from '../../lib/models/abstract-zone';
import Row from '../../lib/models/row';

describe('constructor', () => {
  it('should be an AbstractZone', () => {
    const row: Row = new Row();

    expect(row).toBeInstanceOf(AbstractZone);
  });
});
