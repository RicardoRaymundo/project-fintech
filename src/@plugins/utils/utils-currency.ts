/**
 * https://www.npmjs.com/package/ngx-currency
 */
export class UtilsCurrency {
  public static customMaskConfig() {
    return {
      align: "right",
      allowNegative: true,
      allowZero: true,
      decimal: ",",
      precision: 2,
      prefix: "R$ ",
      suffix: "",
      thousands: ".",
      nullable: true
    }
  };
}
