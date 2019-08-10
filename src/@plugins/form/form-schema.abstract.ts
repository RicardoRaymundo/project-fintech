export abstract class FormSchemaAbstract {
  public static get DEFAULT(): any {
    return {};
  }

  public static get VALIDATORS(): any {
    return {};
  }

  public static get FIELDS(): Array<string> {
    return Object.keys(this.DEFAULT);
  }

  public static get FIELD_LABEL(): any {
    return {};
  }

  public static fieldLabel(name: string): string {
    return this.FIELD_LABEL[name];
  }
}
