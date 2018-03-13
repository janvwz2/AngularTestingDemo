import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { element, by } from 'protractor';
import { CalculatorService } from './calculator.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          FormsModule, ReactiveFormsModule,
          NgbModule,
        ],
        providers: [
          CalculatorService
        ],
        declarations: [CalculatorComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
