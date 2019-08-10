import {GlobalTypesInterface} from './global-types.interface';


export class GlobalTypes {
  /**
   * Localiza o identificador do tipo e retorna o label
   * @param value Identificador do tipo para ser localizado
   * @param list Lista de valores para ser processado
   */
  public static value(value: string, list: Array<GlobalTypesInterface>): string {
    const len: number = list.length;
    let label: string = 'Não definido';
    for (let i = 0; i < len; i++) {
      if (list[i].value !== '' && list[i].value === value) {
        label = list[i].label;
      }
    }
    return label;
  }
}


export const CONTACT_TYPES: Array<string> = [
  'Geral', 'Cobrança', 'Vendas', 'Suporte', 'Outro'
];

export const PHONE_TYPES: Array<GlobalTypesInterface> = [
  {value: '', label: 'Tipo...'},
  {value: 'GERAL', label: 'Geral'},
  {value: 'COBRANCA', label: 'Cobrança'},
  {value: 'VENDAS', label: 'Vendas'},
  {value: 'SUPORTE', label: 'Suporte'},
  {value: 'OUTRO', label: 'Outro'}
];

export const GENERAL_TYPES: Array<GlobalTypesInterface> = [
  {value: '', label: 'Tipo...'},
  {value: 'PESSOAL', label: 'Pessoal'},
  {value: 'TRABALHO', label: 'Trabalho'},
  {value: 'PRINCIPAL', label: 'Principal'},
  {value: 'COBRANCA', label: 'Cobrança'},
  {value: 'OUTRO', label: 'Outro'}
];

export const PHONE_USAGE: Array<GlobalTypesInterface> = [
  {value: '', label: 'Tipo...'},
  {value: 'CELULAR', label: 'Celular'},
  {value: 'CASA', label: 'Casa'},
  {value: 'TRABALHO', label: 'Trabalho'},
  {value: 'PRINCIPAL', label: 'Principal'},
  {value: 'FAX', label: 'Fax'},
  {value: 'OUTRO', label: 'Outro'}
];

export const PHONE_OPERATORS: Array<GlobalTypesInterface> = [
  {value: '', label: 'Operadora...'},
  {value: 'OI', label: 'Oi'},
  {value: 'TIM', label: 'Tim'},
  {value: 'VIVO', label: 'Vivo'},
  {value: 'CLARO', label: 'Claro'},
  {value: 'NEXTEL', label: 'Nextel'},
  {value: 'PORTO_SEGURO_CONECTA', label: 'Porto Seguro Conecta'},
];

export const STATES: Array<GlobalTypesInterface> = [
  {value: '', label: 'UF...'},
  {value: 'AC', label: 'AC'},
  {value: 'AL', label: 'AL'},
  {value: 'AM', label: 'AM'},
  {value: 'AP', label: 'AP'},
  {value: 'BA', label: 'BA'},
  {value: 'CE', label: 'CE'},
  {value: 'DF', label: 'DF'},
  {value: 'ES', label: 'ES'},
  {value: 'MA', label: 'MA'},
  {value: 'MG', label: 'MG'},
  {value: 'MS', label: 'MS'},
  {value: 'MT', label: 'MT'},
  {value: 'PA', label: 'PA'},
  {value: 'PB', label: 'PB'},
  {value: 'PE', label: 'PE'},
  {value: 'PI', label: 'PI'},
  {value: 'PR', label: 'PR'},
  {value: 'RJ', label: 'RJ'},
  {value: 'RN', label: 'RN'},
  {value: 'RO', label: 'RO'},
  {value: 'RR', label: 'RR'},
  {value: 'RS', label: 'RS'},
  {value: 'SC', label: 'SC'},
  {value: 'SE', label: 'SE'},
  {value: 'SP', label: 'SP'},
  {value: 'TO', label: 'TO'}
];

