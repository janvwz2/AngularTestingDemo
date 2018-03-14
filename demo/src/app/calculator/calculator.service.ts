import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  add(
    a: number,
    b: number,
  ): number {
    return +a + +b;
  }

  subtract(
    a: number,
    b: number,
  ): number {
    return +a - +b;
  }

  multiply(
    a: number,
    b: number,
  ): number {
    return +a * +b;
  }

  divide(
    a: number,
    b: number,
  ): number {
    return +a / +b;
  }

}
