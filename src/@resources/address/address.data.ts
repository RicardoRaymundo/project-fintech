import {Validators} from '@angular/forms';
import {AddressInterface} from './address.interface';


export class AddressData implements AddressInterface {

  constructor(value?: AddressInterface) {
    this.value = value;
  }

  public static get VALIDATORS(): any {
    return {
      postal_code: [''],
      address: ['', [Validators.required]],
      number: [''],
      complement: [''],
      neighborhood: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      type: ['', [Validators.required]]
    };
  }

  /**
   * postal_code
   */
  private _postal_code: string;

  public get postal_code(): string {
    return this._postal_code;
  }

  public set postal_code(value: string) {
    this._postal_code = value;
  }

  /**
   * address
   */
  private _address: string;

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }

  /**
   * number
   */
  private _number: string;

  public get number(): string {
    return this._number;
  }

  public set number(value: string) {
    this._number = value;
  }

  /**
   * Informações complementares do endereço: quadra, bloco, conjunto, apartamento,
   */
  private _complement: string;

  public get complement(): string {
    return this._complement;
  }

  public set complement(value: string) {
    this._complement = value;
  }

  /**
   * Bairro
   */
  private _neighborhood: string;

  public get neighborhood(): string {
    return this._neighborhood;
  }

  public set neighborhood(value: string) {
    this._neighborhood = value;
  }

  /**
   * Cidade
   */
  private _city: string;

  public get city(): string {
    return this._city;
  }

  public set city(value: string) {
    this._city = value;
  }

  /**
   * Estado
   */
  private _state: string;

  public get state(): string {
    return this._state;
  }

  public set state(value: string) {
    this._state = value;
  }

  /**
   * Tipo de cliente FISICA|JURIDICA
   */
  private _type: string;

  public get type(): string {
    return this._type;
  }

  public set type(value: string) {
    this._type = value;
  }

  public get value(): AddressInterface {
    return {
      postal_code: this.postal_code,
      address: this.address,
      number: this.number,
      complement: this.complement,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      type: this.type
    };
  }

  /**
   * Recebe dados do formulário para popular os dados do data
   * @param value
   */
  public set value(value: AddressInterface) {
    if (value) {
      this.complement = value.complement;
      this.neighborhood = value.neighborhood;
      this.postal_code = value.postal_code;
      this.number = value.number;
      this.address = value.address;
      this.city = value.city;
      this.state = value.state;
      this.type = value.type;
    }
  }
}
