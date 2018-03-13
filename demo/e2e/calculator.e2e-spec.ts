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

        beforeEach(() => {
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

    });

    // TODO Add more tests here

  });

});