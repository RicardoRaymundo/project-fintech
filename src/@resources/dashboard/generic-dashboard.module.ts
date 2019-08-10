import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericDashboardActivitiesComponent} from './activities/generic-dashboard-activities.component';
import {GenericDashboardMaterial} from './generic-dashboard.material';
import {SvgIconModule} from '../../@plugins/svg/svg-icon.module';

const COMPONENTS: Array<any> = [
  GenericDashboardActivitiesComponent
];


@NgModule({
  imports: [
    CommonModule,
    GenericDashboardMaterial,
    SvgIconModule
  ],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [...COMPONENTS]
})

export class GenericDashboardModule {
}
