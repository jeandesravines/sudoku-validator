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
        const colZone: Col = colZones[j];
        const imod: number = i % 3;
        const jmod: number = j % 3;
        const zoneZoneIndex: number = (imod * 4) + jmod;
        console.log({i, j, zoneZoneIndex});
        const zoneZone: Zone = zoneZones[zoneZoneIndex];

        colZone.insert(value, i);
        zoneZone.insert(value, imod, jmod);
      });
    });

    return [rowZones, colZones, zoneZones].every((subzones: AbstractZone[]) => (
      subzones.every((zone: AbstractZone) => zone.isValid())));
  }
}
