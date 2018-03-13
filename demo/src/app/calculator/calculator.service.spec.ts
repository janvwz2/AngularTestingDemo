import { TestBed, inject } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));
});

































// describe('The add function', () => {
//   it('should add numbers correctly', inject([CalculatorService], (service: CalculatorService) => {
//     const expected = 3;
//     const actual = service.add(1, 2);

//     expect(expected).toBe(actual);
//   }));
// });

// describe('The subtract function', () => {
//   it('should subtract numbers correctly', inject([CalculatorService], (service: CalculatorService) => {
//     const expected = -1;
//     const actual = service.subtract(1, 2);

//     expect(expected).toBe(actual);
//   }));
// });

// describe('The multiply function', () => {
//   it('should multiply numbers correctly', inject([CalculatorService], (service: CalculatorService) => {
//     const expected = 6;
//     const actual = service.multiply(3, 2);

//     expect(expected).toBe(actual);
//   }));
// });

// describe('The divide function', () => {
//   it('should divide numbers correctly', inject([CalculatorService], (service: CalculatorService) => {
//     const expected = 2.5;
//     const actual = service.divide(5, 2);

//     expect(expected).toBe(actual);
//   }));
// });