export const SOCIAL_MEDIA: Array<GlobalTypesInterface> = [
  {value: '', label: 'Tipo...'},
  {value: 'WEBSITE', label: 'Endreço de Website'},
  {value: 'WHATS_APP', label: 'Número do WhatsApp'},
  {value: 'FACEBOOK', label: 'Endereço do Facebook'},
  {value: 'LINKEDIN', label: 'Id do LinkedIn'},
  {value: 'HANGOUTS', label: 'E-mail do Hangouts'},
  {value: 'SKYPE', label: 'Id do Skype'},
  {value: 'YAHOO', label: 'Endereço do Yahoo'},
  {value: 'WINDOWS_LIVE', label: 'Id do Windows Live'},
  {value: 'OUTRO', label: 'Outro'}
];

export const TYPES_PERSON: Array<GlobalTypesInterface> = [
  {value: 'JURIDICA', label: 'Pessoa Jurídica'},
  {value: 'FISICA', label: 'Pessoa Física'},
  {value: 'ESTRANGEIRO', label: 'Estrangeiro'}
];

export const TYPES_SITUATIONS: Array<GlobalTypesInterface> = [
  {value: '', label: 'Situação...'},
  {value: 'ATIVO', label: 'Ativo'},
  {value: 'INATIVO', label: 'Inativo'},
  {value: 'BAIXADO', label: 'Baixado'},
  {value: 'ISENTO', label: 'Isento'},
  {value: 'AVALIACAO', label: 'Avaliação'}
];

export const CLIENT_TYPES_SITUATIONS: Array<GlobalTypesInterface> = [
  {value: '', label: 'Situação...'},
  {value: 'ATIVO', label: 'Ativo'},
  {value: 'INATIVO', label: 'Inativo'},
  {value: 'SEM_MOVIMENTO', label: 'Sem Movimento'}
];

export const TYPES_SALARIES: Array<GlobalTypesInterface> = [
  {value: '', label: 'Vencimento...'},
  {value: 'MES_CORRENTE', label: 'No mês corrente'},
  {value: 'MES_SEGUINTE', label: 'No mês seguinte'},
  {value: 'EM_DOIS_MESES', label: 'Em dois meses'}
];

export const TYPES_PERIODICITY: Array<GlobalTypesInterface> = [
  {value: '', label: 'Periodicidade...'},
  {value: 'MENSAL', label: 'Mensal'},
  {value: 'BIMESTRAL', label: 'Bimestral'},
  {value: 'TRIMESTRAL', label: 'Trimestral'},
  {value: 'SEMESTRAL', label: 'Semestral'},
  {value: 'ANUAL', label: 'Anual'},
  {value: 'BIANUAL', label: 'Bianual'},
  {value: 'TRIANUAL', label: 'Trianual'}
];

export const DAYS: Array<GlobalTypesInterface> = [
  {value: null, label: 'Dia...'},
  {value: 1, label: '01'},
  {value: 2, label: '02'},
  {value: 3, label: '03'},
  {value: 4, label: '04'},
  {value: 5, label: '05'},
  {value: 6, label: '06'},
  {value: 7, label: '07'},
  {value: 8, label: '08'},
  {value: 9, label: '09'},
  {value: 10, label: '10'},
  {value: 11, label: '11'},
  {value: 12, label: '12'},
  {value: 13, label: '13'},
  {value: 14, label: '14'},
  {value: 15, label: '15'},
  {value: 16, label: '16'},
  {value: 17, label: '17'},
  {value: 18, label: '18'},
  {value: 19, label: '19'},
  {value: 20, label: '20'},
  {value: 21, label: '21'},
  {value: 22, label: '22'},
  {value: 23, label: '23'},
  {value: 24, label: '24'},
  {value: 25, label: '25'},
  {value: 26, label: '26'},
  {value: 27, label: '27'},
  {value: 28, label: '28'},
  {value: 29, label: '29'},
  {value: 30, label: '30'},
  {value: 31, label: '31'}
];
