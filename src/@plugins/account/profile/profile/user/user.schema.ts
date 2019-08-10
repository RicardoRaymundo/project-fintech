import {FormSchemaAbstract} from '../../../../form/form-schema.abstract';
import {UserInterface} from './user.interface';
import {Validators} from '@angular/forms';


export class UserSchema extends FormSchemaAbstract {

  public static get DEFAULT(): UserInterface {
    return {
      _id: '',
      username: '',
      fullname: '',
      bio: '',
      role: '',
      email: '',
      password: '',
      password_token: '',
      permission_id: '',
      _info: ''
    };
  }

  public static get VALIDATORS(): UserInterface {
    return {
      _id: [''],
      username: [''],
      fullname: ['', [Validators.required]],
      role: [''],
      bio: [''],
      email: [''],
      password: [''],
      password_token: [''],
      permission_id: [''],
      _info: ['']
    };
  }

  public static get FIELDS(): Array<string> {
    return Object.keys(this.DEFAULT);
  }

  public static get FIELD_LABEL(): UserInterface {
    return {
      _id: 'Identificador do Documento',
      username: 'Nme de Usuário',
      fullname: 'Nome completo',
      role: 'Cargo / Função',
      bio: 'Informações pessoais do usuário',
      email: 'E-mail',
      password: 'Senha',
      password_token: 'Senha',
      permission_id: 'Identificador da permissão global',
      _info: 'Informação do Documento'
    };
  }

  public static fieldLabel(name: string): string {
    return this.FIELD_LABEL[name];
  }
}
