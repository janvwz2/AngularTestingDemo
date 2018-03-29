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

  describe('The add function', () => {
    it('should add numbers correctly', inject([CalculatorService], (service: CalculatorService) => {
      const expected = 3;
      const actual = service.add(1, 2);

      expect(actual).toBe(expected);
    }));
  });

  describe('The subtract function', () => {
    it('should subtract numbers correctly', inject([CalculatorService], (service: CalculatorService) => {
      const expected = -1;
      const actual = service.subtract(1, 2);

      expect(actual).toBe(expected);
    }));
  });

  describe('The divide function', () => {
    it('should handle divide by zero', inject([CalculatorService], (service: CalculatorService) => {
      const expected = Infinity;
      const actual = service.divide(3, 0);

      expect(actual).toBe(expected);
    }));
  });
});

































