import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  operations = [
    { value: 'add', sign: '+' },
    { value: 'subtract', sign: '-' },
    { value: 'multiply', sign: 'x' },
    { value: 'divide', sign: '÷' }
  ];
  calculatorForm: FormGroup;
  c: number;

  constructor(
    private _formBuilder: FormBuilder,
    private _calculatorService: CalculatorService,
  ) {
    this.calculatorForm = this._formBuilder.group({
      a: [null, [Validators.required, this.numberValidator()]],
      b: [null, [Validators.required, this.numberValidator()]],
      operation: [null, Validators.required],
    });

    this.calculatorForm.valueChanges.subscribe((value) => {
      console.log('Value', value);

      this.calculate();
    });
  }

  get a() { return this.calculatorForm && this.calculatorForm.get('a'); }
  get b() { return this.calculatorForm && this.calculatorForm.get('b'); }
  get operation() { return this.calculatorForm && this.calculatorForm.get('operation'); }

  ngOnInit() {
  }

  changeOperation(operation: string) {
    this.operation.setValue(operation);
  }

  calculate() {
    if (!this.calculatorForm || this.calculatorForm.invalid) {
      return;
    }

    switch (this.operation.value) {
      case 'add': this.c = this._calculatorService.add(this.a.value, this.b.value); break;
      case 'subtract': this.c = this._calculatorService.subtract(this.a.value, this.b.value); break;
      case 'multiply': this.c = this._calculatorService.multiply(this.a.value, this.b.value); break;
      case 'divide': this.c = this._calculatorService.divide(this.a.value, this.b.value); break;
    }
  }

  isNumber(x: any): boolean {
    if (x === null || x === undefined) {
      return false;
    }

    return !!+x;
  }

  getOperationSign(value: string) {
    const operation = _
      .chain(this.operations)
      .filter(
        (o) => o && o.value === value
      )
      .value()[0] || null;

    return operation && operation.sign || null;
  }

  private numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const isValid = this.isNumber(control.value);

      return isValid ? null : { 'number': { value: control.value } };
    };
  }

}
