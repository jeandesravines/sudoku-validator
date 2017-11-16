/**
 * @abstract
 */
export default class AbstractZone {
  /**
   * @param {?number[]} number
   */
  constructor(numbers: ?number[] = []) {
    this.numbers = numbers;
  }

  /**
   * Add a value at a specified index
   * @param {number} value
   * @param {number} index
   * @throws {Error}
   */
  insert(value: number, index: number) {
    if (value < 1 || value > 9) {
      throw new Error('abstract_zone/out_of_bound');
    }

    this.numbers[index] = value;
  }

  /**
   * @return {boolean}
   */
  isValid(): boolean {
    if (this.numbers.length !== 9) {
      return false;
    }

    return this.numbers.every((number, i, numbers) => (
      number > 0 && number < 10 && numbers.indexOf(number) === i
    ));
  }
}
