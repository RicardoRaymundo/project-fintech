import {Component, Inject} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'svg-icon',
  template: ''
})
export class SvgIconComponent {
  /**
   * Constructor
   *
   * @param iconRegistry
   * @param sanitizer
   * @param router
   */
  constructor(@Inject(MatIconRegistry) iconRegistry: MatIconRegistry,
              @Inject(DomSanitizer) sanitizer: DomSanitizer,
              public router: Router) {

    // iconRegistry.addSvgIcon('chart', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chart.svg'));
    iconRegistry.addSvgIconLiteral('flag', sanitizer.bypassSecurityTrustHtml(`
        <svg class="mini-icon">
          <path d="M9.84,2.35l.47,2.36h6.16v7.05H12.52l-.47-2.35H3.53V2.35H9.84M11.76,0H1.18V20H3.53V11.76h6.59l.47,2.36h8.23V2.35H12.24Z"/>
        </svg>
      `));
    iconRegistry.addSvgIconLiteral('schedule', sanitizer.bypassSecurityTrustHtml(`
        <svg class="mini-icon">
          <path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Zm.5-13H9v6l5.25,3.15L15,12.92l-4.5-2.67Z"/>
        </svg>
      `));

    iconRegistry.addSvgIconLiteral('how_to_reg', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path  d="M8.43,9.74a4.2,4.2,0,1,0-4.2-4.2A4.19,4.19,0,0,0,8.43,9.74Zm0-6.3a2.1,2.1,0,1,1-2.1,2.1A2.1,2.1,0,0,1,8.43,3.44ZM2.13,16c.21-.66,2.7-1.76,5.2-2l2.15-2.1a10.39,10.39,0,0,0-1.05-.06C5.62,11.84,0,13.24,0,16v2.1H9.48L7.38,16ZM18.5,10.26l-5.38,5.43-2.18-2.18L9.48,15l3.64,3.67L20,11.74Z"
  transform="translate(-0.03 -1.34)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('inbox', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M17,1H3A2,2,0,0,0,1,3V17a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V3A2,2,0,0,0,17,1Zm0,16H3V14H6.56a4,4,0,0,0,6.9,0H17Zm0-5H12a2,2,0,0,1-4,0H3V3H17Z"
    transform="translate(-1 -1)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('comment', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M19,2.8A1.8,1.8,0,0,0,17.2,1H2.8A1.81,1.81,0,0,0,1,2.8V13.6a1.81,1.81,0,0,0,1.8,1.8H15.4L19,19Zm-1.79,0V14.65L16.15,13.6H2.8V2.8ZM4.6,10H15.4v1.8H4.6Zm0-2.7H15.4V9.1H4.6Zm0-2.7H15.4V6.4H4.6Z"
    transform="translate(-1 -1)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('notifications', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M10,19.75a2,2,0,0,0,2-2H8A2,2,0,0,0,10,19.75Zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V1.75a1.5,1.5,0,0,0-3,0v.68C5.64,3.11,4,5.67,4,8.75v5l-2,2v1H18v-1Zm-2,1H6v-6c0-2.48,1.51-4.5,4-4.5s4,2,4,4.5Z"
    transform="translate(-2 -0.25)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('beenhere', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M16.36,0H3.64A1.82,1.82,0,0,0,1.83,1.82V13.57a1.83,1.83,0,0,0,.8,1.51L10,20l7.37-4.92a1.83,1.83,0,0,0,.8-1.51V1.82A1.83,1.83,0,0,0,16.36,0ZM10,17.82,3.64,13.58V1.82H16.36V13.57ZM8.17,11.07,5.83,8.72,4.55,10l3.63,3.64,7.27-7.28L14.16,5.07Z"
    transform="translate(-1.82)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('group', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M7,11.75c-2.34,0-7,1.17-7,3.5V17H14V15.25C14,12.92,9.34,11.75,7,11.75ZM2.34,15A9.64,9.64,0,0,1,7,13.75,9.64,9.64,0,0,1,11.66,15ZM7,10A3.5,3.5,0,1,0,3.5,6.5,3.5,3.5,0,0,0,7,10ZM7,5A1.5,1.5,0,1,1,5.5,6.5,1.5,1.5,0,0,1,7,5Zm7,6.81a4.19,4.19,0,0,1,2,3.44V17h4V15.25C20,13.23,16.5,12.08,14,11.81ZM13,10a3.5,3.5,0,0,0,0-7,3.45,3.45,0,0,0-1.5.35,5.46,5.46,0,0,1,0,6.3A3.45,3.45,0,0,0,13,10Z"
    transform="translate(0 -3)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('assignment', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M5,14h7v2H5Zm0-4H15v2H5ZM5,6H15V8H5ZM17,2H12.82A3,3,0,0,0,7.18,2H3a1.75,1.75,0,0,0-.4,0A2,2,0,0,0,1.16,3.23,1.93,1.93,0,0,0,1,4V18a2.05,2.05,0,0,0,.16.78,2.12,2.12,0,0,0,.43.64,2,2,0,0,0,1,.55A2.6,2.6,0,0,0,3,20H17a2,2,0,0,0,2-2V4A2,2,0,0,0,17,2Zm-7-.25a.75.75,0,1,1-.75.75A.76.76,0,0,1,10,1.75ZM17,18H3V4H17Z"
    transform="translate(-1)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('description', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M6,14h8v2H6Zm0-4h8v2H6ZM12,0H4A2,2,0,0,0,2,2V18a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V6Zm4,18H4V2h7V7h5Z" transform="translate(-2)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('email', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M20,4a2,2,0,0,0-2-2H2A2,2,0,0,0,0,4V16a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2ZM18,4,10,9,2,4Zm0,12H2V6l8,5,8-5Z"
        transform="translate(0 -2)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('create', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M1,15.25V19H4.75L15.81,7.94,12.06,4.19ZM3.92,17H3v-.92L12.06,7l.92.92ZM18.71,3.63,16.37,1.29a1,1,0,0,0-1.41,0L13.13,3.12l3.75,3.75L18.71,5A1,1,0,0,0,18.71,3.63Z"
    transform="translate(-1 -1)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('delete', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
        <path d="M14,7V17H6V7h8M12.5,1h-5l-1,1H3V4H17V2H13.5ZM16,5H4V17a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2Z" transform="translate(-3 -1)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('remove-delete', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
  <polygon points="16.8 4.18 16.8 2.18 13.3 2.18 12.3 1.18 7.3 1.18 6.34 2.14 8.38 4.18 16.8 4.18"/>
  <polygon points="15.8 11.6 15.8 5.18 9.38 5.18 11.38 7.18 13.8 7.18 13.8 9.6 15.8 11.6"/>
  <path d="M1.42,0,0,1.42,3.82,5.23v12a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2L18.58,20,20,18.58Zm12.4,17.18h-8v-10l8,8Z"
        transform="translate(-0.01 -0.01)"/>
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('settings-phone', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
  <path  d="M9,7h2V9H9Zm4,0h2V9H13Zm5,6.5a11.36,11.36,0,0,1-3.57-.57,1.12,1.12,0,0,0-.31,0,1,1,0,0,0-.71.29l-2.2,2.2A15.07,15.07,0,0,1,4.62,8.79l2.2-2.21a1,1,0,0,0,.25-1A11.36,11.36,0,0,1,6.5,2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2,17,17,0,0,0,18,19a1,1,0,0,0,1-1V14.5A1,1,0,0,0,18,13.5ZM3,3h1.5A13.26,13.26,0,0,0,5,5.59L3.79,6.8A15,15,0,0,1,3,3ZM17,17a14.9,14.9,0,0,1-3.8-.76L14.4,15a12.75,12.75,0,0,0,2.6.45ZM17,7h2V9H17Z"
  transform="translate(-1 -1)" />
    </svg>
      `));

    iconRegistry.addSvgIconLiteral('place', sanitizer.bypassSecurityTrustHtml(`
      <svg class="mini-icon">
  <path
    d="M10,0A7,7,0,0,0,3,7c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,10,0ZM5,7A5,5,0,0,1,15,7c0,2.88-2.88,7.19-5,9.88C7.92,14.21,5,9.85,5,7Z"
    transform="translate(-3)"/>
  <circle cx="7" cy="7" r="2.5"/>
    </svg>
      `));

  }
}
