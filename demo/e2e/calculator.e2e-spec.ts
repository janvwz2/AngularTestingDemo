import { browser, element, by, ElementFinder } from 'protractor';

describe('Calculator test suite:', () => {

  describe('Navigate to the calculator:', () => {

    describe(`Clicking the 'Open calculator' button`, () => {

      it('should open the calculator', () => {
        browser.get('/');

        const calculatorButton = element(by.linkText('Open calculator'));

        calculatorButton.click();

        expect(browser.getCurrentUrl()).toMatch('/calculator');
      });

    });

  });

  describe('The calculator form:', () => {

    let calculatorElement: ElementFinder;

    beforeAll(() => {
      calculatorElement = element(by.css('.calculator'));
    });

    // Since there are multiple number fields, they have to be tested in the same way
    const validateNumberField = (name: string) => {
      describe(`The '${name}' number field`, () => {

        let numberFieldControl: ElementFinder;
        let inputControl: ElementFinder;

        beforeAll(() => {
          // Load the controls before any test has been executed in this describe
          numberFieldControl = calculatorElement.element(by.css(`.form-group.number-${name}`));
          inputControl = numberFieldControl.element(by.name(name));
        });

        afterEach(() => {
          // Clear the input control before every test in this describe
          inputControl.clear();
        });

        it('should pass validation with correct values', () => {
          inputControl.sendKeys('123');

          expect(inputControl.getAttribute('class')).toContain('ng-valid');
          expect(inputControl.getAttribute('class')).not.toContain('ng-invalid');

          const validationControls = numberFieldControl.all(by.css('.alert.alert-danger'));

          expect(validationControls.count()).toBe(0);
        });

        it('should fail validation with invalid characters', () => {
          inputControl.sendKeys('abc');

          expect(inputControl.getAttribute('class')).not.toContain('ng-valid');
          expect(inputControl.getAttribute('class')).toContain('ng-invalid');

          const validationControl = numberFieldControl.element(by.css('.alert.alert-danger'));

          expect(validationControl).toBeDefined();
          expect(validationControl.isDisplayed()).toBeTruthy();
          expect(validationControl.element(by.tagName('span')).getText()).toContain('Enter a numerical value.');
        });

      });
    };

    validateNumberField('a');
    validateNumberField('b');

    describe('The operation multi-select control', () => {

      let operationControl: ElementFinder;
      let numberAInputControl: ElementFinder;
      let numberBInputControl: ElementFinder;

      beforeAll(() => {
        operationControl = calculatorElement.element(by.css('.form-group.operation'));
        numberAInputControl = calculatorElement.element(by.name('a'));
        numberBInputControl = calculatorElement.element(by.name('b'));
      });

      it('should show validation', () => {
        numberAInputControl.sendKeys('1');
        numberBInputControl.sendKeys('2');

        const validationControl = operationControl.element(by.css('.alert.alert-danger'));

        expect(validationControl.isDisplayed()).toBeTruthy();
      });

      it('should hide the validation error when an operation was selected', () => {
        operationControl
          .element(by.css('.btn-group'))
          .all(by.tagName('label'))
          .first()
          .click();

        const validationControls = operationControl.all(by.css('.alert.alert-danger'));

        expect(validationControls.count()).toBe(0);
      });

    });

    describe('The calculation', () => {

      let previewLabel: ElementFinder;
      let resultLabel: ElementFinder;

      beforeAll(() => {
        previewLabel = calculatorElement
          .element(by.css('.row.preview'))
          .all(by.tagName('span'))
          .first();
        resultLabel = calculatorElement
          .element(by.css('.row.result'))
          .all(by.tagName('span'))
          .first();
      });

      describe('The preview label', () => {
        it('should display the correct value', () => {
          expect(previewLabel.getText()).toBe('a + b = c');
        });
      });

      describe('The result label', () => {
        it('should display the correct calculated value', () => {
          expect(resultLabel.getText()).toBe('1 + 2 = 3');
        });
      });

    });

  });

});
