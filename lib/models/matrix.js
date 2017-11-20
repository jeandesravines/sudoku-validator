import Col from './col';
import Row from './row';
import Zone from './zone';
import AbstractZone from './abstract-zone';

/**
 *
 */
export default class Matrix {
  /**
   * @param {number[][]} matrux
   */
  constructor(matrix: number[][]) {
    /**
     * @const {number[][]}
     */
    this.matrix = matrix;
  }

  /**
   * @return {boolean}
   */
  isValid(): boolean {
    if (this.matrix.length !== 9) {
      return false;
    }

    const rowZones: Row[] = [];
    const colZones: Col[] = Array.from({ length: 9 }, () => new Col());
    const zoneZones: Zone[] = Array.from({ length: 9 }, () => new Zone());

    this.matrix.forEach((columns: number[], i: number) => {
      rowZones[i] = new Row(columns);

      columns.forEach((value: number, j: number) => {
        const iZone: number = parseInt(i / 3, 10) * 3;
        const jZone: number = parseInt(j / 3, 10);
        const zoneIndex: number = iZone + jZone;

        const zoneZone: Zone = zoneZones[zoneIndex];
        const colZone: Col = colZones[j];

        colZone.insert(value, i);
        zoneZone.insert(value, i % 3, j % 3);
      });
    });

    return [rowZones, colZones, zoneZones].every((subzones: AbstractZone[]) => (
      subzones.every((zone: AbstractZone) => zone.isValid())));
  }
}
