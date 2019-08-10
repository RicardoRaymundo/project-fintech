import {Component, ElementRef, Inject, OnInit} from '@angular/core';


@Component({
  selector: 'generic-dashboard-activities',
  templateUrl: './generic-dashboard-activities.template.html'
})
export class GenericDashboardActivitiesComponent implements OnInit {
  public listActivities: Array<any> = [
    {label: 'Trabalhos', total: 32, link: '', icon: 'assignment'},
    {label: 'Projetos', total: 12, link: '', icon: 'flag'},
    {label: 'Tarefas', total: 245, link: '', icon: 'schedule'},
    {label: 'Documentos', total: 13, link: '', icon: 'inbox'},
    {label: 'Comentários', total: 15, link: '', icon: 'comment'},
    {label: 'Marcadores', total: 154, link: '', icon: 'beenhere'},
    {label: 'Artigos', total: 1, link: '', icon: 'description'},
    {label: 'Contatos', total: 37, link: '', icon: 'how_to_reg'},
    {label: 'Notificações', total: 26, link: '', icon: 'notifications'},
    {label: 'Equipes', total: 14, link: '', icon: 'group'}
  ];

  constructor(@Inject(ElementRef) public elementRef: ElementRef) {

  }

  ngOnInit() {
    this._sortList();
  }

  /**
   * Dispara evento para abrir o módulo relacionado com o item clicado
   * @param item
   */
  public onClickActivity(item: any): void {
    console.log('CLICK', item);
  }

  /**
   * Ordena a lista de atividades e remove elementos com valor zero
   * @private
   */
  private _sortList(): void {
    const listActivities: Array<any> = [];
    this.listActivities.forEach((item) => {
      if (item.total) {
        listActivities.push(item);
      }
    });

    listActivities.sort((a, b) => {
      if (a.label > b.label) {
        return 1;
      }
      if (a.label < b.label) {
        return -1;
      }
      return 0;
    });

    this.listActivities = listActivities;
  }
}
