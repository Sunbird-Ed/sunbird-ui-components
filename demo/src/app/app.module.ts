import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SbModule} from '@sunbird-ed/sunbird-ui-components';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {SbCardModule} from './components/card/card.module';
import {NgbdAccordionModule} from './components/accordion/accordion.module';
import {NgbdAlertModule} from './components/alert/alert.module';
import {NgbdButtonsModule} from './components/buttons/buttons.module';
import {NgbdCarouselModule} from './components/carousel/carousel.module';
import {NgbdCollapseModule} from './components/collapse/collapse.module';
import {NgbdDatepickerModule} from './components/datepicker/datepicker.module';
import {NgbdDropdownModule} from './components/dropdown/dropdown.module';
import {NgbdModalModule} from './components/modal/modal.module';
import {NgbdPaginationModule} from './components/pagination/pagination.module';
import {NgbdPopoverModule} from './components/popover/popover.module';
import {NgbdProgressbarModule} from './components/progressbar/progressbar.module';
import {NgbdRatingModule} from './components/rating/rating.module';
import {NgbdTableModule} from './components/table/table.module';
import {NgbdTabsetModule} from './components/tabset/tabset.module';
import {NgbdTimepickerModule} from './components/timepicker/timepicker.module';
import {NgbdToastModule} from './components/toast/toast.module';
import {NgbdTooltipModule} from './components/tooltip/tooltip.module';
import {NgbdTypeaheadModule} from './components/typeahead/typeahead.module';
import {DefaultComponent} from './default';
import {GettingStartedPage} from './pages/getting-started/getting-started.component';
import {PositioningPage} from './pages/positioning/positioning.component';
import {NgbdSharedModule} from './shared';


const DEMOS = [
  SbCardModule,
  NgbdAccordionModule,
  NgbdAlertModule,
  NgbdButtonsModule,
  NgbdCarouselModule,
  NgbdCollapseModule,
  NgbdDatepickerModule,
  NgbdDropdownModule,
  NgbdModalModule,
  NgbdPaginationModule,
  NgbdPopoverModule,
  NgbdProgressbarModule,
  NgbdRatingModule,
  NgbdTableModule,
  NgbdTabsetModule,
  NgbdTimepickerModule,
  NgbdToastModule,
  NgbdTooltipModule,
  NgbdTypeaheadModule
];

const PAGES = [
  GettingStartedPage,
  PositioningPage
];

@NgModule({
  declarations: [AppComponent, DefaultComponent, ...PAGES],
  imports: [BrowserModule, routing, SbModule, NgbModule, NgbdSharedModule, ...DEMOS],
  bootstrap: [AppComponent]
})
export class SbModule {}
