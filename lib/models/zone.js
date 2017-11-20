import AbstractZone from './abstract-zone';

export default class Zone extends AbstractZone {
  /**
     * @param {number} value
     * @param {number} row
     * @param {number} col
     */
  insert(value: number, row: number, col: number): void {
    super.insert(value, (row * 3) + col);
  }
}
