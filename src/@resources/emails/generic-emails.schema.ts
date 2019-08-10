import {FormSchemaAbstract} from '../../@plugins/form/form-schema.abstract';
import {EmailInterface} from './email.interface';
import {Validators} from '@angular/forms';


export class GenericEmailsSchema extends FormSchemaAbstract {
  public static get DEFAULT(): EmailInterface {
    return {
      address: ''
    };
  }

  public static get VALIDATORS(): EmailInterface {
    return {
      address: ['', [Validators.email]]
    };
  }

  public static get FIELDS(): Array<string> {
    return Object.keys(this.DEFAULT);
  }

  public static get FIELD_LABEL(): EmailInterface {
    return {
      address: 'E-mail'
    };
  }

  public static fieldLabel(name: string): string {
    return this.FIELD_LABEL[name];
  }
}
