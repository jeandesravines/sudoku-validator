import AbstractZone from '../../lib/models/abstract-zone';
import Col from '../../lib/models/col';

describe('constructor', () => {
  it('should be an AbstractZone', () => {
    const col: Col = new Col();

    expect(col).toBeInstanceOf(AbstractZone);
  });
});
