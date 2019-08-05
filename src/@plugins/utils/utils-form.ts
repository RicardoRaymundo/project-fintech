import {FormGroup} from '@angular/forms';


export class UtilsForm {
  /**
   * @source https://stackoverflow.com/questions/40529817/reactive-forms-mark-fields-as-touched
   *
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  public static markFormGroupTouched(formGroup: FormGroup) {
    (<any> Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        UtilsForm.markFormGroupTouched(control);
      }
    });
  }

  /**
   * Recupera erros de todos os controles em um formGroup
   * @param formGroup - O form group que deve ser recuperado os erros
   */
  public static formGroupErrors(formGroup: FormGroup): Array<string> {
    const result: Array<any> = [];

    for (const item in formGroup.controls) {
      const control: any = formGroup.controls[item];
      if (control.errors) {
        result.push(item);
      }
      if (control.controls) {
        UtilsForm.formGroupErrors(control);
      }
    }

    return result;
  }

}
