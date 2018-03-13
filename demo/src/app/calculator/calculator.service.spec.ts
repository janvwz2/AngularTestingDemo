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

      expect(expected).toBe(actual);
    }));
  });
});

































