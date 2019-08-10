import {FormSchemaAbstract} from '../../@plugins/form/form-schema.abstract';
import {PhoneInterface} from './phone.interface';
import {Validators} from '@angular/forms';


export class GenericPhonesSchema extends FormSchemaAbstract {
  public static get DEFAULT(): PhoneInterface {
    return {
      ddd: '',
      number: '',
      type: ''
    };
  }

  public static get VALIDATORS(): PhoneInterface {
    return {
      ddd: ['', [Validators.required]],
      number: ['', [Validators.required]],
      type: ['', [Validators.required]]
    };
  }

  public static get FIELDS(): Array<string> {
    return Object.keys(this.DEFAULT);
  }

  public static get FIELD_LABEL(): PhoneInterface {
    return {
      ddd: 'DDD',
      number: 'Telefone',
      type: 'Tipo'
    };
  }

  public static fieldLabel(name: string): string {
    return this.FIELD_LABEL[name];
  }
}
