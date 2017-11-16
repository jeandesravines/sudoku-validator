import Matrix from '../../lib/models/matrix';

describe('isValid', () => {
  it('should not be valid - rows.length < 9', () => {
    const matrix: Matrix = new Matrix([
      [],
    ]);

    expect(matrix.isValid()).toBe(false);
  });

  it('should not be valid - cols.length < 9', () => {
    const matrix: Matrix = new Matrix([
      [1, 2, 3],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ]);

    expect(matrix.isValid()).toBe(false);
  });

  it('should be valid', () => {
    const matrix: Matrix = new Matrix([
      [7, 4, 5, 8, 2, 6, 3, 9, 1],
      [2, 8, 6, 9, 1, 3, 4, 7, 5],
      [1, 3, 9, 7, 5, 4, 2, 6, 8],
      [3, 9, 4, 2, 7, 1, 5, 8, 6],
      [6, 1, 7, 3, 8, 5, 9, 2, 4],
      [5, 2, 8, 4, 6, 9, 7, 1, 3],
      [8, 6, 2, 5, 4, 7, 1, 3, 9],
      [9, 5, 1, 6, 3, 2, 8, 4, 7],
      [4, 7, 3, 1, 9, 8, 6, 5, 2],
    ]);

    expect(matrix.isValid()).toBe(true);
  });
});
