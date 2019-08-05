export class UtilsValidators {

  /**
   * @author Arthur Araújo http://araujo.cc/
   * http://kazale.com/angular-2-mascara-entrada-dados-input-mask-diretivas
   * @param value Números de cnpj para validar
   */
  public static isCnpj(value: any): boolean {
    if (!value) {
      return;
    }

    const matrix = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    if ((value = value.replace(/[^\d]/g, '')).length != 14) {
      return false;
    }

    if (/0{14}/.test(value)) {
      return false;
    }

    for (var i = 0, n = 0; i < 12; n += value[i] * matrix[++i]) {
    }
    if (value[12] !== (((n %= 11) < 2) ? 0 : 11 - n)) {
      return false;
    }

    for (var i = 0, n = 0; i <= 12; n += value[i] * matrix[i++]) {
    }
    return value[13] == (((n %= 11) < 2) ? 0 : 11 - n);
  };

}
