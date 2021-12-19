export enum Operator {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION
}

export interface Expression<T> {
  get value(): T;
}

export class Value<T> implements Expression<T> {
  constructor (private _value: T) {}

  get value(): T {
      return this._value;
  }
}

export interface BinaryOperation<T> extends Expression<T> {
  get leftHandSide(): Expression<T>;
  get rightHandSide(): Expression<T>;
}

abstract class BasicBinaryOperation<T> implements BinaryOperation<T> {
  constructor (private _leftHandSide: Expression<T>, private _rightHandSide: Expression<T>) {}


  get leftHandSide(): Expression<T> {
    return this._leftHandSide;
  }

  get rightHandSide(): Expression<T> {
      return this._rightHandSide;
  }

  abstract get value(): T;
}

export class Addition extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value + this.rightHandSide.value;
  }
}

export class Subtraction extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value - this.rightHandSide.value;
  }
}

export class Multiplication extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value * this.rightHandSide.value;
  }
}

export class Division extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value / this.rightHandSide.value;
  }
}
