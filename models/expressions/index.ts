export enum Operator {
  ADDITION = '+',
  SUBTRACTION = '-',
  MULTIPLICATION = 'x',
  DIVISION = '/'
}

export interface Expression<T> {
  get value(): T;
  toString(): string;
}

export class Value<T> implements Expression<T> {
  constructor (private _value: T) {}

  get value(): T {
      return this._value;
  }

  toString() {
    return "" + this.value
  }
}

export interface BinaryOperation<T> extends Expression<T> {
  get leftHandSide(): Expression<T>;
  get rightHandSide(): Expression<T>;
  get operator(): Operator;
  toInfixString(): string;
}

abstract class BasicBinaryOperation<T> implements BinaryOperation<T> {
  constructor (private _operator: Operator, private _leftHandSide: Expression<T>, private _rightHandSide: Expression<T>) {}

  get operator(): Operator {
    return this._operator;
  }

  get leftHandSide(): Expression<T> {
    return this._leftHandSide;
  }

  get rightHandSide(): Expression<T> {
      return this._rightHandSide;
  }

  abstract get value(): T;
  toInfixString(): string {
    return `${this.leftHandSide} ${this.operator} ${this.rightHandSide}`;
  }

  toString() {
    return this.toInfixString();
  }
}

export class Addition extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (Operator.ADDITION, new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value + this.rightHandSide.value;
  }
}

export class Subtraction extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (Operator.SUBTRACTION, new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value - this.rightHandSide.value;
  }
}

export class Multiplication extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (Operator.MULTIPLICATION, new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value * this.rightHandSide.value;
  }
}

export class Division extends BasicBinaryOperation<number> {
  constructor (leftHandSide: number, rightHandSide: number) {
    super (Operator.DIVISION, new Value(leftHandSide), new Value(rightHandSide));
  }

  get value(): number {
      return this.leftHandSide.value / this.rightHandSide.value;
  }
}
