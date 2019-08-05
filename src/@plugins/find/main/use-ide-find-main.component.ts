import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UseComponentAbstract} from '../../analytic/use-component.abstract';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'use-ide-find-main',
  templateUrl: './use-ide-find-main.template.html',
  styleUrls: ['../use-ide-find.styles.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UseIdeFindMainComponent extends UseComponentAbstract implements OnInit {

  /* Variável que recebe o valor da função handleFilterChange */
  private filterString: Subject<string> = new Subject<string>();

  /* Função que recebe o valor digitado e coloca em nosso Subject */
  public onFilterChange(value: any) {
    //console.log('VALUE', value);
    this.filterString.next(value);
  }

  /* Fazemos um switchMap em nosso Subject filterString e atribuímos o resultado à nossa lista de usuários, porém existe um debounceTime de 300 milissegundos para evitar fazer requisições enquanto o usuário ainda não finalizou a digitação */
  public ngOnInit(): void {
    this.filterString
      .pipe(debounceTime(300))
      .pipe(map((ev: any) => {
        return ev.target.value;
      }))
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        console.log('VALUE', value, this.search(value));
      }, (error) => {
        console.log('ERROR');
      });
  }

  public search(value: string): string {
    return 'XXXXXX:::' + value;
  }

}
