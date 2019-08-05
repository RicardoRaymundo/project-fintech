export class UtilsMask {
  /**
   * Aplica a máscara a determinado valor especificado.
   * @author m4rciosouza https://github.com/m4rciosouza/kz-angular2-webpack-template/blob/master/src/app/shared/validators/kz-cnpj.validator.ts
   *
   * @param mask
   * @param value
   */
  public static apply(mask: string, value: string): string {

    value = value.replace(/\D/g, '');

    const pad = mask.replace(/\D/g, '').replace(/9/g, '_');
    const valueMask = value + pad.substring(0, pad.length - value.length);
    let valueMaskPos = 0;

    value = '';
    for (let i = 0; i < mask.length; i++) {
      if (isNaN(parseInt(mask.charAt(i), 10))) {
        value += mask.charAt(i);
      } else {
        value += valueMask[valueMaskPos++];
      }
    }

    if (value.indexOf('_') > -1) {
      value = value.substr(0, value.indexOf('_'));
    }

    return value;
  }
}
