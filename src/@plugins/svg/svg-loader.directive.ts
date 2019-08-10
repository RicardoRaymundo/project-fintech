// Extract necessary symbol information
// Return text of specified svg
import {Directive, ElementRef, Inject, Input, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const extractSymbol = (svg, name) => {
  return svg.split('<symbol')
    .filter((def: string) => def.includes(name))
    .map((def) => def.split('</symbol>')[0])
    .map((def) => '<svg ' + def + '</svg>');
};


@Directive({
  selector: '[useLoader]'
})
export class SvgLoaderDirective implements OnChanges {

  @Input() useLoader: string;

  constructor(@Inject(ElementRef) private element: ElementRef,
              @Inject(HttpClient) private http: HttpClient) {
  }

  ngOnChanges(values) {
    if (
      values.useLoader.currentValue &&
      values.useLoader.currentValue.includes('#')
    ) {
      // The resource url of the svg
      const src = values.useLoader.currentValue.split('#')[0];
      // The id of the symbol definition
      const name = values.useLoader.currentValue.split('#')[1];

      // Load the src
      // Extract interested svg
      // Add svg to the element
      this.http.get(src)
        .pipe(map((res: any) => res.text()),
          map(svg => extractSymbol(svg, name)))
        .toPromise()
        .then(svg => this.element.nativeElement.innerHTML = svg)
        .catch(err => console.log(err));
    }
  }
}
